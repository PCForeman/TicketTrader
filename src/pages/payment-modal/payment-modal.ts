import { Component } from "@angular/core";
import {
  IonicPage,
  NavParams,
  ViewController,
  AlertController,
  ToastController,
  NavController
} from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { AES256 } from "@ionic-native/aes-256";

@IonicPage()
@Component({
  selector: "page-payment-modal",
  templateUrl: "payment-modal.html"
})
export class PaymentModalPage {
  constructor(
    public navParams: NavParams,
    private aCtrl: AlertController,
    private vCtrl: ViewController,
    private afDatabase: AngularFireDatabase,
    private aes: AES256,
    private toast: ToastController,
    private navCtrl: NavController
  ) {}
  listingData: any;
  cardName: any;
  CVC: any;
  cardNo: any;
  expiry: any;

  ionViewWillLoad() {
    const ticket = this.navParams.get("ticket");
    this.listingData = ticket;
    console.log(ticket);
    this.useExistingCard();
  }

  close() {
    this.vCtrl.dismiss();
  }

  useExistingCard() {
    var key = this.listingData.userId;
    this.afDatabase
      .object(`user/${key}`)
      .snapshotChanges()
      .subscribe(snapshot => {
        var allData = snapshot.payload.val();
        var value = Object.keys(allData);
        var cardKey = value[0];
        this.afDatabase
          .object(`user/${key}/${cardKey}`)
          .snapshotChanges()
          .subscribe(async snapshot => {
            const CardNo = snapshot.payload.child(`Card`).val();
            const cardExpiry = snapshot.payload.child(`Expiry`).val();
            const Holder = snapshot.payload.child(`Holder`).val();
            const Key: string = snapshot.payload.child(`Key`).val();
            const IV: string = snapshot.payload.child(`IV`).val();
            var cardNoPlainText: string;
            var cardExpiryPlainText: string;
            var cardHolderPlainText: string;
            await this.aes
              .decrypt(Key, IV, CardNo)
              .then(card => (cardNoPlainText = card))
              .catch((error: any) => console.log(error));

            await this.aes
              .decrypt(Key, IV, cardExpiry)
              .then(exp => (cardExpiryPlainText = exp))
              .catch((error: any) => console.log(error));

            await this.aes
              .decrypt(Key, IV, Holder)
              .then(holder => (cardHolderPlainText = holder))
              .catch((error: any) => console.log(error));

            var CardSubStr = cardNoPlainText.toString().substr(16);
            let alert = this.aCtrl.create({
              mode: "ios",
              title: "Use saved card to pay?",
              message:
                "Use card ending in" +
                " XXXX-X" +
                CardSubStr +
                " " +
                "for payment?",
              cssClass: "alert-button-group",
              buttons: [
                {
                  text: "Proceed",

                  handler: () => {
                    this.cardName = cardHolderPlainText;
                    this.cardNo = cardNoPlainText;
                    this.expiry = cardExpiryPlainText;
                  }
                },
                {
                  text: "Dismiss",
                  role: "cancel",
                  handler: () => {
                    console.log("Cancel clicked");
                  }
                }
              ]
            });
            alert.present();
          });
      });
  }

  confirmPayment() {
    let alert = this.aCtrl.create({
      title: "Confirm this payment",
      subTitle: "This is going to cost" + " " + this.listingData.price + ".",
      message:
        "" +
        this.listingData.artist +
        " " +
        "at" +
        " " +
        this.listingData.location +
        "<br>" +
        this.listingData.date +
        "<br>" +
        this.listingData.time,
      cssClass: "alert-button-group",
      mode: "ios",
      buttons: [
        {
          text: "Proceed",
          cssClass: "alertButton",
          handler: () => {
            if (this.cardName == "" || this.cardName == null) {
              this.toast
                .create({
                  message: "Card holder field is empty",
                  duration: 2000,
                  position: "middle"
                })
                .present();
            } else if (this.cardNo.length != 19) {
              this.toast
                .create({
                  message: "Card number should be 16 digits",
                  duration: 2000,
                  position: "middle"
                })
                .present();
            } else if (
              this.CVC == null ||
              this.CVC == "" ||
              this.CVC.length != 3
            ) {
              this.toast
                .create({
                  message: "CVC field is empty or not 3 characters long",
                  duration: 2000,
                  position: "middle"
                })
                .present();
            } else if (
              this.expiry == null ||
              this.expiry == "" ||
              this.expiry.length != 5
            ) {
              this.toast
                .create({
                  message: "Expiry is empty or exceeds reqired length",
                  duration: 2000,
                  position: "middle"
                })
                .present();
            } else {
              console.log(this.listingData.userId);
              var transactionRef = [
                {
                  Seller: this.listingData.sellerId,
                  TicketRef: this.listingData.ticketRef,
                  Buyer: this.listingData.userId,
                  Price: this.listingData.price,
                  SellerPayout: this.listingData.payout,
                  ttRevenue: this.listingData.charge,
                  PayeeAccountNo: this.listingData.payoutAccount,
                  Payout: this.listingData.payout
                }
              ];

              var transRefNo = this.afDatabase
                .list(`transactions`)
                .push(transactionRef[0]).key;
              var buyerRef = [
                {
                  transactionRef: transRefNo,
                  TicketRef: this.listingData.ticketRef,
                  Paid: this.listingData.price,
                  FileUrl: "www.firebase.com"
                }
              ];

              var sellerRef = [
                {
                  Artist: this.listingData.artist,
                  transactionRef: transRefNo,
                  TicketRef: this.listingData.ticketRef,
                  Payout: this.listingData.payout,
                  Status: "Pending"
                }
              ];

              var saleArchive = [
                {
                  Seller: this.listingData.sellerId,
                  Event: this.listingData.artist,
                  Location: this.listingData.location,
                  Long: this.listingData.long,
                  Lat: this.listingData.lat,
                  Time: this.listingData.time,
                  Date: this.listingData.date,
                  Buyer: this.listingData.userId,
                  Price: this.listingData.price,
                  Payout: this.listingData.payout,
                  transactionRef: transRefNo
                }
              ];

              console.log(transactionRef, buyerRef, transRefNo);
              this.afDatabase
                .list(`ticketsBought/${this.listingData.userId}`)
                .push(buyerRef[0]);
              this.afDatabase
                .list(`ticketsSold/${this.listingData.userId}`)
                .push(sellerRef[0]);
              this.afDatabase
                .object(`saleArchive/${this.listingData.ticketRef}`)
                .set(saleArchive[0]);
              this.close();
              this.navCtrl.setRoot("Page");
            }
          }
        },
        {
          text: "Cancel",
          cssClass: "alertButton",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    alert.present();
  }
}

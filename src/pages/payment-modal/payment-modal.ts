import { Component } from "@angular/core";
import {
  IonicPage,
  NavParams,
  ViewController,
  AlertController
} from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

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
    private afDatabase: AngularFireDatabase
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
          .subscribe(snapshot => {
            const CardNo = snapshot.payload.child(`Card`).val();
            const CVC = snapshot.payload.child(`CVC`).val();
            const cardExpiry = snapshot.payload.child(`Expiry`).val();
            const Holder = snapshot.payload.child(`Holder`).val();
            var CardSubStr = CardNo.toString().substr(12, 4);
            var cardNoString =
              CardNo.toString().substr(0, 4) +
              "-" +
              CardNo.toString().substr(4, 4) +
              "-" +
              CardNo.toString().substr(8, 4) +
              "-" +
              CardNo.toString().substr(12, 4);
            let alert = this.aCtrl.create({
              title: "Payment",
              message:
                "Use card ending in" + " " + CardSubStr + " " + "for payment?",
              buttons: [
                {
                  text: "NO",
                  role: "cancel",
                  handler: () => {
                    console.log("Cancel clicked");
                  }
                },
                {
                  text: "YES",
                  handler: () => {
                    this.cardName = Holder;
                    this.cardNo = cardNoString;
                    this.expiry = cardExpiry;
                    this.CVC = CVC;
                  }
                }
              ]
            });
            alert.present();
          });
      });
  }

  processPayment(){
    console.log(this.listingData.userId)
    var transactionRef =
     [{
       Seller: this.listingData.sellerId,
       TicketRef: this.listingData.ticketRef,
       Buyer: this.listingData.userId,
       Price: this.listingData.price,
       SellerPayout: this.listingData.payout,
       ttRevenue: this.listingData.charge,
       PayeeAccountNo: this.listingData.payoutAccount,
       Payout: this.listingData.payout
     }]

    var transRefNo = this.afDatabase.list(`transactions`).push(transactionRef[0]).key;
    var buyerRef =
    [{
      transactionRef: transRefNo,
      TicketRef:this.listingData.ticketRef,
      Paid: this.listingData.price,
      FileUrl: 'www.firebase.com',
    }]

    var sellerRef =
    [{
      Artist: this.listingData.artist,
      transactionRef: transRefNo,
      TicketRef: this.listingData.ticketRef,
      Payout: this.listingData.payout,
      Status: 'Pending',
    }]

    var saleArchive = 
    [{
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
    }]

    console.log(transactionRef, buyerRef, transRefNo);
    this.afDatabase.list(`ticketsBought/${this.listingData.userId}`).push(buyerRef[0]);
    this.afDatabase.list(`ticketsSold/${this.listingData.userId}`).push(sellerRef[0]);
    this.afDatabase.object(`saleArchive/${this.listingData.ticketRef}`).set(saleArchive[0]);
    this.close();
  }

}

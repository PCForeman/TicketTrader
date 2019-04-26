import { Component } from "@angular/core";
import {
  IonicPage,
  NavParams,
  ViewController,
  AlertController
} from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { sharedStylesheetJitUrl } from "@angular/compiler";

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
    var saleRef =
     [{Seller: this.listingData.sellerId,
       TicketRef: this.listingData.ticketRef,
       Buyer: this.listingData.userId,
       Price: this.listingData.price
     }]
     console.log(saleRef);
    this.afDatabase.list(`transactions`).push(saleRef[0]);
    this.afDatabase.list(`orderHistory`);
  }

}

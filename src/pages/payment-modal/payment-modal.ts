import { Component } from "@angular/core";
import { IonicPage, NavParams, ViewController, AlertController } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-payment-modal",
  templateUrl: "payment-modal.html"
})
export class PaymentModalPage {
  constructor(public navParams: NavParams, private aCtrl: AlertController, private vCtrl: ViewController, private afDatabase: AngularFireDatabase) {}
  listingData: any;
  cardName:any;
  CVC:any;
  cardNo:any;
  expiry:any;

  close() {
    this.vCtrl.dismiss();
  }

useExistingCard(){
  var key = this.listingData.userId;
  this.afDatabase.object(`user/${key}`).snapshotChanges().subscribe(snapshot => {
  var allData = snapshot.payload.val()
  var value = Object.keys(allData);
  var cardKey = value[0];
  this.afDatabase.object(`user/${key}/${cardKey}`).snapshotChanges().subscribe(snapshot => {
  const CardNo = snapshot.payload.child(`Card`).val();
  const CVC = snapshot.payload.child(`CVC`).val();
  const Expiry = snapshot.payload.child(`Expiry`).val();
  const Holder = snapshot.payload.child(`Holder`).val();
  var CardSubStr =  CardNo.toString().substr(12, 4);
  var expiryString = Expiry.toString().substr(0,2) + '/'+ Expiry.toString().substr(2,4);
  var cardNoString = CardNo.toString().substr(0,4)+'-'+CardNo.toString().substr(4,4)+'-'+CardNo.toString().substr(8,4)+'-'+CardNo.toString().substr(12,4);
  let alert = this.aCtrl.create({
    title: 'Payment',
    message: 'Use card ending in' + ' ' +CardSubStr + ' ' + 'for payment?',
    buttons: [
      {
        text: 'NO',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'YES',
        handler: () => {
         this.cardName = Holder;
         this.cardNo = cardNoString;
         this.expiry = expiryString;
         this.CVC = CVC;
        }
      }
    ]
  });
  alert.present();
})
  })
}

  ionViewWillLoad() {
    const ticket = this.navParams.get("ticket");
    this.listingData = ticket;
    this.useExistingCard();
  }
}

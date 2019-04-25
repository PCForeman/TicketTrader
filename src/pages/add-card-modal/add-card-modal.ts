import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  ToastController
} from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database/";
import { AngularFireAuth } from "angularfire2/auth/"
/**
 * Generated class for the AddCardModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-add-card-modal",
  templateUrl: "add-card-modal.html"
})
export class AddCardModalPage {
  cardNo: any;
  expiry: any;
  Cvc: any;
  sortcode: any;
  accountNumber: any;
  holderName:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private vCtrl: ViewController,
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private toast: ToastController
  ) {}

  close() {
    this.vCtrl.dismiss();
  }


  addDetails() {
    var key = this.afAuth.auth.currentUser.uid;
    if(this.holderName == ' ' && this.cardNo == ' '){
    this.toast.create({message:'One or more fields are empty', duration:2000, position:'middle'}).present();
    }else if (this.holderName == undefined || this.holderName == ' ' || this.holderName == null){
    this.toast.create({message: 'Cardholder cannot be empty.', duration:2000, position:'middle'}).present();
    }else if (this.cardNo.length != 16){
    this.toast.create({message: 'Card number Must be 16 digits.', duration:2000, position:'middle'}).present();
    }else if ( this.sortcode.length != 6){
    this.toast.create({message:'Sortcode Must be 6 digits.', duration:2000, position:'middle'}).present();
    }else if (this.accountNumber.length != 8){
    this.toast.create({message:'Account number Must be 8 digits.', duration:2000, position:'middle'}).present();
    }else if ( this.Cvc.length != 3){
    this.toast.create({message:'CVC must be 3 digits', duration:2000, position:'middle'}).present();  
    }else if (this.expiry.length != 4){
    this.toast.create({message:'Must be MM/YY', duration:2000, position:'middle'}).present(); 
    }else{
    var payment = [{
      Holder: this.holderName,
      Card: this.cardNo,
      Expiry: this.expiry,
      CVC: this.Cvc,
      Sort: this.sortcode,
      AccountNo: this.accountNumber
    }]
    console.log(payment);
    this.afDatabase.list(`user/${key}`).push(payment[0]);
    this.close();
  }
}

  ionViewDidLoad() {

    console.log("ionViewDidLoad AddCardModalPage");
  }
}

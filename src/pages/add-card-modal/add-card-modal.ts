import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  ToastController
} from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database/";
import { AngularFireAuth } from "angularfire2/auth/";
import { AES256 } from '@ionic-native/aes-256';


@IonicPage()
@Component({
  selector: "page-add-card-modal",
  templateUrl: "add-card-modal.html"
})
export class AddCardModalPage {
  eItems = [];
  private secureKey: string;
  private secureIV: string;
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
    private toast: ToastController,
    private aes: AES256
  ) {
    this.generateSecureKeyAndIV();
  }

  close() {
    this.vCtrl.dismiss();
  }


  addDetails() {
    var formatExpiry = this.expiry.toString().substr(0,2)+'/'+this.expiry.toString().substr(2,2)
    var formatSortCode = this.sortcode.toString().substr(0,2)+'-'+this.sortcode.toString().substr(2,2)+'-'+this.sortcode.toString().substr(4,2);
    console.log(formatSortCode, formatExpiry);
    this.sortcode = formatSortCode;
    this.expiry = formatExpiry;
    var key = this.afAuth.auth.currentUser.uid;
    if(this.holderName == ' ' && this.cardNo == ' '){
    this.toast.create({message:'One or more fields are empty', duration:2000, position:'middle'}).present();
    }else if (this.holderName == undefined || this.holderName == ' ' || this.holderName == null){
    this.toast.create({message: 'Cardholder cannot be empty.', duration:2000, position:'middle'}).present();
    }else if (this.cardNo.length != 16){
    this.toast.create({message: 'Card number Must be 16 digits.', duration:2000, position:'middle'}).present();
    }else if ( this.sortcode.length != 8){
    this.toast.create({message:'Sortcode Must be 6 digits.', duration:2000, position:'middle'}).present();
    }else if (this.accountNumber.length != 8){
    this.toast.create({message:'Account number Must be 8 digits.', duration:2000, position:'middle'}).present();
    }else if ( this.Cvc.length != 3){
    this.toast.create({message:'CVC must be 3 digits', duration:2000, position:'middle'}).present();  
    }else if (this.expiry.length != 5){
    this.toast.create({message:'Must be MM/YY', duration:2000, position:'middle'}).present(); 
    }else{
      this.aes.encrypt(this.secureKey, this.secureIV, this.cardNo).then(res => (this.eItems.push(res), console.log(res)))
      .catch((error: any) => console.error(error));
    this.aes.encrypt(this.secureKey, this.secureIV, this.accountNumber).then(res => (this.eItems.push(res), console.log(res)))
      .catch((error: any) => console.error(error));
    this.aes.encrypt(this.secureKey, this.secureIV, this.sortcode).then(res => (this.eItems.push(res), console.log(res)))
      .catch((error: any) => console.error(error));
      console.log(this.eItems.values());
      const cardHash = this.eItems[0].toString();
      const sortHash = this.eItems[1].toString();
      const accountNoHash = this.eItems[2].toString();
      console.log(cardHash, sortHash, accountNoHash);
    var payment = [{
      Holder: this.holderName,
      Card: cardHash,
      Expiry: this.expiry,
      CVC: this.Cvc,
      Sort: sortHash,
      AccountNo: accountNoHash
    }]
    console.log(payment);
    this.afDatabase.list(`user/${key}`).push(payment[0]);
    this.close();
  }
}

async generateSecureKeyAndIV() {
  this.secureKey = await this.aes.generateSecureKey('pook'); // Returns a 32 bytes string
  this.secureIV = await this.aes.generateSecureIV('pook'); // Returns a 16 bytes string
}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddCardModalPage");
  }
}

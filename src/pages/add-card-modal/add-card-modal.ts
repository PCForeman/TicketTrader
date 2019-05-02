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
import { AES256 } from "@ionic-native/aes-256";

@IonicPage()
@Component({
  selector: "page-add-card-modal",
  templateUrl: "add-card-modal.html"
})
export class AddCardModalPage {
  private secureKey: string;
  private secureIV: string;
  cardNo: any;
  expiry: any;
  Cvc: any;
  sortcode: any;
  accountNumber: any;
  holderName: any;
  stringForCrypto: string;
  stringForDecryption: string;

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

  async addDetails() {
    var formatExpiry =
      this.expiry.toString().substr(0, 2) +
      "/" +
      this.expiry.toString().substr(2);
    var formatSortCode =
      this.sortcode.toString().substr(0, 2) +
      "-" +
      this.sortcode.toString().substr(2, 2) +
      "-" +
      this.sortcode.toString().substr(4, 2);

    var formatCardNo =
      this.cardNo.toString().substr(0, 4) +
      "-" +
      this.cardNo.toString().substr(4, 4) +
      "-" +
      this.cardNo.toString().substr(8, 4) +
      "-" +
      this.cardNo.toString().substr(12, 4);
    console.log(formatSortCode, formatExpiry);
    this.sortcode = formatSortCode;
    this.expiry = formatExpiry;
    this.cardNo = formatCardNo;
    var key = this.afAuth.auth.currentUser.uid;
    if (this.holderName == " " && this.cardNo == " ") {
      this.toast
        .create({
          message: "One or more fields are empty",
          duration: 2000,
          position: "middle"
        })
        .present();
    } else if (
      this.holderName == undefined ||
      this.holderName == " " ||
      this.holderName == null
    ) {
      this.toast
        .create({
          message: "Cardholder cannot be empty.",
          duration: 2000,
          position: "middle"
        })
        .present();
    } else if (formatCardNo.length != 19) {
      this.toast
        .create({
          message: "Card number Must be 16 digits.",
          duration: 2000,
          position: "middle"
        })
        .present();
    } else if (this.sortcode.length != 8) {
      this.toast
        .create({
          message: "Sortcode Must be 6 digits.",
          duration: 2000,
          position: "middle"
        })
        .present();
    } else if (this.accountNumber.length != 8) {
      this.toast
        .create({
          message: "Account number Must be 8 digits.",
          duration: 2000,
          position: "middle"
        })
        .present();
    } else if (this.Cvc.length != 3) {
      this.toast
        .create({
          message: "CVC must be 3 digits",
          duration: 2000,
          position: "middle"
        })
        .present();
    } else if (this.expiry.length != 5) {
      this.toast
        .create({
          message: "Must be MM/YY",
          duration: 2000,
          position: "middle"
        })
        .present();
    } else {
      var eText1: string;
      var eText2: string;
      var eText3: string;
      var eText4: string;
      var eText5: string;
      var eText6: string;
      console.log(this.secureKey, this.secureIV);
      await this.aes
        .encrypt(this.secureKey, this.secureIV, this.cardNo)
        .then(promise => (eText1 = promise.valueOf()))
        .catch((error: any) => console.error(error));
      await this.aes
        .encrypt(this.secureKey, this.secureIV, this.accountNumber)
        .then(promise => (eText2 = promise.valueOf()));
      await this.aes
        .encrypt(this.secureKey, this.secureIV, this.holderName)
        .then(promise => (eText4 = promise.valueOf()));
      await this.aes
        .encrypt(this.secureKey, this.secureIV, this.Cvc)
        .then(promise => (eText5 = promise.valueOf()));
      await this.aes
        .encrypt(this.secureKey, this.secureIV, this.expiry)
        .then(promise => (eText6 = promise.valueOf()))
        .catch((error: any) => console.error(error));
      await this.aes
        .encrypt(this.secureKey, this.secureIV, this.sortcode)
        .then(promise => (eText3 = promise.valueOf()))
        .catch((error: any) => console.error(error));
      var payment = [
        {
          Holder: eText4,
          Card: eText1,
          Expiry: eText6,
          CVC: eText5,
          Sort: eText3,
          AccountNo: eText2,
          Key: this.secureKey,
          IV: this.secureIV
        }
      ];
      console.log(payment);
      this.afDatabase.list(`user/${key}`).push(payment[0]);
      this.close();
    }
  }

  async generateSecureKeyAndIV() {
    this.secureKey = await this.aes.generateSecureKey("pook"); // Returns a 32 bytes string
    this.secureIV = await this.aes.generateSecureIV("pook"); // Returns a 16 bytes string
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddCardModalPage");
  }
}

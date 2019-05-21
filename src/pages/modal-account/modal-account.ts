import { Component } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import {
  IonicPage,
  NavParams,
  NavController,
  ToastController,
  ViewController,
  LoadingController,
  ModalController,
  AlertController
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-modal-account",
  templateUrl: "modal-account.html"
})
export class ModalAccountPage {
  constructor(
    private navCtrl: NavController,
    public navParams: NavParams,
    private loader: LoadingController,
    private toast: ToastController,
    private view: ViewController,
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private Modal: ModalController,
    private aCtrl: AlertController
  ) {}
  uSurname: any;
  uName: any;
  password: any;
  uPC: any;
  userD: any;
  uPhoneNo: any;
  uAddressL1: any;

  close() {
    var index = this.view.index;
    this.view.dismiss(index);
  }

  backToAccount() {
    this.navCtrl.setRoot("AccountPage");
  }

  showSpinner() {
    let loading = this.loader.create({
      content: ""
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 2000);
  }

  updateSurnameAlert() {
    let alert = this.aCtrl.create({
      mode: "ios",
      title: "Update name?",
      message:
        "from" + " " + this.userD.surname + " " + ", to" + " " + this.uSurname,
      cssClass: "alert-button-group",
      buttons: [
        {
          text: "Proceed",

          handler: () => {
            this.updateSurname();
          }
        },
        {
          text: "Dismiss",
          role: "cancel",
          handler: () => {
            this.uSurname = "";
          }
        }
      ]
    });
    alert.present();
  }

  updatePhoneNoAlert() {
    let alert = this.aCtrl.create({
      mode: "ios",
      title: "Update name?",
      message:
        "from" + " " + this.userD.phoneNo + " " + ", to" + " " + this.uPhoneNo,
      cssClass: "alert-button-group",
      buttons: [
        {
          text: "Proceed",

          handler: () => {
            this.updatePhoneNo();
          }
        },
        {
          text: "Dismiss",
          role: "cancel",
          handler: () => {
            this.uPhoneNo = "";
          }
        }
      ]
    });
    alert.present();
  }

  updateNameAlert() {
    let alert = this.aCtrl.create({
      mode: "ios",
      title: "Update name?",
      message:
        "from" + " " + this.userD.firstname + " " + ", to" + " " + this.uName,
      cssClass: "alert-button-group",
      buttons: [
        {
          text: "Proceed",

          handler: () => {
            this.updateName();
          }
        },
        {
          text: "Dismiss",
          role: "cancel",
          handler: () => {
            this.uName = "";
          }
        }
      ]
    });
    alert.present();
  }

  successMessage() {
    this.toast
      .create({
        message: "Successfully updated record.",
        duration: 1000,
        position: "middle"
      })
      .present();
  }

  emptyStringMessage() {
    this.toast
      .create({
        message: "You cannot submit an empty field.",
        duration: 1000,
        position: "middle"
      })
      .present();
  }

  phoneNoMessage() {
    this.toast
      .create({
        message: "Not a valid phone number.",
        duration: 1000,
        position: "middle"
      })
      .present();
  }

  postCodeMessage() {
    this.toast
      .create({
        message: "Not a valid postcode, must be 7 or 8 characters long.",
        duration: 1000,
        position: "middle"
      })
      .present();
  }

  PasswordTooShortMessage() {
    this.toast
      .create({
        message: "New password needs to be 6 or more characters.",
        duration: 1000,
        position: "middle"
      })
      .present();
  }

  nameContainsNumerics() {
    this.toast
      .create({
        message: "Field cannot contain numerics",
        duration: 2000,
        position: "middle"
      })
      .present();
  }

  refresh(): void {
    window.location.reload();
  }

  checkForNumerics() {
    var bool = true;
    var length = this.uName.length;
    if (this.uName == null || this.uName == "") {
      this.emptyStringMessage();
    } else {
      for (var i = 0; i < length; i++) {
        var slice = this.uName.slice(i, i + 1);
        var sliceNo = parseInt(slice);
        if (sliceNo.valueOf() >= 0) {
          bool = false;
          this.nameContainsNumerics();
        }
      }
    }
    if (bool == true) {
      this.updateNameAlert();
    }
  }

  checkSurnameForNumerics() {
    var bool = true;
    var length = this.uSurname.length;
    if (this.uSurname == null || this.uSurname == "") {
      this.emptyStringMessage();
    } else {
      for (var i = 0; i < length; i++) {
        var slice = this.uSurname.slice(i, i + 1);
        var sliceNo = parseInt(slice);
        if (sliceNo.valueOf() >= 0) {
          bool = false;
          this.nameContainsNumerics();
        }
      }
    }
    if (bool == true) {
      this.updateSurnameAlert();
    }
  }

  async updateSurname() {
    if (this.uSurname == null || this.uSurname == "") {
      this.emptyStringMessage();
    } else {
      this.close();
      var key = this.afAuth.auth.currentUser.uid;
      var ref = this.afDatabase.object(`/user/${key}`);
      ref.update({ surname: this.uSurname });
      await this.showSpinner();
      await this.successMessage();
    }
  }

  async updateName() {
    var key = this.afAuth.auth.currentUser.uid;
    var ref = this.afDatabase.object(`/user/${key}`);
    ref.update({ firstname: this.uName });
    await this.showSpinner();
    await this.successMessage();
    this.close();
  }

  async updatePhoneNo() {
    var len = this.uPhoneNo.toString();
    if (len.length < 7 || len.length > 15) {
      this.phoneNoMessage();
    } else {
      this.close();
      var key = this.afAuth.auth.currentUser.uid;
      var ref = this.afDatabase.object(`/user/${key}`);
      ref.update({ phoneNo: this.uPhoneNo });
      await this.showSpinner();
      await this.successMessage();
    }
  }

  async updatePassword() {
    this.close();
    var newPass = this.password.toString();
    if (newPass.length < 6) {
      this.PasswordTooShortMessage();
    } else {
      var key = this.afAuth.auth.currentUser.uid;
      var ref = this.afDatabase.object(`/user/${key}`);
      ref.update({ password: newPass });
      this.afAuth.auth.currentUser.updatePassword(newPass);
      await this.showSpinner();
      await this.successMessage();
    }
  }

  ionViewWillLoad() {
    const userData = this.navParams.get("data");
    this.userD = userData;
    console.log(this.userD);
  }
}

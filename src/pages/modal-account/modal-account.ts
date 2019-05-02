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
  ModalController
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
    private Modal: ModalController
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

  refresh(): void {
    window.location.reload();
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
    if (this.uName == null || this.uName == "") {
      this.emptyStringMessage();
    } else {
      this.close();
      var key = this.afAuth.auth.currentUser.uid;
      var ref = this.afDatabase.object(`/user/${key}`);
      ref.update({ firstname: this.uName });
      await this.showSpinner();
      await this.successMessage();
    }
  }

  async updateAddress() {
    if (this.uAddressL1 == null || this.uAddressL1 == "") {
      this.emptyStringMessage();
    } else {
      this.close();
      var key = this.afAuth.auth.currentUser.uid;
      var ref = this.afDatabase.object(`/user/${key}`);
      ref.update({ addressL1: this.uAddressL1 });
      await this.showSpinner();
      await this.successMessage();
    }
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

  async updatePostCode() {
    var pcLen = this.uPC.toString();
    console.log(pcLen.length);
    if (pcLen.length == 7 || pcLen.length == 8) {
      this.close();
      var key = this.afAuth.auth.currentUser.uid;
      var ref = this.afDatabase.object(`/user/${key}`);
      ref.update({ addressPC: this.uPC });
      await this.showSpinner();
      await this.successMessage();
    } else {
      this.postCodeMessage();
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
    const ticket = this.navParams.get("ticket");
    this.userD = ticket;
    console.log(this.userD);
  }
}

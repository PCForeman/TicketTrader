import { Component } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import {
  IonicPage,
  NavParams,
  ToastController,
  ViewController,
  LoadingController
} from "ionic-angular";

/**
 * Generated class for the ModalAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-modal-account",
  templateUrl: "modal-account.html"
})
export class ModalAccountPage {
  constructor(
    public navParams: NavParams,
    private loader:LoadingController,
    private toast: ToastController,
    private view: ViewController,
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {}
  uSurname: any;
  uName: any;
  password: any;
  uPC: any;
  userD: any;
  uPhoneNo: any;
  uAddressL1: any;

  close() {
    this.view.dismiss();
  }

  showSpinner() {
    let loading = this.loader.create({
      content: ""
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 250);
  }

  successMessage(){
    this.toast.create({message:'Successfully updated record.', duration: 1000, position:'top'}).present()
  }

  updateSurname() {
    this.showSpinner();
    var key = this.afAuth.auth.currentUser.uid;
    var ref = this.afDatabase.object(`/user/${key}`);
    ref.update({ surname: this.uSurname });
    console.log(ref);
    this.successMessage();
  }

  updateName() {
    this.showSpinner();
    var key = this.afAuth.auth.currentUser.uid;
    var ref = this.afDatabase.object(`/user/${key}`);
    ref.update({ firstname: this.uName });
    console.log(ref);
    this.successMessage();
  }

    updateAddress() {
    this.showSpinner()
    var key = this.afAuth.auth.currentUser.uid;
    var ref = this.afDatabase.object(`/user/${key}`);
    ref.update({ addressL1: this.uAddressL1 });
    console.log(ref);
    this.successMessage();
  }

  updatePhoneNo() {
    this.showSpinner();
    var key = this.afAuth.auth.currentUser.uid;
    var ref = this.afDatabase.object(`/user/${key}`);
    ref.update({ phoneNo: this.uPhoneNo });
    console.log(ref);
    this.successMessage();
  }

  updatePostCode() {
    this.showSpinner();
    var key = this.afAuth.auth.currentUser.uid;
    var ref = this.afDatabase.object(`/user/${key}`);
    ref.update({ addressPC: this.uPC });
    console.log(ref);
    this.successMessage();
  }

  updatePassword() {
    this.showSpinner();
    var newPass = this.password.toString();
    console.log(newPass);
    var key = this.afAuth.auth.currentUser.uid;
    var ref = this.afDatabase.object(`/user/${key}`);
    ref.update({ password: newPass });
    this.afAuth.auth.currentUser.updatePassword(newPass);
    this.successMessage();
  }

  ionViewWillLoad() {
    const ticket = this.navParams.get("ticket");
    this.userD = ticket;
    console.log(this.userD);
  }
}

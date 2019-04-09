import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  App,
  ToastController
} from "ionic-angular";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";
import { LoginPage } from "../login/login";

@IonicPage()
@Component({
  selector: "page-account",
  templateUrl: "account.html"
})
export class AccountPage {
  currentPassword: any;
  comparePassword: any;
  newPassword: any;
  playerPassword: AngularFireObject<any>;
  userData: Observable<any>;
  gPassword: any;

  constructor(
    private afDatabase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.displayAccountData();
  }

  getUserPassword() {
    this.playerPassword = this.afDatabase.object(
      `user/${this.afAuth.auth.currentUser.uid}`
    );
    this.playerPassword.snapshotChanges().subscribe(snapshot => {
      var password = snapshot.payload.child(`password/`).val();
      this.gPassword = password;
    });
  }

  updateUserPassword() {
    var key = this.afAuth.auth.currentUser.uid;
    this.getUserPassword();
    if (
      this.currentPassword == this.gPassword &&
      this.newPassword == this.comparePassword
    ) {
      this.afAuth.auth.currentUser.updatePassword(this.newPassword);
      this.afDatabase
        .object(`/user/${key}`)
        .update({ password: this.newPassword });
      this.passwordChangedMessage();
      this.currentPassword = "";
      this.newPassword = "";
      this.comparePassword = "";
    }
  }

  checkOut() {
    this.navCtrl.push("BuyPage");
  }

  orderHistory() {
    this.navCtrl.push("OrderHistoryPage");
  }

  passwordValidationMessage() {
    this.toast
      .create({
        message: "Please ensure all fields are filled out",
        position: "middle",
        duration: 2000
      })
      .present();
  }

  passwordChangedMessage() {
    this.toast
      .create({
        message: "Password successfully changed",
        position: "middle",
        duration: 2000
      })
      .present();
  }

  displayAccountData() {
    this.afAuth.authState.take(1).subscribe(data => {
      if (data && data.email && data.uid) {
        this.userData = this.afDatabase
          .object(`user/${data.uid}`)
          .valueChanges();
      } else {
        this.toast
          .create({
            message: `Could not find authentication details`,
            position: "middle",
            duration: 3000
          })
          .present();
      }
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      this.toast
        .create({
          message: "Signed out",
          position: "middle",
          duration: 3500
        })
        .present();
      this.app.getRootNav().setRoot(LoginPage);
    });
  }
}

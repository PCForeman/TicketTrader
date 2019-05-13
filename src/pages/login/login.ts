import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController
} from "ionic-angular";
import { User } from "../../models/user";
import { RegisterPage } from "../register/register";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import { AdminPage } from "../admin/admin";

var loginCounter = 0;
var attemptsLeft = 4;
var gFirstname;

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  user = {} as User;
  userName: AngularFireObject<any>;
  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private toast: ToastController,
    private ldCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  showSpinner() {
    let loading = this.ldCtrl.create({
      content: ""
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 250);
  }

  async loginRegister() {
    await this.showSpinner();
    await this.navCtrl.setRoot(RegisterPage);
  }

  adminLogin(user: User) {
    var adminCredential1 = user.email;
    var adminCredential2 = user.password;
    if (
      adminCredential1 == "admin@TicketTrader.com" &&
      adminCredential2 == "admin!"
    ) {
      this.navCtrl.setRoot(AdminPage);
    } else {
      this.loginLogin(user);
    }
  }

  async loginLogin(user: User) {
    await this.showSpinner();
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
      var lastSignIn = new Date(
        this.afAuth.auth.currentUser.metadata.lastSignInTime
      ).valueOf();
      var creation = new Date(
        this.afAuth.auth.currentUser.metadata.creationTime
      ).valueOf();
      var currentTime = new Date().valueOf();
      var x = Number(creation - currentTime);
      var z = Number(lastSignIn - creation);
      var key = this.afAuth.auth.currentUser.uid;
      console.log(result);
      this.userName = this.afDatabase.object(`user/${key}`);
      this.userName.snapshotChanges().subscribe(snapshot => {
        var firstName = snapshot.payload.child(`firstname/`).val();
        gFirstname = firstName;
        var adminCredential1 = user.email;
        var adminCredential2 = user.password;
        if (
          adminCredential1 == "admin@TicketTrader.com" &&
          adminCredential2 == "admin!"
        ) {
          this.navCtrl.setRoot("AdminViewPage");
        } else if (x < 0 && z > 0) {
          this.toast
            .create({
              message:
                "Welcome back " + gFirstname + " " + " enjoy your stay :)",
              position: "middle",
              duration: 1000
            })
            .present();
          this.navCtrl.setRoot("Page");
        } else {
          this.toast
            .create({
              message:
                "Welcome to TicketTrader " +
                gFirstname +
                " " +
                "click on the info button in the top left corner to help get you started.",
              position: "middle",
              duration: 5000
            })
            .present();
          this.navCtrl.setRoot("Page");
        }
      });
    } catch (e) {
      loginCounter = loginCounter + 1;
      attemptsLeft = attemptsLeft - 1;
      console.error(e);
      if (loginCounter < 4) {
        this.toast
          .create({
            message:
              "Credentials are wrong, You have" +
              " " +
              attemptsLeft +
              " " +
              "attempts left.",
            position: "middle",
            duration: 1000
          })
          .present();
      } else {
        if (attemptsLeft <= 0) {
          var disableLogin = <HTMLButtonElement>(
            document.getElementById("btnLogin")
          );
          var disableReg = <HTMLButtonElement>document.getElementById("btnReg");
          disableLogin.disabled = true;
          disableReg.disabled = true;
          this.toast
            .create({
              message:
                "Wrong credentials have been entered too many times, your account has been locked.",
              position: "middle",
              duration: 3500
            })
            .present();
        }
      }
    }
  }
}

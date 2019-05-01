import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController
} from "ionic-angular";
import { User } from "../../models/user";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { v } from "@angular/core/src/render3";

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  user = {} as User;

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private ldCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController
  ) {}

  async rRegister() {
    await this.showSpinner();
    var vfirstname = this.user.firstname;
    var vSurname = this.user.surname;
    var vEmail = this.user.email;
    var vAdress1 = this.user.addressL1;
    var vPassword = this.user.password;
    var vPostCode = this.user.addressPC;
    var vPCL = vPostCode.length;
    var vMobile = this.user.phoneNo;
    var mobileLen = vMobile.length;
    var vDoB = this.user.dOb;
    if (
      vfirstname == "" ||
      vfirstname == null ||
      vPassword == "" ||
      vPassword == null ||
      vSurname == "" ||
      vSurname == null ||
      vEmail == "" ||
      vEmail == null ||
      vAdress1 == "" ||
      vAdress1 == null ||
      vPostCode == "" ||
      vPCL != 8 ||
      vPostCode == null ||
      vMobile == "" ||
      vMobile == null ||
      mobileLen < 9 ||
      mobileLen > 10 ||
      vDoB == null
    ) {
      this.toast
        .create({
          message: "One or more fields are incorrect, please check them",
          duration: 3000,
          position: "bottom"
        })
        .present();
    } else if (vPassword.length < 8) {
      this.toast
        .create({
          message:
            "Password must be 8 or more characters with a special character",
          duration: 2000,
          position: "middle"
        })
        .present();
    } else {
      try {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(
          this.user.email,
          this.user.password
        );
        console.log(result);
        this.afAuth.authState.take(1).subscribe(auth => {
          this.afDatabase.object(`user/${auth.uid}`).set(this.user);
        });
        this.toast
          .create({
            message: "Registration successful",
            position: "middle",
            duration: 3000
          })
          .present();
        this.navCtrl.setRoot("LoginPage");
      } catch (e) {
        console.log(e);
      }
    }
  }

  async rLogin() {
    await this.showSpinner();
    await this.navCtrl.setRoot("LoginPage");
  }

  showSpinner() {
    let loading = this.ldCtrl.create({
      content: ""
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 50);
  }
}

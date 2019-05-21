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
    var vPassword = this.user.password;
    var vMobile = this.user.phoneNo;
    var vDoB = this.user.dOb;
    if (vfirstname == "" || vfirstname == null) {
      this.toast
        .create({ message: "First name is empty", duration: 2000 })
        .present();
    } else if (vSurname == "" || vSurname == null) {
      this.toast
        .create({ message: "Surname is empty", duration: 2000 })
        .present();
    } else if (vEmail == "" || vEmail == null) {
      this.toast
        .create({ message: "email is empty", duration: 2000 })
        .present();
    } else if (vMobile == "" || null) {
      this.toast
        .create({ message: "mobile field is empty", duration: 2000 })
        .present();
    } else if (vMobile.length < 9) {
      this.toast
        .create({
          message: "Phone number should have a minimum of 9 characters",
          duration: 2000
        })
        .present();
    } else if (vDoB == null) {
      this.toast
        .create({ message: "First name is empty", duration: 2000 })
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
          this.user.NumberOfSales = 0;
          this.user.Rating = 0;
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

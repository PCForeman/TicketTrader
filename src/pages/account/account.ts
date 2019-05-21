import { Component } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireObject } from "angularfire2/database";
import {
  AlertController,
  App,
  IonicPage,
  ModalController,
  ModalOptions,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
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
    private modal: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private aCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.displayAccountData();
  }

  openModal() {
    //Opens a modal and passes revelevant variables so they are in scope
    var currentUser = this.afAuth.auth.currentUser.uid;
    var ref = this.afDatabase.object(`user/${currentUser}`);
    ref.snapshotChanges().subscribe(snapshot => {
      const dob = snapshot.payload
        .child(`dOb/`)
        .val()
        .toString();
      const em = snapshot.payload
        .child(`email/`)
        .val()
        .toString();
      const fn = snapshot.payload
        .child(`firstname/`)
        .val()
        .toString();
      const pw = snapshot.payload
        .child(`password/`)
        .val()
        .toString();
      const pn = snapshot.payload
        .child(`phoneNo/`)
        .val()
        .toString();
      const sn = snapshot.payload
        .child(`surname/`)
        .val()
        .toString();
      const myModalOpts: ModalOptions = {
        cssClass: "modal",
        enableBackdropDismiss: true,
        showBackdrop: true
      };
      const accountData = {
        dOb: dob,
        email: em,
        password: pw,
        firstname: fn,
        phonenumber: pn,
        surname: sn
      };

      const myModal = this.modal.create(
        "ModalAccountPage",
        { data: accountData },
        myModalOpts
      );
      myModal.present();
    });
  }

  addCard() {
    //Opens a modal to add a payment method
    const myModalOpts: ModalOptions = {
      cssClass: "modal",
      enableBackdropDismiss: true,
      showBackdrop: true
    };
    const listingRef = {};

    const myModal = this.modal.create(
      "AddCardModalPage",
      { ticket: listingRef },
      myModalOpts
    );
    myModal.present();
  }


  ticketTraderInfo() {
    const myModalOpts: ModalOptions = {
      cssClass: "modal",
      enableBackdropDismiss: true,
      showBackdrop: true
    };
    const myModal = this.modal.create(
      "InformationModalPage",
      {},
      myModalOpts
    );
    myModal.present();

    }

  async deleteAccount() {
    //Deletes a users ticket trader account if condition is met.
    var ref = this.afDatabase.object(
      `user/${this.afAuth.auth.currentUser.uid}`
    );
    ref.snapshotChanges().subscribe(snapshot => {
      const pw = snapshot.payload
        .child(`password/`)
        .val()
        .toString();
      console.log(pw);
      let alert = this.aCtrl.create({
        title: "Enter password to delete account",
        inputs: [
          {
            name: "password",
            placeholder: "Password",
            type: "password"
          }
        ],
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: cancelled => {
              console.log("Cancel clicked");
            }
          },
          {
            text: "Delete",
            handler: data => {
              console.log(data);
              if (data.password == pw) {
                try {
                  var tempKey = this.afAuth.auth.currentUser.uid;
                  console.log(tempKey);
                  this.logout();
                  this.app.getRootNav().setRoot(LoginPage);
                  this.afAuth.auth.signOut();
                  this.afDatabase.object(`user/${tempKey}`).remove();
                } catch (e) {
                  console.log(e);
                }
              } else {
                this.toast
                  .create({
                    message: "Incorrect password",
                    duration: 2000,
                    position: "middle"
                  })
                  .present();
                return false;
              }
            }
          }
        ]
      });
      alert.present();
    });
  }

  checkOut() {
    // Redirects to the checkout tab
    this.navCtrl.push("BuyPage");
  }

  orderHistory() {
    //Redirects to the orderHistory tab
    this.navCtrl.push("OrderHistoryPage");
  }

  displayAccountData() {
    //Fetchs a users details from the database and makes them an observable
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
    //Signs user out and re-routes them to login page
    this.afAuth.auth.signOut().then(() => {
      this.toast
        .create({
          message: "Signed out",
          position: "middle",
          duration: 3500
        })
        .present();
      this.app.getRootNav().setRoot("LoginPage");
    });
  }
}

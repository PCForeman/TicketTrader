import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  App,
  ToastController,
  ModalController,
  ModalOptions,
  AlertController
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
    private modal: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private aCtrl: AlertController
  ) {}

  ionViewDidLoad() {
    this.displayAccountData();
  }

  openModal(){

    var currentUser = this.afAuth.auth.currentUser.uid;
    var ref = this.afDatabase.object(`user/${currentUser}`);
    ref.snapshotChanges().subscribe(snapshot => {
    const ad1 =  snapshot.payload.child(`addressL1/`).val().toString();
    const ad2 = snapshot.payload.child(`addressPC/`).val().toString();
    const dob =  snapshot.payload.child(`dOb/`).val().toString();
    const em =  snapshot.payload.child(`email/`).val().toString();
    const fn =  snapshot.payload.child(`firstname/`).val().toString();
    const pw =  snapshot.payload.child(`password/`).val().toString();
    const pn =  snapshot.payload.child(`phoneNo/`).val().toString();
    const sn =  snapshot.payload.child(`surname/`).val().toString();
    const myModalOpts: ModalOptions = {
      cssClass: "modal",
      enableBackdropDismiss: true,
      showBackdrop: true
    };
    const listingRef = {
      adress1: ad1,
      adress2: ad2,
      dOb: dob,
      email: em,
      password: pw,
      firstname: fn,
      phonenumber: pn,
      surname: sn 
    };
    
    const myModal = this.modal.create(
      "ModalAccountPage",
      { ticket: listingRef },
      myModalOpts
    );
    myModal.present();
  })
}

addCard(){
  const myModalOpts: ModalOptions = {
    cssClass: "modal",
    enableBackdropDismiss: true,
    showBackdrop: true
  };
  const listingRef = {
  };
  
  const myModal = this.modal.create(
    "AddCardModalPage",
    { ticket: listingRef },
    myModalOpts
  );
  myModal.present();
}

async deleteAccount(){
  var ref = this.afDatabase.object(`user/${this.afAuth.auth.currentUser.uid}`);
  ref.snapshotChanges().subscribe(snapshot => {
  const pw =  snapshot.payload.child(`password/`).val().toString();
  console.log(pw);
  let alert = this.aCtrl.create({
    title: 'Enter password to delete account',
    inputs: [
      {
        name: 'password',
        placeholder: 'Password',
        type: 'password'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: cancelled => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Login',
        handler: data => {
          console.log(data)
          if (data.password == pw) {
          try {
          var tempKey = this.afAuth.auth.currentUser.uid
          console.log(tempKey)
          this.logout()
           this.app.getRootNav().setRoot(LoginPage);
           this.afDatabase.object(`user/${tempKey}`).remove();
          }
           catch (e) {
            console.log(e);
           }
          } else {
            console.log('Cancelled')
            return false;
          }
        }
      }
    ]
  });
  alert.present();
})
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

 async logout() {
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

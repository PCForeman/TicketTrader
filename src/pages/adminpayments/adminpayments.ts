import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth'

@IonicPage()
@Component({
  selector: 'page-adminpayments',
  templateUrl: 'adminpayments.html',
})
export class AdminpaymentsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private app: App, private fbDatabase: AngularFireDatabase) {
  }
  kA = [];
items = [];
  ionViewDidLoad() {
    this.retrievePayments();
  }

  logout() {
    // Logs a user out
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

  retrievePayments() {
    // Retrieve all of the unapproved tickets that are in the database, and creates an object for each one
    var ref = this.fbDatabase.object(`payments/`);
    ref.snapshotChanges().subscribe(snapshot => {
      var allData = snapshot.payload.val();
      var array = [];
      array.push(allData);
      var value = Object.keys(allData);
      var keyArray = [];
      keyArray.push(value);
      for (var i = 0; i < value.length; i++) {
        var x = 0;
        var selectedIndex = i;
        var keyValue = value[selectedIndex];
        var indexSelecta = value.length - value.length + i;
        var id = value[indexSelecta];
        this.kA.push(id);
        var ref = this.fbDatabase.object(`payments/${keyValue}`);
        ref.snapshotChanges().subscribe(snapshot => {
          const amount = snapshot.payload.child(`amount`).val();
          const ref = snapshot.payload.child(`ticketRef`).val();
          const pId = snapshot.payload.child(`paymentId`).val();
          this.items.push({
            Amount: amount,
            Ref: ref,
            pId: pId
          });
          x++;
        });
        console.log(this.items);
      }
    });
  }


}

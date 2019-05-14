import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  App,
  LoadingController
} from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-admin3",
  templateUrl: "admin3.html"
})
export class Admin3Page {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ldCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private fbDatabase: AngularFireDatabase,
    private toast: ToastController,
    private app: App
  ) {}

  items = [];
  kA = [];
  ticketId: any;
  items2 = [];
  itemSearch = [];

  ionViewDidLoad() {
    this.retrieveRejectedTickets();
    this.copyItems();
  }

  initializeItems(): void {
    this.itemSearch = this.items;
  }

  copyItems(): void {
    this.items2 = this.items;
  }

  onCancel() {
    this.itemSearch = this.items2;
  }

  getItems(searchbar) {
    this.initializeItems();
    console.log(this.itemSearch);
    var q = searchbar.srcElement.value;
    console.log(q);
    if (q == undefined || q == "") {
      this.items = this.items2;
      this.items.splice(this.items.length - 1);
      console.log(this.items);
    } else {
      this.itemSearch = this.itemSearch.filter(v => {
        if (v.Key && q) {
          if (v.Key.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            this.items = this.itemSearch;
            return true;
          }
          return false;
        }
      });
      console.log(q, this.itemSearch.length, this.itemSearch);
      this.items.push(this.itemSearch);
      this.reloadData();
    }
  }

  remove() { // removes a ticket from the table
    var temp = [];
    var target = event.srcElement;
    var ticketClicked =
      parseInt(
        target.parentElement.parentElement.children.item(0).innerHTML.valueOf()
      ) - 1;
    console.log(ticketClicked);
    temp.push(this.items[ticketClicked]);
    temp.filter(async v => {
      temp = [
        {
          Key: v.Key,
          Name: v.Name,
          Venue: v.Venue,
          Price: v.Price,
          Date: v.Date,
          Seller: v.Seller,
          Time: v.Time,
          Payout: v.Payout,
          Creation: v.Creation,
          Charge: v.Charge
        }
      ];
      this.fbDatabase.list(`rejectedTickets/${temp[0].Key}`).remove();
      await this.toast
        .create({
          message:
            "Ticket" +
            " " +
            temp[0].Key +
            " " +
            "has been approved and moved to active listings",
          position: "top",
          duration: 2000
        })
        .present();
      await this.showSpinner();
      this.refresh();
      this.items = this.items;
    });
  }

  refresh(): void {
    window.location.reload();
  }

  showSpinner() {
    let loading = this.ldCtrl.create({
      content: ""
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1500);
  }

  reloadData() {
    this.items = this.itemSearch;
  }

  retrieveRejectedTickets() { // Retrieve all of the rejected tickets from the rejected tickets table.
    var ref = this.fbDatabase.object(`rejectedTickets/`);
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
        var ref = this.fbDatabase.object(`rejectedTickets/${keyValue}`);
        ref.snapshotChanges().subscribe(snapshot => {
          var finalKey = this.kA[this.kA.length - this.kA.length + x];
          var eventName = snapshot.payload.child(`Name`).val();
          var eventPrice = snapshot.payload.child(`Price`).val();
          var eventVenue = snapshot.payload.child(`Location`).val();
          var eventDate = snapshot.payload.child(`Date`).val();
          var eventTime = snapshot.payload.child(`Time`).val();
          var eventCreationDate = snapshot.payload.child(`Creation`).val();
          var eventSellerUID = snapshot.payload.child(`Seller`).val();
          var eventCustomerPayout = snapshot.payload.child(`Payout`).val();
          var eventServiceCharge = snapshot.payload.child(`Charge`).val();
          this.items.push({
            Key: finalKey,
            Name: eventName,
            Venue: eventVenue,
            Price: eventPrice,
            Date: eventDate,
            Time: eventTime,
            Creation: eventCreationDate,
            Seller: eventSellerUID,
            Payout: eventCustomerPayout,
            Charge: eventServiceCharge
          });
          x++;
        });
      }
    });
  }

  logout() { // Logs user out and redirects
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

import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";

@IonicPage()
@Component({
  selector: "page-order-history",
  templateUrl: "order-history.html"
})
export class OrderHistoryPage {
  items = [];
  kA = [];
  items2 = [];
  itemSearch = [];
  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private toast: ToastController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.retrieveLiveListings();
  }

  remove() {
    var temp = [];
    var target = event.srcElement;
    var ticketClicked =
      parseInt(
        target.parentElement.parentElement.children.item(0).innerHTML.valueOf()
      ) - 1;
    console.log(ticketClicked);
    temp.push(this.items[ticketClicked]);
    console.log(temp);
    temp.filter(v => {
      var tempArray = [
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
      this.afDatabase.list(`approvedTickets/${tempArray[0].Key}`).remove();
      this.toast
        .create({
          message:
            "Ticket" +
            " " +
            tempArray[0].Key +
            " " +
            "has been removed from active listings",
          position: "middle",
          duration: 2000
        })
        .present();
      this.navCtrl.setRoot("HomePage");
      this.refresh();
    });
  }

  refresh(): void {
    window.location.reload();
  }

  retrieveLiveListings() {
    var currentUser = this.afAuth.auth.currentUser.uid;
    var ref = this.afDatabase.object(`approvedTickets/`);
    ref.snapshotChanges().subscribe(snapshot => {
      var allData = snapshot.payload.val();
      var array = [];
      array.push(allData);
      var value = Object.keys(allData);
      var keyArray = [];
      keyArray.push(value);
      for (var i = 0; i < value.length; i++) {
        var x = 0;
        var count = 0;
        var selectedIndex = i;
        var keyValue = value[selectedIndex];
        var indexSelecta = value.length - value.length + i;
        var id = value[indexSelecta];
        this.kA.push(id);
        var ref = this.afDatabase.object(`approvedTickets/${keyValue}`);
        ref.snapshotChanges().subscribe(snapshot => {
          var eventSellerUID = snapshot.payload.child(`Seller`).val();
          if (eventSellerUID == currentUser) {
            var finalKey = this.kA[this.kA.length - this.kA.length + x];
            var eventName = snapshot.payload.child(`Name`).val();
            var eventPrice = snapshot.payload.child(`Price`).val();
            var eventVenue = snapshot.payload.child(`Venue`).val();
            var eventDate = snapshot.payload.child(`Date`).val();
            var eventTime = snapshot.payload.child(`Time`).val();
            var eventCreationDate = snapshot.payload.child(`Creation`).val();
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
            count + 1;
          }
        });
      }
    });
  }
}

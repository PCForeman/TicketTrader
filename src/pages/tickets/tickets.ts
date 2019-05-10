import { Component } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import {
  App,
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { Observable } from "rxjs";
import { LoginPage } from "../login/login";

@IonicPage()
@Component({
  selector: "page-tickets",
  templateUrl: "tickets.html"
})
export class TicketsPage {
  listingData: Observable<any>;
  items = [];
  kA = [];
  searchTerm: string = "";
  itemSearch = [];
  items2 = [];
  peopleInterested: number;

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private toast: ToastController,
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  timeData: any;

  ionViewDidLoad() {
    console.log("ionViewDidLoad TicketsPage");
    this.displayTickets();
    this.fetchTickets();
  }

  fetchTickets() {
    setInterval(() => this.displayTickets(), 15000);
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
    // Reset items back to all of the items
    this.initializeItems();
    console.log(this.itemSearch);
    // set q to the value of the searchbar
    var term = searchbar.srcElement.value;
    console.log(term);
    // if the value is an empty string don't filter the items
    if (term == undefined || term == "") {
      this.items = this.items2;
      this.items.splice(this.items.length - 1);
      console.log(this.items);
    } else {
      this.itemSearch = this.itemSearch.filter(v => {
        if (v.Name && term) {
          if (v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1) {
            this.items = this.itemSearch;
            return true;
          } else if (v.Venue && term) {
            if (v.Venue.toLowerCase().indexOf(term.toLowerCase()) > -1) {
              this.items = this.itemSearch;
              return true;
            } else if (v.Date && term) {
              if (v.Date.toLowerCase().indexOf(term.toLowerCase()) > -1) {
                this.items = this.itemSearch;
                return true;
              }
            }
            return false;
          }
        }
      });
      console.log(term, this.itemSearch.length, this.itemSearch);
      this.items.push(this.itemSearch);
      this.reloadData();
    }
  }

  checkOut() {
    this.navCtrl.push("BuyPage");
  }

  orderHistory() {
    this.navCtrl.push("OrderHistoryPage");
  }

  buy() {
    var target = event.srcElement
    const checkId = target.parentElement.parentElement.children.item(2).innerHTML;
    console.log(checkId);
    const userId = this.afAuth.auth.currentUser.uid;
    var timeClicked = Date.now();
    if (userId == checkId) {
      this.toast
        .create({
          message: "This is your listing.",
          duration: 2000,
          position: "Middle"
        }).present();

      }else{
    var checkOutBy = timeClicked + 600000;
    var temp = [];
    var ticketClicked =
      parseInt(
        target.parentElement.parentElement.children.item(0).innerHTML.valueOf()
      ) - 1;
      temp.push(this.items[ticketClicked]);
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
            Charge: v.Charge,
            checkOutTime: timeClicked,
            reservationPerioid: checkOutBy,
            Lat: v.Lat,
            Long: v.Long,
            PayoutAccount: v.PayoutAccount,
            PayoutSortCode: v.PayoutSortCode,
            downloadURL: v.downloadURL,
            interested: v.interested
          }
        ];
        var checkOutRef = this.afAuth.auth.currentUser.uid;
        this.afDatabase
          .list(`ticketsInBasket/${checkOutRef}`)
          .push(tempArray[0]);
        this.afDatabase.list(`approvedTickets/${tempArray[0].Key}`).remove();
        this.navCtrl.push("BuyPage");
      });
      this.items = [];
    }
  }

  reloadData() {
    this.items = this.itemSearch;
  }

  displayTickets() {
    this.items = [];
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
        var selectedIndex = i;
        var keyValue = value[selectedIndex];
        var indexSelecta = value.length - value.length + i;
        var id = value[indexSelecta];
        this.kA.push(id);
        var ref = this.afDatabase.object(`approvedTickets/${keyValue}`);
        ref.snapshotChanges().subscribe(snapshot => {
          const finalKey = this.kA[this.kA.length - this.kA.length + x];
          console.log(finalKey);
          const eventName = snapshot.payload.child(`Name`).val();
          const eventPrice = snapshot.payload.child(`Price`).val();
          const eventVenue = snapshot.payload.child(`Venue`).val();
          const eventDate = snapshot.payload.child(`Date`).val();
          const eventTime = snapshot.payload.child(`Time`).val();
          const eventCreationDate = snapshot.payload.child(`Creation`).val();
          const eventSellerUID = snapshot.payload.child(`Seller`).val();
          const eventCustomerPayout = snapshot.payload.child(`Payout`).val();
          const eventServiceCharge = snapshot.payload.child(`Charge`).val();
          const Longs = snapshot.payload.child(`Long`).val();
          const Lats = snapshot.payload.child(`Lat`).val();
          const payoutAccount = snapshot.payload.child(`PayoutAccount`).val();
          const payoutSortCode = snapshot.payload.child(`PayoutSortCode`).val();
          const downloadURL = snapshot.payload.child(`downloadURL`).val();
          const interested = snapshot.payload.child(`interested`).val();
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
            Charge: eventServiceCharge,
            Long: Longs,
            Lat: Lats,
            PayoutAccount: payoutAccount,
            PayoutSortCode: payoutSortCode,
            downloadURL: downloadURL,
            interested: interested
          });
          x++;
        });
      }
    });
  }

  showInterest() {
    var target = event.srcElement;
    var iD = target.parentElement.parentElement.children.item(1).innerHTML;
    var ref = this.afDatabase.database
      .ref(`/approvedTickets/${iD}/interested`)
      .transaction(interests => {
        if (interests === null) {
          return (interests = 1);
        } else {
          return interests + 1;
        }
      })
      .then(res => {
        this.items = [];
        this.displayTickets();
      })
      .catch(error => {
        console.log(error);
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

  navMakeListing() {
    this.navCtrl.setRoot("MakeListingPage");
  }
}

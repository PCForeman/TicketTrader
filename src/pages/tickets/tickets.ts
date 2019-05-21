import { Component } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import {
  App,
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  AlertController,
  LoadingController,
  ModalController,
  ModalOptions
} from "ionic-angular";
import { Observable } from "rxjs";

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
  img: any;

  constructor(
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private toast: ToastController,
    private app: App,
    private aCtrl: AlertController,
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private modal: ModalController,
    public navParams: NavParams
  ) {}

  timeData: any;

  async ionViewDidLoad() {
    console.log("ionViewDidLoad TicketsPage");
    await this.checkIfOutDated();
    await this.displayTickets();
    this.fetchTickets();
  }

  fetchTickets() {
    setInterval(() => this.displayTickets(), 45000);
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

  async buy() {
    this.loadingCtrl
      .create({
        spinner: "bubbles",
        duration: 2500,
        content: "Securing ticket"
      })
      .present();
    var target = event.srcElement;
    const checkId = target.parentElement.parentElement.children.item(2)
      .innerHTML;
    console.log(checkId);
    const userId = this.afAuth.auth.currentUser.uid;
    var timeClicked = Date.now();
    if (userId == checkId) {
      this.toast
        .create({
          message: "This is your listing.",
          duration: 2000,
          position: "Middle"
        })
        .setCssClass(`toastCss`)
        .present();
    } else {
      var checkOutBy = timeClicked + 600000;
      var temp = [];
      var ticketClicked =
        parseInt(
          target.parentElement.parentElement.children
            .item(0)
            .innerHTML.valueOf()
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

  sellerDetails() {
    const target = event.srcElement;
    const seller = target.parentElement.parentElement.children.item(2)
      .innerHTML;
    this.afDatabase
      .object(`user/${seller}`)
      .snapshotChanges()
      .subscribe(vals => {
        const NoS = vals.payload.child(`NumberOfSales`).val();
        const Rating = vals.payload.child(`Rating`).val();
        const RatingScore = (Rating / NoS).toPrecision(3);
        let alert = this.aCtrl.create({
          title: "Seller",
          mode: "ios",
          message:
            "Number of sales:" +
            " " +
            NoS +
            "<br>" +
            "Seller Rating:" +
            " " +
            RatingScore +
            "/5",
          buttons: [
            {
              text: "Close",
              handler: () => {}
            }
          ]
        });
        alert.present();
      });
  }

  checkIfOutDated() {
    this.loadingCtrl
      .create({ spinner: "bubbles", duration: 2500, content: "Updating list" })
      .present();
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
        var selectedIndex = i;
        var keyValue = value[selectedIndex];
        var indexSelecta = value.length - value.length + i;
        var id = value[indexSelecta];
        this.kA.push(id);
        var ref2 = this.afDatabase.object(`approvedTickets/${keyValue}`);
        ref2.snapshotChanges().subscribe(snapshot => {
          const date = snapshot.payload.child(`Date`).val();
          const Hour = snapshot.payload.child(`Time`).val();
          const YYYY = parseInt(date.substr(6));
          const MM = parseInt(date.substr(3, 3));
          console.log(MM);
          const DD = parseInt(date.substr(0, 2));
          const HH = parseInt(Hour.substr(0));
          const hoursToMilliSeconds = 3.6e6 * HH;
          const eventInMilliSeconds = new Date(YYYY, MM - 1, DD).getTime();
          const removalTime = eventInMilliSeconds + hoursToMilliSeconds;
          const timeNow = new Date().getTime();
          console.log(removalTime, timeNow);
          if (timeNow > removalTime) {
            this.afDatabase.database
              .ref(`approvedTickets/${keyValue}`)
              .remove()
              .then(res => {
                console.log(res, "Removed");
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            console.log("Valid.");
          }
        });
      }
    });
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
          const itemObj = {
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
          };
          this.items.push(itemObj);
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
      this.app.getRootNav().setRoot("LoginPage");
    });
  }

  navMakeListing() {
    this.navCtrl.setRoot("MakeListingPage");
  }
}

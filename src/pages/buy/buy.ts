import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  ModalController,
  ModalOptions
} from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-buy",
  templateUrl: "buy.html"
})
export class BuyPage {
  items = [];
  kA = [];
  items2 = [];
  itemSearch = [];
  timedOutListings = [];
  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private afDatabase: AngularFireDatabase,
    public navParams: NavParams,
    private modal: ModalController
  ) {}

  ionViewDidLoad() {
    this.retrieveCheckoutTickets();
    this.checkOutTimer();
  }

  checkOutTimer() {
    var currentUser = this.afAuth.auth.currentUser.uid;
    var ref = this.afDatabase.object(`ticketsInBasket/${currentUser}`);
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
        var ref = this.afDatabase.object(
          `ticketsInBasket/${currentUser}/${keyValue}`
        );
        ref.snapshotChanges().subscribe(snapshot => {
          var eventSellerUID = snapshot.payload.child(`Seller`).val();
          var checkOutTime = snapshot.payload.child(`checkOutTime`).val();
          var timeNow = Date.now();
          var eventName = snapshot.payload.child(`Name`).val();
          var eventPrice = snapshot.payload.child(`Price`).val();
          var eventVenue = snapshot.payload.child(`Venue`).val();
          var eventDate = snapshot.payload.child(`Date`).val();
          var eventTime = snapshot.payload.child(`Time`).val();
          var eventCreationDate = snapshot.payload.child(`Creation`).val();
          var eventCustomerPayout = snapshot.payload.child(`Payout`).val();
          var eventServiceCharge = snapshot.payload.child(`Charge`).val();
          var lats = snapshot.payload.child(`Lat`).val();
          var longs = snapshot.payload.child(`Long`).val();
          var maxTime = checkOutTime + 600000;
          if (maxTime <= timeNow) {
            this.timedOutListings.push({
              Name: eventName,
              Venue: eventVenue,
              Price: eventPrice,
              Date: eventDate,
              Time: eventTime,
              Creation: eventCreationDate,
              Seller: eventSellerUID,
              Payout: eventCustomerPayout,
              Charge: eventServiceCharge,
              Lat: lats,
              Long: longs
            });
            x++;
            count + 1;
            this.afDatabase
              .list(`approvedTickets/`)
              .push(this.timedOutListings[0]);
            console.log(this.timedOutListings[0]);
            this.timedOutListings.splice(0, 1);
            this.afDatabase
              .list(`ticketsInBasket/${currentUser}/${keyValue}`)
              .remove();
          } else if (maxTime > timeNow) {
            console.log("Hello");
          }
        });
      }
    });
  }

  checkOut() {
    var target = event.srcElement;
    var uId = this.afAuth.auth.currentUser.uid;
    var ticketId = target.parentElement.parentElement.children.item(1)
      .innerHTML;
    var sId = target.parentElement.parentElement.children.item(2).innerHTML;
    var sPrice = target.parentElement.parentElement.children
      .item(5)
      .innerHTML.substr(6, 10);
    var sArtist = target.parentElement.parentElement.children
      .item(3)
      .innerHTML.substr(0);
    var sVenue = target.parentElement.parentElement.children
      .item(4)
      .innerHTML.substr(6);
    var sDate = target.parentElement.parentElement.children
      .item(6)
      .innerHTML.substr(6, 10);
      var sTime = target.parentElement.parentElement.children.item(7).innerHTML.substr(5)
    var temp = [];
    var ticketClicked =
      parseInt(
        target.parentElement.parentElement.children.item(0).innerHTML.valueOf()
      ) - 1;
    console.log(uId, ticketId, sId, sPrice, sVenue, sArtist, sDate);
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
      console.log(tempArray);
    });
    const myModalOpts: ModalOptions = {
      cssClass: "modal",
      enableBackdropDismiss: true,
      showBackdrop: true
    };
    const listingRef = {
      userId: uId,
      ticketRef: ticketId,
      sellerId: sId,
      price: sPrice,
      artist: sArtist,
      date: sDate,
      time: sTime,
      location: sVenue
    };
    const myModal = this.modal.create(
      "PaymentModalPage",
      { ticket: listingRef },
      myModalOpts
    );
    myModal.present();
  }

  retrieveCheckoutTickets() {
    var currentUser = this.afAuth.auth.currentUser.uid;
    var ref = this.afDatabase.object(`ticketsInBasket/${currentUser}`);
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
        var ref = this.afDatabase.object(
          `ticketsInBasket/${currentUser}/${keyValue}`
        );
        ref.snapshotChanges().subscribe(snapshot => {
          var eventSellerUID = snapshot.payload.child(`Seller`).val();
          var finalKey = this.kA[this.kA.length - this.kA.length + x];
          var eventName = snapshot.payload.child(`Name`).val();
          var eventPrice = snapshot.payload.child(`Price`).val();
          var eventVenue = snapshot.payload.child(`Venue`).val();
          var eventDate = snapshot.payload.child(`Date`).val();
          var eventTime = snapshot.payload.child(`Time`).val();
          var eventCreationDate = snapshot.payload.child(`Creation`).val();
          var eventCustomerPayout = snapshot.payload.child(`Payout`).val();
          var eventServiceCharge = snapshot.payload.child(`Charge`).val();
          var reserved = snapshot.payload.child(`checkOutTime`).val();
          var timeLeft = snapshot.payload.child(`reservationPerioid`).val();
          var lats = snapshot.payload.child(`Lat`).val();
          var longs = snapshot.payload.child(`Long`).val();
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
            CheckoutPeriod: timeLeft,
            Lat: lats,
            Long: longs
          });
          x++;
          count + 1;
        });
      }
    });
  }
}

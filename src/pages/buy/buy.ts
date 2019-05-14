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
  minutesLeft: any;
  secondsLeft: any;
  timer: any;
  belowTen: any;
  belowTenMin: any;
  currentUser: any;

  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private afDatabase: AngularFireDatabase,
    public navParams: NavParams,
    private modal: ModalController
  ) {}

  ionViewDidLoad() { // Executes these on the view loading
    this.currentUser = this.afAuth.auth.currentUser.uid;
    this.retrieveCheckoutTickets();
    this.displayTimer();
  }

  checkOutTimer() { // Removes a ticket from a users basket when timer runs out
    var currentUser = this.afAuth.auth.currentUser.uid;
    var ref = this.afDatabase.object(`ticketsInBasket/${currentUser}`);
    ref.snapshotChanges().subscribe(snapshot => {
      var allData = snapshot.payload.val();
      var array = [];
      array.push(allData);
      var value = Object.keys(allData);
      var ref = this.afDatabase.object(
        `ticketsInBasket/${currentUser}/${value}`
      );
      ref.snapshotChanges().subscribe(snapshot => {
        const eventSellerUID = snapshot.payload.child(`Seller`).val();
        const eventName = snapshot.payload.child(`Name`).val();
        const eventPrice = snapshot.payload.child(`Price`).val();
        const eventVenue = snapshot.payload.child(`Venue`).val();
        const eventDate = snapshot.payload.child(`Date`).val();
        const eventTime = snapshot.payload.child(`Time`).val();
        const eventCreationDate = snapshot.payload.child(`Creation`).val();
        const eventCustomerPayout = snapshot.payload.child(`Payout`).val();
        const eventServiceCharge = snapshot.payload.child(`Charge`).val();
        const lats = snapshot.payload.child(`Lat`).val();
        const longs = snapshot.payload.child(`Long`).val();
        const payoutAccount = snapshot.payload.child(`PayoutAccount`).val();
        const payoutSortCode = snapshot.payload.child(`PayoutSortCode`).val();
        const downloadURL = snapshot.payload.child(`downloadURL`).val();
        const interested = snapshot.payload.child(`interested`).val();
        this.afDatabase
          .list(`ticketsInBasket/${this.currentUser}/${value}`)
          .remove()
          .then(res => {
            console.log(res);
            this.afDatabase
              .list(`approvedTickets`)
              .push({
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
                Long: longs,
                PayoutAccount: payoutAccount,
                PayoutSortCode: payoutSortCode,
                downloadURL: downloadURL,
                interested: interested
              })
              .catch(error => {
                console.log(error);
              });
          });
        this.items = [];
      });
    });
  }

  displayTimer() { // Works out when users ticket reservation period ends and calculates a countdown based on it.
    var currentUser = this.afAuth.auth.currentUser.uid;
    var ref = this.afDatabase.object(`ticketsInBasket/${currentUser}`);
    ref.snapshotChanges().subscribe(snapshot => {
      var allData = snapshot.payload.val();
      var array = [];
      array.push(allData);
      var value = Object.keys(allData);
      this.afDatabase
        .object(`ticketsInBasket/${currentUser}/${value}`)
        .snapshotChanges()
        .subscribe(checkout => {
          var reservationTime = checkout.payload
            .child(`reservationPerioid`)
            .val();
          var timeNow = Date.now();
          var removalTime = reservationTime - timeNow;
          this.secondsLeft = Math.floor((removalTime / 1000) % 60);
          this.minutesLeft = Math.floor((removalTime / 1000 / 60) % 60);
          this.timer = setInterval(
            () =>
              this.updateSeconds(
                this.minutesLeft,
                (this.secondsLeft = this.secondsLeft - 1)
              ),
            1000
          );
          console.log({ minutes: this.minutesLeft, seconds: this.secondsLeft });
        });
    });
  }
  updateSeconds(minutes: number, seconds: number) { // Called by the above function, minutes and seconds
    // are passed as parameters and the functions then will count down to 0:00
    if (this.secondsLeft < 10) {
      this.belowTen = "0";
    }
    if (this.minutesLeft < 10) {
      this.belowTenMin = "0";
      if (this.secondsLeft <= 0) {
        this.secondsLeft = this.secondsLeft + 59;
        this.minutesLeft = this.minutesLeft - 1;
        this.belowTen = "";
        if (this.minutesLeft < 0 && this.secondsLeft < 2) {
          this.timeIsUp();
          this.checkOutTimer();
        }
        console.log(minutes, seconds);
      }
    }
  }

  timeIsUp() { // Clears the interval above
    clearInterval(this.timer);
  }

  checkOut() { // Works out what ticket has been clicked, creates and object to pass into the modal opened
    // so that it doesn't go out of scope
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
    var sortCode = target.parentElement.parentElement.children.item(9)
      .innerHTML;
    var long = target.parentElement.parentElement.children
      .item(10)
      .innerHTML.substr(0);
    var lat = target.parentElement.parentElement.children
      .item(11)
      .innerHTML.substr(0);
    var sPayout = target.parentElement.parentElement.children
      .item(12)
      .innerHTML.substr(0);
    var sCharge = target.parentElement.parentElement.children
      .item(13)
      .innerHTML.substr(0);
    var sAccountNo = target.parentElement.parentElement.children.item(8)
      .innerHTML;
    var sVenue = target.parentElement.parentElement.children
      .item(4)
      .innerHTML.substr(7);
    var sDate = target.parentElement.parentElement.children
      .item(6)
      .innerHTML.substr(6, 10);
    var sTime = target.parentElement.parentElement.children
      .item(7)
      .innerHTML.substr(5);
    var sURL = target.parentElement.parentElement.children
      .item(14)
      .innerHTML.substr(0);
    var temp = [];
    var ticketClicked =
      parseInt(
        target.parentElement.parentElement.children.item(0).innerHTML.valueOf()
      ) - 1;
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
          Lat: v.Lat,
          Long: v.Long,
          Creation: v.Creation,
          Charge: v.Charge,
          PayoutAccount: sAccountNo,
          PayoutSortCode: sortCode,
          downloadURL: sURL
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
      location: sVenue,
      payoutAccount: sAccountNo,
      sortcode: sortCode,
      lat: lat,
      long: long,
      payout: sPayout,
      charge: sCharge,
      downloadURL: sURL,
      mins: this.minutesLeft,
      seconds: this.secondsLeft
    };
    const myModal = this.modal.create(
      "PaymentModalPage",
      { ticket: listingRef },
      myModalOpts
    );
    myModal.present();
  }

  retrieveCheckoutTickets() { // Retrieves a users tickets that are in the basket table.
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
          const eventSellerUID = snapshot.payload.child(`Seller`).val();
          const finalKey = this.kA[this.kA.length - this.kA.length + x];
          const eventName = snapshot.payload.child(`Name`).val();
          const eventPrice = snapshot.payload.child(`Price`).val();
          const eventVenue = snapshot.payload.child(`Venue`).val();
          const eventDate = snapshot.payload.child(`Date`).val();
          const eventTime = snapshot.payload.child(`Time`).val();
          const eventCreationDate = snapshot.payload.child(`Creation`).val();
          const eventCustomerPayout = snapshot.payload.child(`Payout`).val();
          const eventServiceCharge = snapshot.payload.child(`Charge`).val();
          const timeLeft = snapshot.payload.child(`reservationPerioid`).val();
          const lats = snapshot.payload.child(`Lat`).val();
          const longs = snapshot.payload.child(`Long`).val();
          const payoutAccount = snapshot.payload.child(`PayoutAccount`).val();
          const payoutSortCode = snapshot.payload.child(`PayoutSortCode`).val();
          const downloadURL = snapshot.payload.child(`downloadURL`).val();
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
            Long: longs,
            PayoutAccount: payoutAccount,
            PayoutSortCode: payoutSortCode,
            downloadURL: downloadURL
          });
          x++;
          count + 1;
        });
      }
    });
  }

  remove() { // Removes ticket from a users basket and puts it back in active listings
    var target = event.srcElement;
    var ticketId = target.parentElement.parentElement.children.item(1)
      .innerHTML;
    console.log(ticketId);
    var ref = this.afDatabase.object(
      `ticketsInBasket/${this.currentUser}/${ticketId}`
    );
    ref.snapshotChanges().subscribe(snapshot => {
      const eventSellerUID = snapshot.payload.child(`Seller`).val();
      const eventName = snapshot.payload.child(`Name`).val();
      const eventPrice = snapshot.payload.child(`Price`).val();
      const eventVenue = snapshot.payload.child(`Venue`).val();
      const eventDate = snapshot.payload.child(`Date`).val();
      const eventTime = snapshot.payload.child(`Time`).val();
      const eventCreationDate = snapshot.payload.child(`Creation`).val();
      const eventCustomerPayout = snapshot.payload.child(`Payout`).val();
      const eventServiceCharge = snapshot.payload.child(`Charge`).val();
      const lats = snapshot.payload.child(`Lat`).val();
      const longs = snapshot.payload.child(`Long`).val();
      const payoutAccount = snapshot.payload.child(`PayoutAccount`).val();
      const payoutSortCode = snapshot.payload.child(`PayoutSortCode`).val();
      const downloadURL = snapshot.payload.child(`downloadURL`).val();
      const interested = snapshot.payload.child(`interested`).val();
      ref.remove().then(push => {
        console.log(push);
        this.afDatabase.list(`approvedTickets`).push({
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
          Long: longs,
          PayoutAccount: payoutAccount,
          PayoutSortCode: payoutSortCode,
          downloadURL: downloadURL,
          interested: interested
        });
        this.items = [];
      });
    });
  }
}

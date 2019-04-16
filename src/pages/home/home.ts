import { Component, ViewChild, ElementRef, NgZone } from "@angular/core";
import {
  IonicPage,
  NavController,
  App,
  NavParams,
  ToastController
} from "ionic-angular";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";
import { Geolocation } from "@ionic-native/geolocation";
import { AngularFireDatabase } from "angularfire2/database";

declare var google;
var userLat: number;
var userLong: number;
var userPos;
var keys = [];
@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("map") mapElement: ElementRef;
  map: any;
  markerObject = [];
  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private gLocation: Geolocation,
    private afDatabase: AngularFireDatabase,
    private app: App,
    private ngZone: NgZone,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    (<any>window).ionicPageRef = {
      zone: this.ngZone,
      component: this
    };
  }

  async ionViewWillLoad() {
    this.loadMap();
  }

  listingData: Observable<any>;

  loadMap() {
    this.gLocation
      .getCurrentPosition()
      .then(resp => {
        resp.coords.latitude;
        resp.coords.longitude;
      })
      .catch(error => {
        console.log("Cannot locate you", error);
      });
    let watch = this.gLocation.watchPosition();
    watch.subscribe(
      data => {
        userLat = data.coords.latitude;
        userLong = data.coords.longitude;
        let latLng = new google.maps.LatLng(userLat, userLong);
        userPos = latLng;
        let mapOptions = {
          center: latLng,
          zoom: 7,
          zoomControl: true,
          disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );
        this.addUserMarker();
        this.loadListings();
      },
      err => {
        console.log(err);
      }
    );
  }

  addUserMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: userPos
    });
    let content = "You are here" + " ";
    this.addInfoWindow(marker, content);
  }

  loadListings() {
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
        keys.push(id);
        var ref = this.afDatabase.object(`approvedTickets/${keyValue}`);
        ref.snapshotChanges().subscribe(snapshot => {
          const finalKey = keys[keys.length - keys.length + x];
          const eventName = snapshot.payload.child(`Name`).val();
          const eventPrice = snapshot.payload.child(`Price`).val();
          const eventVenue = snapshot.payload.child(`Venue`).val();
          const eventDate = snapshot.payload.child(`Date`).val();
          const eventTime = snapshot.payload.child(`Time`).val();
          const eventCreationDate = snapshot.payload.child(`Creation`).val();
          const eventSellerUID = snapshot.payload.child(`Seller`).val();
          const eventCustomerPayout = snapshot.payload.child(`Payout`).val();
          const eventServiceCharge = snapshot.payload.child(`Charge`).val();
          const lats = snapshot.payload.child(`lat`).val();
          const longs = snapshot.payload.child(`long`).val();
          this.markerObject.push({
            index: this.markerObject.length,
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
            Lat: lats,
            Long: longs
          });
          x++;
        });
        this.markerObject.forEach(ticket => {
          ticket.index;
          ticket.Lat;
          ticket.Long;
          ticket.Artist;
          let latLng = new google.maps.LatLng(ticket.Lat, ticket.Long);
          let marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
          });
          let content =
            "<h1 hidden>" +
            ticket.Key +
            "</h1>" +
            "<br>" +
            " " +
            ("<h2 hidden>" + ticket.index + "</h2>") +
            "<br>" +
            " " +
            ticket.Name +
            "<br>" +
            "Date" +
            " " +
            ticket.Date +
            "<br>" +
            "Time" +
            " " +
            ticket.Time +
            "<br>" +
            "Price:" +
            " " +
            "£" +
            ticket.Price +
            "<br>" +
            " " +
            "<br>" +
            '<button class="infoWindowButton" <button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.buyTickets()})">Buy this ticket?</button>';
          this.addInfoWindow(marker, content);
        });
      }
    });
  }

  buyTickets() {
    var timeClicked = Date.now();
    var checkOutBy = timeClicked + 600000;
    var temp = [];
    var tempArray = [];
    var target = event.srcElement;
    var ticketId = target.parentElement.children.item(0).innerHTML;
    var index = target.parentElement.children.item(2).innerHTML.valueOf();
    var ref = this.afDatabase.object(`approvedTickets/${ticketId}`);
    ref.snapshotChanges().subscribe(snapshot => {
      const seller = snapshot.payload.child(`Seller`).val();
      const eventName = snapshot.payload.child(`Name`).val();
      const eventPrice = snapshot.payload.child(`Price`).val();
      const eventVenue = snapshot.payload.child(`Venue`).val();
      const eventDate = snapshot.payload.child(`Date`).val();
      const eventTime = snapshot.payload.child(`Time`).val();
      const eventCreationDate = snapshot.payload.child(`Creation`).val();
      const eventCustomerPayout = snapshot.payload.child(`Payout`).val();
      const eventServiceCharge = snapshot.payload.child(`Charge`).val();
      const lats = snapshot.payload.child(`lat`).val();
      const longs = snapshot.payload.child(`long`).val();
      console.log(
        seller,
        eventName,
        eventDate,
        eventPrice,
        lats,
        longs,
        eventTime,
        eventCreationDate,
        eventVenue,
        eventCustomerPayout,
        eventServiceCharge
      );
      const buyerId = this.afAuth.auth.currentUser.uid;
      if (buyerId != seller) {
        temp.push(this.markerObject[index]);
        temp.filter(v => {
          tempArray = [
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
              Lat: lats,
              Long: longs
            }
          ];
        });
        console.log(tempArray);
        tempArray.splice(1, tempArray.length)
        var checkOutRef = this.afAuth.auth.currentUser.uid;
        this.afDatabase
          .list(`ticketsInBasket/${checkOutRef}`)
          .push(tempArray[0]);
        this.afDatabase.object(`approvedTickets/${ticketId}`).remove();
        this.navCtrl.push("BuyPage");
      } else if (buyerId == seller) {
        this.toast
          .create({
            message: "This is your listing",
            duration: 2000,
            position: "top"
          })
          .present();
      }
    });
  }

  refresh(): void {
    window.location.reload();
  }

  checkOut() {
    this.navCtrl.push("BuyPage");
  }

  orderHistory() {
    this.navCtrl.push("OrderHistoryPage");
  }

  addInfoWindow(marker, content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(marker, "click", () => {
      infoWindow.open(this.map, marker);
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
}

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
  items = [];
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
  await  this.loadMap();
  await this.loadListings();
  }

  listingData: Observable<any>;

 loadMap() {
    this.gLocation
      .getCurrentPosition()
      .then(resp => {
       userLat = resp.coords.latitude;
       userLong = resp.coords.longitude;
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
          mapOptions,
        );
        this.loadListings();
        this.addUserMarker();
      })
      .catch(error => {
        console.log("Cannot locate you", error);
      });
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
          const lats = snapshot.payload.child(`Lat`).val();
          const longs = snapshot.payload.child(`Long`).val();
          const interested = snapshot.payload.child(`interested`).val();
          this.items.push({
            index: x,
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
            Long: longs,
            interested: interested
          });
          x++;
        });
        this.items.forEach(ticket => {
          ticket.index;
          ticket.Lat;
          ticket.Long;
          ticket.Artist;
          let latLng = new google.maps.LatLng(ticket.Lat, ticket.Long);
          let marker = new google.maps.Marker({
            map: this.map,
            position: latLng,
            icon: 'https://firebasestorage.googleapis.com/v0/b/dissy-c7abe.appspot.com/o/Webp.net-resizeimage%20(1).png?alt=media&token=689f51f3-e576-49bd-abc2-36b892a58fa6'
          });
          let content =
            "<div class='infoWindowDiv'>" +           
            "<h1 hidden>" +
            ticket.Key +
            "</h1>" +
            "<br>" +
            " " +
            ("<h2 hidden>" + ticket.index + "</h2>") +
            "<br>" +
            " " +
            ("<h3 hidden>" + ticket.Seller + "</h3>") +
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
            "People interested:" + " " +
            ticket.interested +
            "<br>" +
            " " +
            '<button class="infoWindowButton" <button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.buyTickets()})">Buy this ticket?</button></div>';
          this.addInfoWindow(marker, content);
        });
      }
    });
  }

  buyTickets() {
    const temp = [];
    const target = event.srcElement;
    const userId = this.afAuth.auth.currentUser.uid;
    const sellerId = target.parentElement.children.item(4).innerHTML;
    const ticketClickedId = target.parentElement.children.item(0).innerHTML.toString();
    const index = target.parentElement.children.item(2).innerHTML.toString();
    console.log(userId, sellerId, ticketClickedId, index);
      if (userId == sellerId) {
      this.yourTicketMessage();  
      }else{
      const timeClicked = Date.now()
      const checkOutBy = timeClicked + 600000;
      temp.push(this.items[index]);
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
            interested: v.interested
          }
        ];
        var checkOutRef = this.afAuth.auth.currentUser.uid;
        this.afDatabase
          .list(`ticketsInBasket/${checkOutRef}`)
          .push(tempArray[0]);
        this.afDatabase.list(`approvedTickets/${tempArray[0].Key}`).remove();
       this.items = [];
       this.navCtrl.push('BuyPage');
      });
    }
  }

  yourTicketMessage() {
    this.toast
    .create({
      message: "This is your listing.",
      duration: 2000,
      position: "Middle"
    }).present();
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
        this.app.getRootNav().setRoot('LoginPage');
      })
  }
}

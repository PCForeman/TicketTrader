import { Component, ViewChild, ElementRef } from "@angular/core";
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

declare var google;
var userLat: number;
var userLong: number;
var userPos;

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("map") mapElement: ElementRef;
  map: any;

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private gLocation: Geolocation,
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  async ionViewWillLoad() {
    await this.loadMap();
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
          zoom: 12,
          zoomControl: true,
          disableDefaultUI: true,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(
          this.mapElement.nativeElement,
          mapOptions
        );
        this.addUserMarker();
        this.displayTicketListings();
        this.displayMusicVenues();
      },
      err => {
        console.log(err);
      }
    );
  }

  addTimeStamps() {}

  addUserMarker() {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: userPos
    });
    let content = "You are here" + " ";
    this.addInfoWindow(marker, content);
  }

  displayMusicVenues() {
    var venues = [
      "Factory",
      "The Hub/dBs",
      "The Junction",
      "Underground",
      "Theatre Royale"
    ];
    var lats = [50.3682295, 50.3688716, 50.3793757, 50.3798821, 50.3718561];
    var longs = [-4.1444514, -4.1511745, -4.1340133, -4.1337842, -4.1444436];
    var condition = longs.length.valueOf();
    var initaliseIndex = 0;
    for (initaliseIndex < condition; (initaliseIndex = initaliseIndex + 1); ) {
      if (initaliseIndex > condition) {
        return false;
      } else {
        var selectIndex = initaliseIndex - 1;
        var currentVenue = venues[selectIndex];
        var currentLat = lats[selectIndex];
        var currentLong = longs[selectIndex];
        let latLng = new google.maps.LatLng(currentLat, currentLong);
        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: latLng
        });
        let content = currentVenue;
        this.addInfoWindow(marker, content);
      }
    }
  }

  displayTicketListings() {
    var artist = [
      "AMC & Turno",
      "Andy C",
      "Degs",
      "Hybrid Minds",
      "Flava D",
      "Serum"
    ];
    var date = [
      "12/02/2019",
      "12/02/2019",
      "12/02/2019",
      "04/05/2019",
      "12/02/2019",
      "12/02/2019"
    ];
    var time = [23.0, 22.0, 22.0, 22.0, 23.0, 23.0];
    var price = [15.5, 18.75, 19.0, 56.0, 32.5, 29.5];
    var venue = [
      "The Hub/dBs",
      "The Factory",
      "The Hub/dBs",
      "Factory",
      "The Hub/dBs",
      "The Factory"
    ];
    var lats = [
      50.3681744,
      50.3687971,
      50.3672925,
      50.3696466,
      50.3802831,
      50.3804371
    ];
    var longs = [
      -4.1444877,
      -4.1500989,
      -4.1494981,
      -4.1470949,
      -4.1354273,
      -4.1352771
    ];
    var condition = longs.length.valueOf();
    var initaliseIndex = 0;
    for (initaliseIndex < condition; (initaliseIndex = initaliseIndex + 1); ) {
      if (initaliseIndex > condition) {
        return false;
      } else {
        var selectIndex = initaliseIndex - 1;
        var currentArtist = artist[selectIndex];
        var currentDate = date[selectIndex];
        var currentTime = parseFloat(time[selectIndex].toString()).toPrecision(
          4
        );
        var currentPrice = parseFloat(
          price[selectIndex].toString()
        ).toPrecision(4);
        var currentVenue = venue[selectIndex];
        var currentLat = lats[selectIndex];
        var currentLong = longs[selectIndex];
        let latLng = new google.maps.LatLng(currentLat, currentLong);
        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: latLng
        });
        let content =
          "Artist:" +
          " " +
          currentArtist +
          "<br>" +
          "Date:" +
          " " +
          currentDate +
          "<br>" +
          "Time:" +
          " " +
          currentTime +
          "<br>" +
          "Price:£" +
          currentPrice +
          "<br>" +
          "Venue:" +
          " " +
          currentVenue +
          "<br>" +
          '<button class="infoWindowButton" type="button" onclick = "buyTickets()">Buy this ticket?</button>';
        this.addInfoWindow(marker, content);
      }
    }
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

import { Component, ViewChild, ElementRef, NgZone } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";

declare var google;
@IonicPage()
@Component({
  selector: "page-select-location-modal",
  templateUrl: "select-location-modal.html"
})
export class SelectLocationModalPage {
  @ViewChild("map") mapElement: ElementRef;
  GoogleAutocomplete: any;
  autocomplete: any;
  autocompleteItems: any;
  map: any;
  markers: any;
  geocoder: any;

  constructor(
    public navCtrl: NavController,
    private view: ViewController,
    public navParams: NavParams,
    private vCtrl: ViewController,
    private zone: NgZone
  ) {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: "" };
    this.autocompleteItems = [];
    this.geocoder = new google.maps.Geocoder();
    this.markers = [];
  }

  updateResults() {
    if (this.autocomplete.input == "") {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions(
      { input: this.autocomplete.input },
      places => {
        this.autocompleteItems = [];
        this.zone.run(() => {
          places.forEach(places => {
            this.autocompleteItems.push(places);
          });
        });
      }
    );
  }

  async selectSearchResult(item) {
    this.autocompleteItems = [];
    this.geocoder.geocode(
      { placeId: item.place_id },
      async (results, status) => {
        if (status === "OK" && results[0]) {
          let position = {
            lat: results[0].geometry.location.lat(),
            lng: results[0].geometry.location.lng()
          };
          let marker = new google.maps.Marker({
            position: results[0].geometry.location,
            map: this.map
          });
          await this.markers.push(marker);
          this.map.setCenter(results[0].geometry.location);
          var venue = this.autocomplete.input.toString().toUpperCase();
          console.log(position.lat, position.lng, venue);
          var venueData = [];
          venueData.push(venue);
          var latData = [];
          latData.push(position.lat);
          var lngData = [];
          lngData.push(position.lng);
          this.view.dismiss({ venueData, latData, lngData });
        }
      }
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SelectLocationModalPage");
    this.loadMap();
  }

  close() {
    this.vCtrl.dismiss({ venueData: 0, latData: 0, lngData: 0 });
  }

  loadMap() {
    var uluru = { lat: -25.344, lng: 131.036 };
    let mapOptions = {
      center: uluru,
      zoom: 1,
      zoomControl: true,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }
}

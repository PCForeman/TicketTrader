import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  App,
  LoadingController
} from "ionic-angular";
import { Listings } from "../../models/listing";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireStorage } from "angularfire2/storage";
import { HomePage } from "../home/home";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { e } from "@angular/core/src/render3";

var gListingId;
var gListingCreationTime;
var gListingCustomerPayout;
var gListingServiceCharge;

@IonicPage()
@Component({
  selector: "page-sell",
  templateUrl: "sell.html"
})
export class SellPage {
  firebaseService: any;
  toastCtrl: any;
  ionViewDidLoad() {
    console.log("ionViewDidLoad SellPage");
    this.listingTimestamp();
    this.lockTicketButton();
    this.unlockTicketButton();
    this.lockFileUpload();
    this.unlockFileUpload();
  }

  listing = {} as Listings;

  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private app: App,
    private camera: Camera,
    private storage: AngularFireStorage,
    private fbDatabase: AngularFireDatabase,
    private ldCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

  async takePhoto() {
    try {
      const options: CameraOptions = {
        quality: 50,
        targetHeight: 500,
        targetWidth: 500,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.PNG,
        mediaType: this.camera.MediaType.PICTURE
      };
      const end = this.camera.getPicture(options);
      console.log(end);
      const image = `data:image/png;base64,${end}`;
      const pictures = this.storage.ref("tickets");
      pictures.putString(image, "data_url");
    } catch (e) {
      console.log(e);
    }
  }

  checkOut() {
    this.navCtrl.push("BuyPage");
  }

  storageRef() {}

  orderHistory() {
    this.navCtrl.push("OrderHistoryPage");
  }

  generateListingId() {
    var bit1 = Date.now();
    var bit2 = Math.floor(Math.random() * 99 + 1);
    var randomID = (bit1 + bit2).toString();
    gListingId = randomID;
  }

  listingTimestamp() {
    var Y = new Date().getFullYear().toString();
    var M = new Date().getMonth().toString();
    var D = new Date().getDay().toString();
    var H = new Date().getHours().toString();
    var MM = new Date().getMinutes().toString();
    var recordListingTime =
      D + "/" + M + "/" + Y + " " + "At" + " " + H + ":" + MM;
    gListingCreationTime = recordListingTime;
  }

  ticketIncomeCalc() {
    var userMoney = this.listing.listingPrice;
    var ticketTraderMoney = Number(((userMoney / 100) * 7 + 0.3).toFixed(2));
    console.log(ticketTraderMoney);
    var userFinal = Number(userMoney - ticketTraderMoney).toFixed(2);
    console.log(userFinal);
    if (userMoney >= 0 && userMoney <= 1000) {
      gListingCustomerPayout = userFinal;
      gListingServiceCharge = ticketTraderMoney;
      this.toast
        .create({
          message:
            "You will recieve £" +
            userFinal +
            ", when your ticket has been bought.",
          position: "middle",
          duration: 3500
        })
        .present();
    } else {
      this.toast
        .create({
          message: "Value not numerical, or exceeds the price limit.",
          position: "middle",
          duration: 3500
        })
        .present();
    }
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

  lockFileUpload() {
    var disableFileUpload = <HTMLButtonElement>(
      document.getElementById("btnUploadTicket")
    );
    disableFileUpload.disabled = true;
  }

  unlockFileUpload() {
    document
      .getElementById("btnCheckPrice")
      .addEventListener("click", function() {
        var EnableFileUpload = <HTMLButtonElement>(
          document.getElementById("btnUploadTicket")
        );
        EnableFileUpload.disabled = false;
      });
  }

  lockTicketButton() {
    var disableCreateListing = <HTMLButtonElement>(
      document.getElementById("btnCreateListing")
    );
    disableCreateListing.disabled = true;
  }

  unlockTicketButton() {
    document
      .getElementById("btnUploadTicket")
      .addEventListener("click", function() {
        var EnableCreateListing = <HTMLButtonElement>(
          document.getElementById("btnCreateListing")
        );
        EnableCreateListing.disabled = false;
      });
  }

  showSpinner() {
    let loading = this.ldCtrl.create({
      content: ""
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  async createListing() {
    await this.showSpinner();
    var artist = this.listing.listingName;
    var location = this.listing.listingLocation;
    var startTime = this.listing.listingTime;
    var date = this.listing.listingDate.toString();
    var p3 = date.slice(0, 4);
    var p2 = date.slice(5, 7);
    var p1 = date.slice(8, 11);
    var rDate = p1 + "/" + p2 + "/" + p3;
    console.log(rDate);
    var price = this.listing.listingPrice;
    if (
      artist == "" ||
      location == "" ||
      (startTime < 0 && startTime > 24) ||
      date == null ||
      price == NaN ||
      price < 0 ||
      price > 1000
    ) {
      this.toast
        .create({
          message: "One or more fields are incorrect, please check them",
          duration: 3000,
          position: "bottom"
        })
        .present();
    } else {
      this.generateListingId();
      await this.afAuth.authState.take(1).subscribe(auth => {
        this.listing.listingDate = rDate;
        this.listing.listingSellerUID = auth.uid;
        this.listing.listingCreationDate = gListingCreationTime;
        this.listing.listingServiceCharge = gListingServiceCharge;
        this.listing.listingCustomerPayout = gListingCustomerPayout;
        this.listing.listingSold = false;
        var ref = this.fbDatabase
          .list(`unaprovedTickets/`)
          .push(this.listing)
          .orderByKey();
        console.log(ref);
        this.toast
          .create({
            message: "Listing successfully created.",
            position: "middle",
            duration: 2000
          })
          .present();
        this.navCtrl.setRoot(HomePage);
      });
    }
  }
}

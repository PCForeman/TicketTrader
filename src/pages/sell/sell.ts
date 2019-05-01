import { Component } from "@angular/core";

import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  App,
  LoadingController,
  ModalController,
  AlertController,
  ModalOptions
} from "ionic-angular";
import { Listings } from "../../models/listing";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireStorage } from "angularfire2/storage";
import { HomePage } from "../home/home";
import { AES256 } from "@ionic-native/aes-256/";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { ImagePicker } from "@ionic-native/image-picker/ngx";

declare var cordova: any;
declare var window: any;


var gListingCreationTime;
var gListingCustomerPayout;
var gListingServiceCharge;
var gLat;
var gLng;
var gVenue;

@IonicPage()
@Component({
  selector: "page-sell",
  templateUrl: "sell.html"
})
export class SellPage {
  ionViewDidLoad() {
    this.cordovaReady();
    console.log("ionViewDidLoad SellPage", cordova.file);
    this.listingTimestamp();
    this.lockTicketButton();
    this.unlockTicketButton();
    this.lockFileUpload();
    this.lockLocationButton();
    this.autoFillPaymentDetails();
  }

  listing = {} as Listings;
  constructor(
    private afAuth: AngularFireAuth,
    private toast: ToastController,
    private app: App,
    private afStorage: AngularFireStorage,
    private afDatabase: AngularFireDatabase,
    private ldCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private modal: ModalController,
    private aCtrl: AlertController,
    private aes: AES256,
    private camera: Camera,
    private imagePicker: ImagePicker
  ) {}

  nativepath: any;
  options:any;
  imageURI:any;
  imageResponse:any;
  cordovaReady() {
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      console.log(cordova.file.applicationDirectory, "hello");
    }
  }

  getImage() {
    this.options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      //maximumImagesCount: 3,
 
      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 200,
      //height: 200,
 
      // quality of resized image, defaults to 100
      quality: 25,
 
      // output type, defaults to FILE_URIs.
      // available options are 
      // window.imagePicker.OutputType.FILE_URI (0) or 
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };
    this.imageResponse = [];
    this.imagePicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (err) => {
      alert(err);
    });
  }

  async uploadfn() {
    const files = await (<any>window).chooser
      .getFile("image/jpeg")
      .then(async uri => {
        console.log(uri.uri, uri.name);
        this.nativepath = uri.uri;
        console.log(this.nativepath);
      })
  }

  takePhoto(){

  }

  checkOut() {
    this.navCtrl.push("BuyPage");
  }

  storageRef() {}

  orderHistory() {
    this.navCtrl.push("OrderHistoryPage");
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
    var userMoney = this.listing.Price;
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
      this.unlockLocationButton();
      this.unlockUploadButton();
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

  unlockUploadButton() {
    var button = <HTMLButtonElement>document.getElementById("btnUploadTicket");
    button.disabled = false;
  }

  lockTicketButton() {
    var disableCreateListing = <HTMLButtonElement>(
      document.getElementById("btnCreateListing")
    );
    disableCreateListing.disabled = true;
  }

  lockLocationButton() {
    var disableCreateListing = <HTMLButtonElement>(
      document.getElementById("btnLocation")
    );
    disableCreateListing.disabled = true;
  }

  unlockLocationButton() {
    var button = <HTMLButtonElement>document.getElementById("btnLocation");
    button.disabled = false;
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
  autoFillPaymentDetails() {
    var key = this.afAuth.auth.currentUser.uid;
    this.afDatabase
      .object(`user/${key}`)
      .snapshotChanges()
      .subscribe(snapshot => {
        var allData = snapshot.payload.val();
        var value = Object.keys(allData);
        var cardKey = value[0];
        this.afDatabase
          .object(`user/${key}/${cardKey}`)
          .snapshotChanges()
          .subscribe(async snapshot => {
            const accountNo: string = snapshot.payload.child(`AccountNo`).val();
            const Sortcode: string = snapshot.payload.child(`Sort`).val();
            const Key: string = snapshot.payload.child(`Key`).val();
            const IV: string = snapshot.payload.child(`IV`).val();
            var accNoPlainText: string;
            var sortCodePlainText: string;
            await this.aes
              .decrypt(Key, IV, accountNo)
              .then(acc => (accNoPlainText = acc))
              .catch((error: any) => console.log(error));
            await this.aes
              .decrypt(Key, IV, Sortcode)
              .then(sort => (sortCodePlainText = sort))
              .catch((error: any) => console.log(error));
            var digits = accNoPlainText.toString().substr(5);
            let alert = this.aCtrl.create({
              title: "Payment",
              message:
                "Use saved account ending in" +
                " " +
                "XXXXX-" +
                digits +
                " " +
                "for payment?",
              buttons: [
                {
                  text: "NO",
                  role: "cancel",
                  handler: () => {
                    console.log("Cancel clicked");
                  }
                },
                {
                  text: "YES",
                  handler: () => {
                    this.listing.PayoutAccount = accNoPlainText;
                    this.listing.PaySortCode = sortCodePlainText;
                  }
                }
              ]
            });
            alert.present();
          });
      });
  }

  async createListing() {
    await this.showSpinner();
    var artist = this.listing.Name;
    artist.toUpperCase();
    var startTime = this.listing.Time;
    var date = this.listing.Date.toString();
    var p3 = date.slice(0, 4);
    var p2 = date.slice(5, 7);
    var p1 = date.slice(8, 11);
    var rDate = p1 + "/" + p2 + "/" + p3;
    console.log(rDate);
    var price = this.listing.Price;
    if (
      artist == "" ||
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
      await this.afAuth.authState.take(1).subscribe(auth => {
        this.listing.Date = rDate;
        this.listing.Seller = auth.uid;
        this.listing.CreationDate = gListingCreationTime;
        this.listing.ServiceCharge = gListingServiceCharge;
        this.listing.CustomerPayout = gListingCustomerPayout;
        this.listing.Long = gLng[0];
        this.listing.Lat = gLat[0];
        this.listing.Location = gVenue[0];
        this.listing.Sold = false;
        this.listing.PaySortCode;
        this.listing.PayoutAccount;
        var ref = this.afDatabase
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

  findVenue() {
    const myModalOpts: ModalOptions = {
      cssClass: "modal",
      enableBackdropDismiss: true,
      showBackdrop: true
    };
    const myModal = this.modal.create(
      "SelectLocationModalPage",
      {},
      myModalOpts
    );
    myModal.present();

    myModal.onDidDismiss(venueData => {
      console.log(venueData.latData, venueData.lngData, venueData.venueData);
      gLat = venueData.latData;
      gLng = venueData.lngData;
      gVenue = venueData.venueData;
    });
  }
}

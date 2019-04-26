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
  ModalOptions,

} from "ionic-angular";
import { Listings } from "../../models/listing";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireStorage } from "angularfire2/storage";
import { HomePage } from "../home/home";
import { Chooser } from "@ionic-native/chooser/index";
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
    console.log("ionViewDidLoad SellPage");
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
    private chooser: Chooser,
    private afStorage: AngularFireStorage,
    private afDatabase: AngularFireDatabase,
    private ldCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private modal: ModalController,
    private aCtrl: AlertController
  ) {}

  async chooseFile() {
    var res = await this.chooser
      .getFile("image")
      .then(file => console.log(file ? file.name : "canceled"))
      .catch((error: any) => console.error(error));
    console.log(res);
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
    var button = <HTMLButtonElement>(document.getElementById("btnUploadTicket"));
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
  var button = <HTMLButtonElement>(document.getElementById("btnLocation"));
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
autoFillPaymentDetails(){
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
        .subscribe(snapshot => {
          const accountNo = snapshot.payload.child(`AccountNo`).val();
          const sortCode = snapshot.payload.child(`Sort`).val();
          const accountString = accountNo.toString().substr(5, 3);
          let alert = this.aCtrl.create({
            title: "Payment",
            message:
              "Use saved account ending in" + " " + "XXXXX-"+ accountString + " " + "for payment?",
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
                  this.listing.PayoutAccount = accountNo;
                  this.listing.PaySortCode = sortCode;
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
    const myModal = this.modal.create("SelectLocationModalPage", {}, myModalOpts);
    myModal.present();

    myModal.onDidDismiss((venueData) => {
      console.log(venueData.latData, venueData.lngData, venueData.venueData)
      gLat = venueData.latData;
      gLng = venueData.lngData;
      gVenue = venueData.venueData;
    })
  }

}

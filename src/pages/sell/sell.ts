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
import { HomePage } from "../home/home";
import { AES256 } from "@ionic-native/aes-256/";
import { File } from "@ionic-native/file";
import { FilePath } from "@ionic-native/file-path";
import { AngularFireStorage } from "angularfire2/storage";

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
    private afDatabase: AngularFireDatabase,
    private ldCtrl: LoadingController,
    public navCtrl: NavController,
    public navParams: NavParams,
    private modal: ModalController,
    private aCtrl: AlertController,
    private aes: AES256,
    private file: File,
    private filePath: FilePath,
    private afStorage: AngularFireStorage
  ) {}

  nativepath: any;

  async uploadfn() {
    const files = await (<any>window).chooser
      .getFile("image/jpeg")
      .then(async uri => {
        console.log(uri.uri, uri.name);
        this.nativepath = uri.uri;
        console.log(this.nativepath);
        this.file.resolveLocalFilesystemUrl(this.nativepath).then(entry => {
          console.log(JSON.stringify(entry));
          let nativeUrl = entry.nativeURL;
          let nativeUrlSegments = nativeUrl.split('/');
          nativeUrlSegments.pop()
          nativeUrl = nativeUrlSegments.join('/')
          console.log(nativeUrl, entry.name);
          this.filePath.resolveNativePath(nativeUrl).then(res => {
          console.log(res)
          this.file.readAsArrayBuffer(res, entry.name).then((async returnVal => {
           await this.sendToFirebase(returnVal, name).catch(error => {
             console.log(error)
           });
           console.log('Success');
          })).catch(error => {
            console.log(error);
          })
        })})})}


 async sendToFirebase(returnVal, name){
   console.log(returnVal, name);
   var blob = new Blob([returnVal], {type: "image/jpeg"});
    this.afStorage.upload(`tickets/${name}`, blob);
  }

  checkOut() {
    this.navCtrl.push("BuyPage");
  }


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
              title: "Payment details",
              message:
                "Use saved account ending in" +
                " " +
                "XXXXX-" +
                digits +
                " " +
                "for payment?",
                mode: ('ios'),
              buttons: [
                {
                  text: "Proceed",
                  role: "cancel",
                  handler: () => {
                    this.listing.PayoutAccount = accNoPlainText;
                    this.listing.PaySortCode = sortCodePlainText;
                   
                  }
                },
                {
                  text: "Dismiss",
                  role: "cancel",
                  handler: () => {
                  console.log("Cancel clicked");
                  }
                }
              ]
            });
            alert.present();
          });
      });
  }

  async createListing() {
    var startTime = this.listing.Time;
    var artist = this.listing.Name;
    var price = this.listing.Price;
    var date = this.listing.Date.toString();
    if (parseInt(gLat[0]).valueOf() == 0 && parseInt(gLng[0]).valueOf() == 0) {
      this.toast
        .create({
          message: "You must select a location",
          duration: 2000,
          position: "middle"
        })
        .present();
      }else if (
      (startTime < 0 && startTime > 24)
     ) {
      this.toast
        .create({
          message: "must be a time between 0.00 and 24.00",
          duration: 2000,
          position: "middle"
        })
        .present();
    }else if (artist == "" || artist == null) {
      this.toast
        .create({
          message: "Arstist field cannot be empty.",
          duration: 2000,
          position: "middle"
        })
        .present();
    }else if (date == null || date == "") {
      this.toast
        .create({
          message: "Date cannot be empty.",
          duration: 2000,
          position: "middle"
        })
        .present();
    }else if (price < 0 || price == NaN || price > 100) {
      this.toast
        .create({
          message: "Price must be between £0-100",
          position: "middle",
          duration: 2000
        })
        .present();
      }else{ await this.showSpinner();
    artist.toUpperCase();
    var p3 = date.slice(0, 4);
    var p2 = date.slice(5, 7);
    var p1 = date.slice(8, 11);
    var rDate = p1 + "/" + p2 + "/" + p3;
    console.log(rDate);
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

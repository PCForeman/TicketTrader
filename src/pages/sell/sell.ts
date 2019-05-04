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
import { AndroidPermissions } from "@ionic-native/android-permissions/";
import { File } from "@ionic-native/file";
import { FilePath } from "@ionic-native/file-path";
import { AngularFireStorage } from "angularfire2/storage";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

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
    this.requestPermissions();
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
    private afStorage: AngularFireStorage,
    private filePath: FilePath,
    private androidPermissions: AndroidPermissions
  ) {}

  nativepath: any;
  payoutAmount: any;
  ttPayoutAmount: any;

  requestPermissions() {
    this.androidPermissions
      .checkPermission(
        this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE
      )
      .then(status => {
        if (status.hasPermission == true) {
          console.log("You already have permissions");
        } else {
          this.androidPermissions
            .requestPermissions([
              this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
              this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
              this.androidPermissions.PERMISSION.STORAGE
            ])
            .then(status => {
              if (status.hasPermission) console.log(status.hasPermission);
            });
        }
      });
  }

  async uploadfn() {
    const files = await (<any>window).chooser
      .getFile("image/jpeg")
      .then(async uri => {
        this.nativepath = uri.uri;
        var path = this.filePath.resolveNativePath(uri.uri).then(res => {
          console.log(this.nativepath, path);
          this.file.resolveLocalFilesystemUrl(res).then(entry => {
            console.log(JSON.stringify(entry));
            let dirPath = entry.nativeURL;
            let dirPathSplit = dirPath.split("/");
            dirPathSplit.pop();
            dirPath = dirPathSplit.join("/");
            this.file
              .readAsArrayBuffer(dirPath, entry.name)
              .then(async buffer => {
                console.log(buffer);
                await this.upload(buffer, entry.name).catch(error => {
                  console.log(error);
                });
                console.log("Success");
              })
              .catch(error => {
                console.log(error);
              });
          });
        });
      });
  }

  async upload(buffer, name) {
    let blob = new Blob([buffer], { type: "image/jpeg" });
    console.log(blob);
    this.afStorage
      .upload(`tickets${name}`, blob)
      .then(done => {
        console.log(done);
      })
      .catch(error => console.log(error));
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
    this.ttPayoutAmount = ticketTraderMoney;
    console.log(ticketTraderMoney);
    var userFinal = Number(userMoney - ticketTraderMoney).toFixed(2);
    this.payoutAmount = userFinal;
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
              mode: "ios",
              message:
                "Use saved account ending in" +
                " " +
                "XXXXX-" +
                digits +
                " " +
                "for payment?",
              buttons: [
                {
                  text: "Proceed",
                  handler: () => {
                    console.log("Cancel clicked");
                    this.listing.PayoutAccount = accNoPlainText;
                    this.listing.PaySortCode = sortCodePlainText;
                  }
                },
                {
                  text: "Dismiss",
                  role: "cancel",
                  handler: () => {
                    console.log("cancelled");
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

  createListingConfirmation() {
    let alert = this.aCtrl.create({
      title: "Create listing",
      mode: "ios",
      message:
        "Your ticket will be added to listings when it has been confirmed as legitimate." +
        "<br>" +
        "You will recieve" +
        " " +
        "£" +
        this.payoutAmount +
        " " +
        "upon a successful sale of the ticket," +
        " " +
        "£" +
        this.ttPayoutAmount +
        " " +
        "will be deducted from the total price as a service charge.",
      buttons: [
        {
          text: "Proceed",
          handler: () => {
            this.createListing();
          }
        },
        {
          text: "Dismiss",
          role: "cancel",
          handler: () => {
            console.log("cancelled");
          }
        }
      ]
    });
    alert.present();
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

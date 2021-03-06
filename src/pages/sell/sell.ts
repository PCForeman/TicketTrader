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
import { AES256 } from "@ionic-native/aes-256/";
import { AndroidPermissions } from "@ionic-native/android-permissions/";
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
  url: any;
  buffer: any;
  entryname: any;
  PayoutAccount: any;
  PayoutSortCode: any;

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

  async selectTicket() {
    const files = await (<any>window).chooser
      .getFile("image/jpeg/png")
      .then(async uri => {
        this.nativepath = uri.uri;
        await this.resolvePath(this.nativepath);
      });
  }

  async resolvePath(nativepath) {
    var path = this.filePath.resolveNativePath(nativepath).then(res => {
      console.log(this.nativepath, path);
      this.file.resolveLocalFilesystemUrl(res).then(entry => {
        console.log(JSON.stringify(entry));
        let dirPath = entry.nativeURL;
        let dirPathSplit = dirPath.split("/");
        dirPathSplit.pop();
        dirPath = dirPathSplit.join("/");
        this.file.readAsArrayBuffer(dirPath, entry.name).then(async buffer => {
          this.buffer = buffer;
          this.entryname = entry.name;
          console.log(buffer);
        });
      });
    });
  }

  async upload(buffer, name) {
    let blob = new Blob([buffer], { type: "image" });
    console.log(blob);
    await this.afStorage
      .upload(`tickets${name}`, blob)
      .then(async done => {
        const url = await done.ref.getDownloadURL();
        this.url = url;
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

  downloadTicket() {}

  ticketIncomeCalc() {
    var userMoney = this.listing.Price;
    var ticketTraderMoney = Number(((userMoney / 100) * 7 + 0.3).toFixed(2));
    this.ttPayoutAmount = ticketTraderMoney;
    console.log(ticketTraderMoney);
    var userFinal = Number(userMoney - ticketTraderMoney).toFixed(2);
    this.payoutAmount = userFinal;
    console.log(userFinal);
    if (userMoney > 1 && userMoney <= 50) {
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
          message: "Value must be between £1 and £50.",
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
      content: "Processing",
      spinner: "bubbles"
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
                    this.PayoutAccount = accNoPlainText;
                    this.PayoutSortCode = sortCodePlainText;
                    this.instructionMessage();
                  }
                },
                {
                  text: "Dismiss",
                  role: "cancel",
                  handler: () => {
                    console.log("cancelled");
                    this.instructionMessage();
                  }
                }
              ]
            });
            alert.present();
          });
      });
  }

  instructionMessage() {
    this.toast
      .create({
        message:
          "Listing a ticket is easy just fill out the ticket details below, check the money you will recieve by clicking the calculator. Then select a location by clicking the venue button and upload the corresponding ticket by clicking the ticket button",
        duration: 7000,
        position: "middle"
      })
      .present();
  }

  async createListing(url: string) {
    await this.showSpinner();
    var artist = this.listing.Name.toUpperCase();
    var startTime = this.listing.Time;
    var date = this.listing.Date.toString();
    var p3 = date.slice(0, 4);
    var p2 = date.slice(5, 7);
    var p1 = date.slice(8, 11);
    var rDate = p1 + "/" + p2 + "/" + p3;
    console.log(rDate);
    var price = this.listing.Price;
    if (artist == "" || artist == null) {
      this.toast
        .create({
          message: "Artist field is empty",
          duration: 2000,
          position: "middle"
        })
        .present();
    } else if (startTime < 0 && startTime > 24) {
      this.toast
        .create({
          message: "Time must be 24hr clock",
          duration: 2000,
          position: "middle"
        })
        .present();
    } else if (date == null) {
      this.toast
        .create({
          message: "Date cannot be empty",
          duration: 2000,
          position: "middle"
        })
        .present();
    } else if (price == NaN) {
      this.toast
        .create({
          message: "Price must be a numerical value between £1 - £50",
          duration: 2000,
          position: "middle"
        })
        .present();
    } else if (price < 1) {
      this.toast
        .create({
          message: "Price cannot be lower than £1",
          duration: 2000,
          position: "middle"
        })
        .present();
    } else if (price > 50) {
      this.toast
        .create({
          message: "Price cannot exceed £50",
          duration: 2000,
          position: "middle"
        })
        .present();
    } else {
      await this.upload(this.buffer, this.entryname);
      this.afAuth.authState.take(1).subscribe(auth => {
        this.afDatabase
          .object(`user/${auth.uid}`)
          .snapshotChanges()
          .subscribe(res => {
            res.payload.child(`Rating`).val();
            this.listing.Date = rDate;
            this.listing.Seller = auth.uid;
            this.listing.CreationDate = gListingCreationTime;
            this.listing.ServiceCharge = gListingServiceCharge;
            this.listing.CustomerPayout = gListingCustomerPayout;
            this.listing.Long = gLng[0];
            this.listing.Lat = gLat[0];
            this.listing.Location = gVenue[0];
            this.listing.Sold = false;
            this.listing.PaySortCode = this.PayoutSortCode;
            this.listing.Price = price;
            this.listing.PayoutAccount = this.PayoutAccount;
            this.listing.Name = artist;
            this.listing.Time = startTime;
            this.listing.downloadURL = this.url;
            this.listing.interested = 0;
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
            this.navCtrl.setRoot("Page").catch(error => {
              console.log(error);
            });
          });
        this.clearSellFields();
      });
    }
  }

  clearSellFields() {
    this.listing.Name = "";
    this.listing.Date = "";
    this.listing.Time = null;
    this.listing.Price = null;
    this.listing.PaySortCode = "";
    this.listing.PayoutAccount = "";
  }

  async createListingConfirmation() {
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
            this.createListing(this.url);
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


  ticketTraderInfo() {
    const myModalOpts: ModalOptions = {
      cssClass: "modal",
      enableBackdropDismiss: true,
      showBackdrop: true
    };
    const myModal = this.modal.create(
      "InformationModalPage",
      {},
      myModalOpts
    );
    myModal.present();

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

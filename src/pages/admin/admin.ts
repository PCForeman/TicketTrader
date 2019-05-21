import { Component } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";
import {
  App,
  IonicPage,
  LoadingController,
  NavController,
  NavParams,
  ToastController,
  ModalController,
  ModalOptions
} from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-admin",
  templateUrl: "admin.html"
})
export class AdminPage {
  items = [];
  kA = [];
  ticketId: any;
  itemSearch = [];
  items2 = [];
  refreshTickets = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private ldCtrl: LoadingController,
    private fbDatabase: AngularFireDatabase,
    private toast: ToastController,
    private app: App,
    private modal: ModalController
  ) {}

  ionViewDidLoad() {
    this.retrieveUnaprovedTickets();
    this.copyItems();
  }

  openImage() {
    // Opens a modal to display the image that is viewed via a download url
    var target = event.srcElement;
    var imageUrl = target.parentElement.parentElement.children.item(7)
      .innerHTML;
    console.log(imageUrl);
    const myModalOpts: ModalOptions = {
      enableBackdropDismiss: true,
      showBackdrop: false
    };
    const imageToView = {
      url: imageUrl
    };
    const myModal = this.modal.create(
      "ViewImageModalPage",
      { image: imageToView },
      myModalOpts
    );
    myModal.present();
  }

  refresh(): void {
    // Can be called to refresh the page
    window.location.reload();
  }

  initializeItems(): void {
    this.itemSearch = this.items;
  }


  copyItems(): void {
    this.items2 = this.items;
  }

  onCancel() {
    this.itemSearch = this.items2;
  }


  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
    console.log(this.itemSearch);
    // set q to the value of the searchbar
    var term = searchbar.srcElement.value;
    console.log(term);
    // if the value is an empty string don't filter the items
    if (term == undefined || term == "") {
      this.items = this.items2;
      this.items.splice(this.items.length - 1);
      console.log(this.items);
    } else {
      this.itemSearch = this.itemSearch.filter(v => {
        if (v.Key && term) {
          if (v.Key.toLowerCase().indexOf(term.toLowerCase()) > -1) {
            this.items = this.itemSearch;
            return true;
          } else if (v.Name && term) {
            if (v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1) {
              this.items = this.itemSearch;
              return true;
            } else if (v.Venue && term) {
              if (v.Venue.toLowerCase().indexOf(term.toLowerCase()) > -1) {
                this.items = this.itemSearch;
                return true;
            } else if (v.Date && term) {
              if (v.Date.toLowerCase().indexOf(term.toLowerCase()) > -1) {
                this.items = this.itemSearch;
                return true;
              } else if (v.Price && term) {
                if (v.Price.toLowerCase().indexOf(term.toLowerCase()) > -1) {
                  this.items = this.itemSearch;
                  return true;
                } else if (v.Time && term) {
                  if (v.Time.toLowerCase().indexOf(term.toLowerCase()) > -1) {
                    this.items = this.itemSearch;
                    return true;
              }
            }
          }
        }
      }
            return false;
          }
        }
      });
      console.log(term, this.itemSearch.length, this.itemSearch);
      this.items.push(this.itemSearch);
      this.reloadData();
    }
  }

  reloadData() {
    this.items = this.itemSearch;
  }

  retrieveUnaprovedTickets() {
    // Retrieve all of the unapproved tickets that are in the database, and creates an object for each one
    var ref = this.fbDatabase.object(`unaprovedTickets/`);
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
        this.kA.push(id);
        var ref = this.fbDatabase.object(`unaprovedTickets/${keyValue}`);
        ref.snapshotChanges().subscribe(snapshot => {
          const finalKey = this.kA[this.kA.length - this.kA.length + x];
          const eventName = snapshot.payload.child(`Name`).val();
          const eventPrice = snapshot.payload.child(`Price`).val();
          const eventVenue = snapshot.payload.child(`Location`).val();
          const eventDate = snapshot.payload.child(`Date`).val();
          const eventTime = snapshot.payload.child(`Time`).val();
          const lats = snapshot.payload.child(`Lat`).val();
          const longs = snapshot.payload.child(`Long`).val();
          const paymentAccount = snapshot.payload.child(`PayoutAccount`).val();
          const paymentSort = snapshot.payload.child(`PaySortCode`).val();
          const interested = snapshot.payload.child(`interested`).val();
          const eventCreationDate = snapshot.payload
            .child(`CreationDate`)
            .val();
          const downloadURL = snapshot.payload.child(`downloadURL`).val();
          const eventSellerUID = snapshot.payload.child(`Seller`).val();
          const eventCustomerPayout = snapshot.payload
            .child(`CustomerPayout`)
            .val();
          const eventServiceCharge = snapshot.payload
            .child(`ServiceCharge`)
            .val();

          const listingBoolean = snapshot.payload.child(`listingSold`).val();
          this.items.push({
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
            Sold: listingBoolean,
            Lat: lats,
            Long: longs,
            PayoutAccount: paymentAccount,
            PayoutSortCode: paymentSort,
            downloadURL: downloadURL,
            interested: interested
          });
          x++;
        });
      }
    });
  }

  async accept() {
    // Move the ticket from the unaproved table to the approved table
    await this.showSpinner();
    var temp = [];
    var target = event.srcElement;
    var ticketClicked =
      parseInt(
        target.parentElement.parentElement.children.item(0).innerHTML.valueOf()
      ) - 1;
    console.log(ticketClicked);
    temp.push(this.items[ticketClicked]);
    temp.filter(async v => {
      temp = [
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
          Long: v.Long,
          Lat: v.Lat,
          PayoutAccount: v.PayoutAccount,
          PayoutSortCode: v.PayoutSortCode,
          downloadURL: v.downloadURL,
          interested: v.interested
        }
      ];

      this.fbDatabase.list(`approvedTickets/`).push(temp[0]);
      this.fbDatabase.list(`unaprovedTickets/${temp[0].Key}`).remove();
      await this.toast
        .create({
          message:
            "Ticket" +
            " " +
            temp[0].Key +
            " " +
            "has been approved and moved to active listings",
          position: "top",
          duration: 2000
        })
        .present()
        .catch(error => {
          console.log(error);
        });
      this.refresh();
    });
  }

  showSpinner() {
    // Displays a spinner
    let loading = this.ldCtrl.create({
      content: ""
    });
    loading.present();
    setTimeout(() => {
      loading.dismiss();
    }, 1500);
  }

  reject() {
    // Rejects a ticket and removes it from the database.
    var temp = [];
    var target = event.srcElement;
    var ticketClicked =
      parseInt(
        target.parentElement.parentElement.children.item(0).innerHTML.valueOf()
      ) - 1;
    console.log(ticketClicked);
    temp.push(this.items[ticketClicked]);
    temp.filter(async v => {
      temp = [
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
          Lat: v.Lat,
          Long: v.Long
        }
      ];

      this.fbDatabase.list(`rejectedTickets/`).push(temp[0]);
      this.fbDatabase.list(`unaprovedTickets/${temp[0].Key}`).remove();
      await this.toast
        .create({
          message: "Ticket" + " " + temp[0].Key + " " + "has been rejected.",
          position: "top",
          duration: 2000
        })
        .present();
      await this.showSpinner();
      this.refresh();
    });
  }

  logout() {
    // Logs a user out
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

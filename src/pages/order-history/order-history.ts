import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  ModalController,
  ModalOptions,
  AlertController,
  App,
  LoadingController
} from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
import { AES256 } from "@ionic-native/aes-256";

@IonicPage()
@Component({
  selector: "page-order-history",
  templateUrl: "order-history.html"
})
export class OrderHistoryPage {
  items = [];
  itemSold = [];
  kA = [];
  items2 = [];
  itemSearch = [];
  seperator: any;
  seperator2: any;
  plainTextCard: any;
  hoursLeft: number;
  minutesLeft: number;
  secondsLeft: number;
  timer: any;
  hours: any;
  belowTen: any;
  belowTenMin: any;
  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private toast: ToastController,
    private aes: AES256,
    private modal: ModalController,
    private aCtrl: AlertController,
    public navParams: NavParams,
    private ldCtrl: LoadingController,
    private app: App
  ) {}

  ionViewDidLoad() {
    this.retrieveBoughtListings();
    this.retrieveSoldListings();
    this.releaseFunds();
  }

  remove(currentuser, id) {
    this.afDatabase
      .list(`sold/${currentuser}/${id}`)
      .remove()
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    this.items = [];
    this.retrieveSoldListings;
  }

  refresh(): void {
    window.location.reload();
  }

  getTime() {
    const button = event.srcElement;
    const ID = this.afAuth.auth.currentUser.uid;
    const TicketID = button.parentElement.parentElement.children.item(1)
      .innerHTML;
    console.log(TicketID);
    const date = button.parentElement.parentElement.children.item(4).innerHTML;
    const YYYY = parseInt(date.substr(6));
    const MM = parseInt(date.substr(3, 3));
    const DD = parseInt(date.substr(0, 2));
    this.afDatabase
      .object(`/bought/${ID}/${TicketID}`)
      .snapshotChanges()
      .subscribe(result => {
        const HH = result.payload.child(`Time`).val();
        this.hours = parseInt(HH);
        const eventInMilliseconds = new Date(YYYY, MM - 1, DD).getTime();
        const hoursToMilliSeconds = 3.6e6 * this.hours;
        const removalAllowedTime = eventInMilliseconds + hoursToMilliSeconds;
        const timeNow = new Date().getTime();
        console.log(eventInMilliseconds, removalAllowedTime, timeNow);
        if (timeNow >= removalAllowedTime) {
          this.removeAlertBought(ID, TicketID);
        } else {
          this.toast
            .create({
              message:
                "You will be able to remove this record 24hrs after the event has taken place",
              duration: 3000,
              position: "middle"
            })
            .present()
            .catch(error => {
              console.log(error);
            });
        }
      });
  }

  async viewTicket() {
    const button = event.srcElement;
    var url = button.parentElement.parentElement.children.item(7).innerHTML;
    console.log(url);
    const myModalOpts: ModalOptions = {
      enableBackdropDismiss: true,
      showBackdrop: false
    };
    const imageToView = {
      url: url
    };
    const myModal = this.modal.create(
      "ViewImageModalPage",
      { image: imageToView },
      myModalOpts
    );
    myModal.present();
  }

  async retrieveSoldListings() {
    const currentUser = this.afAuth.auth.currentUser.uid;
    const ref = this.afDatabase.object(`sold/${currentUser}`);
    ref.snapshotChanges().subscribe(snapshot => {
      var allData = snapshot.payload.val();
      var keyValues = Object.keys(allData);
      console.log(keyValues);
      for (var i = 0; i < keyValues.length; ) {
        const key = keyValues[i].valueOf();
        this.afDatabase
          .object(`sold/${currentUser}/${keyValues[i]}`)
          .snapshotChanges()
          .subscribe(async data => {
            console.log(key);
            const Artist = data.payload.child(`Artist`).val();
            const AccountNo = data.payload.child(`AccountNo`).val();
            const Date = data.payload.child(`Date`).val();
            const FundRelease = data.payload.child(`FundRelease`).val();
            const Price = data.payload.child(`Price`).val();
            const SortCode = data.payload.child(`SortCode`).val();
            const Venue = data.payload.child(`Venue`).val();
            const Status = data.payload.child(`Status`).val();
            var ticketObject = {
              Key: key,
              Artist: Artist,
              Venue: Venue,
              Date: Date,
              Price: Price,
              AccountNo: AccountNo,
              FundRelease: FundRelease,
              SortCode: SortCode,
              Status: Status
            };
            this.itemSold.push(ticketObject);
            console.log(this.itemSold);
          });
        i++;
      }
    });
  }

  removeAlertSold() {
    const target = event.srcElement;
    const id = target.parentElement.parentElement.children.item(1).innerHTML;
    const currentUser = this.afAuth.auth.currentUser.uid;
    let alert = this.aCtrl.create({
      title: "Order history",
      mode: "ios",
      message: "Remove this record?",
      buttons: [
        {
          text: "Yes",
          handler: () => {
            this.remove(currentUser, id);
          }
        },
        {
          text: "NO",
          role: "cancel",
          handler: () => {}
        }
      ]
    });
    alert.present();
  }

  removeBoughtTicket(currentUser, id) {
    console.log(currentUser, id);
    this.afDatabase.list(`bought/${currentUser}/${id}`).remove();
  }

  removeAlertBought(currentUser, id) {
    console.log(currentUser, id);
    let alert = this.aCtrl.create({
      title: "Order history",
      mode: "ios",
      message: "Remove this record?",
      buttons: [
        {
          text: "Yes",
          handler: () => {
            this.removeBoughtTicket(currentUser, id);
          }
        },
        {
          text: "NO",
          role: "cancel",
          handler: () => {}
        }
      ]
    });
    alert.present();
  }

  paymentDetails() {
    const target = event.srcElement;
    const id = target.parentElement.parentElement.children.item(1).innerHTML;
    const Account = target.parentElement.parentElement.children.item(6)
      .innerHTML;
    const Sort = target.parentElement.parentElement.children.item(7).innerHTML;
    const currentUser = this.afAuth.auth.currentUser.uid;
    console.log(Date.now() + 960000);
    var ref = this.afDatabase.object(`sold/${currentUser}/${id}`);
    ref.snapshotChanges().subscribe(snapshot => {
      const databaseTime = snapshot.payload.child(`FundRelease`).val();
      const timeNow = Date.now();
      const string = "Complete";
      let alert = this.aCtrl.create({
        title: "Payment details",
        mode: "ios",
        message:
          "Payment account:" +
          " " +
          Account +
          "<br>" +
          "Sortcode:" +
          " " +
          Sort,
        buttons: [
          {
            text: "Close",
            handler: () => {}
          }
        ]
      });
      alert.present();
      if (timeNow > databaseTime) {
        this.afDatabase
          .object(`sold/${currentUser}/${id}`)
          .update({ Status: string })
          .catch(error => {
            console.log(error);
          });
      }
    });
  }

  releaseFunds() {
    const userId = this.afAuth.auth.currentUser.uid
    this.ldCtrl
      .create({ spinner: "bubbles", duration: 2500, content: "Updating list" })
      .present();
    var ref = this.afDatabase.object(`sold/${userId}`);
    ref.snapshotChanges().subscribe(snapshot => {
      var allData = snapshot.payload.val();
      var array = [];
      array.push(allData);
      var value = Object.keys(allData);
      var keyArray = [];
      keyArray.push(value);
      for (var i = 0; i < value.length; i++) {
        var selectedIndex = i;
        var keyValue = value[selectedIndex];
        var indexSelecta = value.length - value.length + i;
        var id = value[indexSelecta];
        this.kA.push(id);
        var ref2 = this.afDatabase.object(`sold/${keyValue}`);
        ref2.snapshotChanges().subscribe(snapshot => {
          const fundRelease = snapshot.payload.child(`FundRelease`).val();
          const timeNow = new Date().getTime();
          if (timeNow > fundRelease) {
            this.afDatabase.database
              .ref(`sold/${keyValue}`).update({Status: 'Paid'})
              .catch(error => {
                console.log(error);
              });
            console.log("Pending release");
          }
        });
      }
    });
  }


  feedback() {
    const button = event.srcElement;
    const buyerId = this.afAuth.auth.currentUser.uid;
    const id = button.parentElement.parentElement.children.item(1).innerHTML;
    const sellerId = button.parentElement.parentElement.children.item(8)
      .innerHTML;
    this.afDatabase
      .object(`bought/${buyerId}/${id}`)
      .snapshotChanges()
      .subscribe(result => {
        const bool = result.payload.child(`Feedback`).val();
        if (bool == false) {
          this.feedbackForm(buyerId, id, sellerId);
        }else{
          this.toast
            .create({
              message: "You have already left feedback for this ticket",
              duration: 2000,
              position: "middle"
            })
            .present()
            .catch(error => {
              console.log(error);
            });
        }
      });
  }
  feedbackForm(buyerId, id, seller) {
    let alert = this.aCtrl.create({
      title: "Leave feedback between 1 and 5",
      mode: "ios",
      inputs: [
        {
          name: "Number",
          placeholder: "Number",
          type: "number"
        }
      ],
      buttons: [
        {
          text: "Proceed",
          handler: data => {
            console.log(data);
            if (data.Number > 1 && data.Number <= 5) {
              this.afDatabase
                .object(`bought/${buyerId}/${id}`)
                .update({ Feedback: true });
              this.afDatabase.database
                .ref(`user/${seller}/rating`)
                .transaction(res => {
                  res + data.Number;
                });
            }
          }
        },
        {
          text: "Dismiss",
          role: "cancel",
          handler: () => {}
        }
      ]
    });
    alert.present();
  }

  async retrieveBoughtListings() {
    const currentUser = this.afAuth.auth.currentUser.uid;
    const ref = this.afDatabase.object(`bought/${currentUser}`);
    ref.snapshotChanges().subscribe(snapshot => {
      var allData = snapshot.payload.val();
      var keyValues = Object.keys(allData);
      for (var i = 0; i < keyValues.length; ) {
        const finalKey = keyValues[i].valueOf();
        this.afDatabase
          .object(`bought/${currentUser}/${keyValues[i]}`)
          .snapshotChanges()
          .subscribe(async data => {
            console.log(finalKey);
            const Artist = data.payload.child(`Artist`).val();
            var Card = data.payload.child(`Card`).val();
            const Date = data.payload.child(`Date`).val();
            const Time = data.payload.child(`Time`).val();
            const Price = data.payload.child(`Price`).val();
            const Ticket = data.payload.child(`Ticket`).val();
            const Venue = data.payload.child(`Venue`).val();
            const eIV = data.payload.child(`eIV`).val();
            const eKey = data.payload.child(`eKey`).val();
            const Seller = data.payload.child(`Seller`).val();
            await this.aes
              .decrypt(eKey, eIV, Card)
              .then(acc => (this.plainTextCard = acc))
              .catch((error: any) => console.log(error));
            var ticketObject = {
              Key: finalKey,
              Artist: Artist,
              Card: this.plainTextCard.substr(15),
              Date: Date,
              Time: Time,
              Price: Price,
              Ticket: Ticket,
              Venue: Venue,
              Seller: Seller
            };
            this.items.push(ticketObject);
            console.log(this.items);
          });
        i++;
      }
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

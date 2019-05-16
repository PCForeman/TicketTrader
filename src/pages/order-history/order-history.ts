import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  ModalController,
  ModalOptions,
  AlertController
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
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.retrieveBoughtListings();
    this.retrieveSoldListings();
    this.fetchTickets();
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


  getTime(){
    const button = event.srcElement;
    const date = button.parentElement.parentElement.children.item(3).innerHTML;
    const  hours = button.parentElement.parentElement.children.item(4).innerHTML;
    const YYYY = parseInt(date.substr(6));
    const MM = parseInt(date.substr(3, 3));
    const DD = parseInt(date.substr(0, 2));
    const HH = parseInt(hours.substr(0,2))
    const eventInMilliseconds = new Date(YYYY, MM, DD, HH).getTime();
    const removalAllowedTime = eventInMilliseconds + 960000;
    const timeNow = new Date().getTime();
    if (timeNow >= removalAllowedTime){
    this.removeAlertBought();
    }else{
    this.toast.create({message:'You will be able to remove this record 24hrs after the event has taken place', duration:3000, position:'middle'}).present();
    }
  }


  async viewTicket() {
    const button = event.srcElement;
    var url = button.parentElement.parentElement.children.item(6).innerHTML;
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

  fetchTickets() {
    setInterval(() => this.retrieveBoughtListings(), 20000);
    setInterval(() => this.retrieveSoldListings(), 20000);
  }

  removeBoughtTicket(currentUser, id) {
    this.afDatabase.list(`bought/${currentUser}/${id}`).remove;
  }

  removeAlertBought() {
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

  async retrieveBoughtListings() {
    const currentUser = this.afAuth.auth.currentUser.uid;
    const ref = this.afDatabase.object(`bought/${currentUser}`);
    ref.snapshotChanges().subscribe(snapshot => {
      var allData = snapshot.payload.val();
      var keyValues = Object.keys(allData);
      for (var i = 0; i < keyValues.length; ) {
        this.afDatabase
          .object(`bought/${currentUser}/${keyValues[i]}`)
          .snapshotChanges()
          .subscribe(async data => {
            const Artist = data.payload.child(`Artist`).val();
            var Card = data.payload.child(`Card`).val();
            const Date = data.payload.child(`Date`).val();
            const Time = data.payload.child(`Time`).val();
            const Price = data.payload.child(`Price`).val();
            const Ticket = data.payload.child(`Ticket`).val();
            const Venue = data.payload.child(`Venue`).val();
            const eIV = data.payload.child(`eIV`).val();
            const eKey = data.payload.child(`eKey`).val();
            await this.aes
              .decrypt(eKey, eIV, Card)
              .then(acc => (this.plainTextCard = acc))
              .catch((error: any) => console.log(error));
            var ticketObject = {
              Artist: Artist,
              Card: this.plainTextCard.substr(15),
              Date: Date,
              Time: Time,
              Price: Price,
              Ticket: Ticket,
              Venue: Venue
            };
            this.items.push(ticketObject);
            console.log(this.items);
          });
        i++;
      }
    });
  }
}

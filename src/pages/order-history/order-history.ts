import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  ModalController,
  ModalOptions
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
  plainTextCard:any;
  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private toast: ToastController,
    private aes: AES256,
    private modal: ModalController,
    public navParams: NavParams
  ) {}

  ionViewDidLoad() {
    this.retrieveBoughtListings();
    this.retrieveSoldListings();
  }

  remove() {
    var temp = [];
    var target = event.srcElement;
    var ticketClicked =
      parseInt(
        target.parentElement.parentElement.children.item(0).innerHTML.valueOf()
      ) - 1;
    console.log(ticketClicked);
    temp.push(this.items[ticketClicked]);
    console.log(temp);
    temp.filter(v => {
      var tempArray = [
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
          Charge: v.Charge
        }
      ];
      this.afDatabase.list(`approvedTickets/${tempArray[0].Key}`).remove();
      this.toast
        .create({
          message:
            "Ticket" +
            " " +
            tempArray[0].Key +
            " " +
            "has been removed from active listings",
          position: "middle",
          duration: 2000
        })
        .present();
      this.navCtrl.setRoot("HomePage");
      this.refresh();
    });
  }

  refresh(): void {
    window.location.reload();
  }


  async viewTicket(){
  const button = event.srcElement
  var url = button.parentElement.parentElement.children.item(5).innerHTML;
  console.log(url)
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
  
  async retrieveSoldListings(){
    var keyArray = [];
    const currentUser = this.afAuth.auth.currentUser.uid;
    const ref = this.afDatabase.object(`sold/${currentUser}`);
    ref.snapshotChanges().subscribe(snapshot => {
    var allData = snapshot.payload.val();
    var keyValues = Object.keys(allData);
    keyArray.push(keyValues);
    console.log(keyArray.length);
    for (var i = -1; i < keyArray.length;){
    this.afDatabase.object(`sold/${currentUser}/${keyValues[i + 1]}`).snapshotChanges().subscribe(async data => {
    const Artist = data.payload.child(`Artist`).val();
    const AccountNo = data.payload.child(`AccountNo`).val();
    const Date = data.payload.child(`Date`).val();
    const FundRelease = data.payload.child(`FundRelease`).val();
    const Price = data.payload.child(`Price`).val();
    const SortCode = data.payload.child(`SortCode`).val();
    const Venue = data.payload.child( `Venue`).val();
    const Status = data.payload.child(`Status`).val();
    var ticketObject = {
    Artist: Artist,
    Venue: Venue,
    Date: Date,
    Price: Price,
    AccountNo: AccountNo,
    FundRelease: FundRelease,
    SortCode: SortCode,
    Status: Status
    }
    this.itemSold.push(ticketObject)
    console.log(this.itemSold);
    })
    i++;
    }
  });
  }

  async retrieveBoughtListings() {
    var keyArray = [];
    const currentUser = this.afAuth.auth.currentUser.uid;
    const ref = this.afDatabase.object(`bought/${currentUser}`);
    ref.snapshotChanges().subscribe(snapshot => {
    var allData = snapshot.payload.val();
    var keyValues = Object.keys(allData);
    keyArray.push(keyValues);
    console.log(keyArray.length);
    for (var i = -1; i < keyArray.length;){
    this.afDatabase.object(`bought/${currentUser}/${keyValues[i + 1]}`).snapshotChanges().subscribe(async data => {
    const Artist = data.payload.child(`Artist`).val();
    var Card = data.payload.child(`Card`).val();
    const Date = data.payload.child(`Date`).val();
    const Time = data.payload.child(`Time`).val();
    const Price = data.payload.child(`Price`).val();
    const Ticket = data.payload.child(`Ticket`).val();
    const Venue = data.payload.child( `Venue`).val();
    const eIV = data.payload.child(`eIV`).val();
    const eKey = data.payload.child(`eKey`).val();
    console.log(Card);
    await this.aes  
    .decrypt(eKey, eIV, Card)
    .then(acc => this.plainTextCard = acc)
    .catch((error: any) => console.log(error));
    var ticketObject = {
    Artist: Artist,
    Card: this.plainTextCard.substr(15),
    Date: Date,
    Time: Time,
    Price: Price,
    Ticket: Ticket,
    Venue: Venue,
    }
    this.items.push(ticketObject)
    console.log(this.items);
    })
    i++;
    }
  });
} 
}

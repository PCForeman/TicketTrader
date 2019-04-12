webpackJsonp([19],{

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPageModule", function() { return OrderHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_history__ = __webpack_require__(541);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderHistoryPageModule = /** @class */ (function () {
    function OrderHistoryPageModule() {
    }
    OrderHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__order_history__["a" /* OrderHistoryPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_history__["a" /* OrderHistoryPage */])]
        })
    ], OrderHistoryPageModule);
    return OrderHistoryPageModule;
}());

//# sourceMappingURL=order-history.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderHistoryPage = /** @class */ (function () {
    function OrderHistoryPage(navCtrl, afAuth, afDatabase, toast, navParams) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.toast = toast;
        this.navParams = navParams;
        this.items = [];
        this.kA = [];
        this.items2 = [];
        this.itemSearch = [];
    }
    OrderHistoryPage.prototype.ionViewDidLoad = function () {
        this.retrieveLiveListings();
    };
    OrderHistoryPage.prototype.remove = function () {
        var _this = this;
        var temp = [];
        var target = event.srcElement;
        var ticketClicked = parseInt(target.parentElement.parentElement.children.item(0).innerHTML.valueOf()) - 1;
        console.log(ticketClicked);
        temp.push(this.items[ticketClicked]);
        console.log(temp);
        temp.filter(function (v) {
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
            _this.afDatabase.list("approvedTickets/" + tempArray[0].Key).remove();
            _this.toast
                .create({
                message: "Ticket" +
                    " " +
                    tempArray[0].Key +
                    " " +
                    "has been removed from active listings",
                position: "middle",
                duration: 2000
            })
                .present();
            _this.navCtrl.setRoot("HomePage");
            _this.refresh();
        });
    };
    OrderHistoryPage.prototype.refresh = function () {
        window.location.reload();
    };
    OrderHistoryPage.prototype.retrieveLiveListings = function () {
        var _this = this;
        var currentUser = this.afAuth.auth.currentUser.uid;
        var ref = this.afDatabase.object("approvedTickets/");
        ref.snapshotChanges().subscribe(function (snapshot) {
            var allData = snapshot.payload.val();
            var array = [];
            array.push(allData);
            var value = Object.keys(allData);
            var keyArray = [];
            keyArray.push(value);
            for (var i = 0; i < value.length; i++) {
                var x = 0;
                var count = 0;
                var selectedIndex = i;
                var keyValue = value[selectedIndex];
                var indexSelecta = value.length - value.length + i;
                var id = value[indexSelecta];
                _this.kA.push(id);
                var ref = _this.afDatabase.object("approvedTickets/" + keyValue);
                ref.snapshotChanges().subscribe(function (snapshot) {
                    var eventSellerUID = snapshot.payload.child("Seller").val();
                    if (eventSellerUID == currentUser) {
                        var finalKey = _this.kA[_this.kA.length - _this.kA.length + x];
                        var eventName = snapshot.payload.child("Name").val();
                        var eventPrice = snapshot.payload.child("Price").val();
                        var eventVenue = snapshot.payload.child("Venue").val();
                        var eventDate = snapshot.payload.child("Date").val();
                        var eventTime = snapshot.payload.child("Time").val();
                        var eventCreationDate = snapshot.payload.child("Creation").val();
                        var eventCustomerPayout = snapshot.payload.child("Payout").val();
                        var eventServiceCharge = snapshot.payload.child("Charge").val();
                        _this.items.push({
                            Key: finalKey,
                            Name: eventName,
                            Venue: eventVenue,
                            Price: eventPrice,
                            Date: eventDate,
                            Time: eventTime,
                            Creation: eventCreationDate,
                            Seller: eventSellerUID,
                            Payout: eventCustomerPayout,
                            Charge: eventServiceCharge
                        });
                        x++;
                        count + 1;
                    }
                });
            }
        });
    };
    OrderHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-order-history",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\order-history\order-history.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button\n        id="info"\n        ion-button\n        icon-only\n        color="light"\n        (click)="ticketTradeInfo()"\n      >\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n      <button id="logout" ion-button icon-only color="light" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons left>\n      <button ion-button icon-only color="light" (click)="orderHistory()">\n        <ion-icon name="clipboard"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title position text-center>Tickets</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-searchbar\n    [showCancelButton]="ShowCancel"\n    (ionInput)="getItems($event)"\n    (ionCancel)="onCancel()"\n    (ionClear)="initializeItems()"\n  >\n  </ion-searchbar>\n  <ion-title position text-center>My Active Listings</ion-title>\n  <ion-list>\n    <div\n      class="ngDiv"\n      [id]="i"\n      ion-item\n      *ngFor="let item of items; let i = index"\n    >\n      <h1 hidden>{{ i + 1 }}</h1>\n      <h2 position text-center>{{ item.Name }}</h2>\n      <h3 position text-center>Venue: {{ item.Venue }}</h3>\n      <h4 position text-center>Price: £{{ item.Price }}</h4>\n      <h5 position text-center>Date: {{ item.Date }}</h5>\n      <h6 position text-center>Time: {{ item.Time }}</h6>\n      <button\n        [id]="i"\n        class="modalButton"\n        ion-button\n        block\n        (click)="remove(index)"\n      >\n        Remove Listing\n      </button>\n      <h6></h6>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\order-history\order-history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OrderHistoryPage);
    return OrderHistoryPage;
}());

//# sourceMappingURL=order-history.js.map

/***/ })

});
//# sourceMappingURL=19.js.map
webpackJsonp([0],{

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsPageModule", function() { return TicketsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tickets__ = __webpack_require__(543);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TicketsPageModule = /** @class */ (function () {
    function TicketsPageModule() {
    }
    TicketsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tickets__["a" /* TicketsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tickets__["a" /* TicketsPage */])]
        })
    ], TicketsPageModule);
    return TicketsPageModule;
}());

//# sourceMappingURL=tickets.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TicketsPage = /** @class */ (function () {
    function TicketsPage(afAuth, afDatabase, toast, app, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.toast = toast;
        this.app = app;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [];
        this.kA = [];
        this.searchTerm = "";
        this.itemSearch = [];
        this.items2 = [];
    }
    TicketsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad TicketsPage");
        this.displayTickets();
        this.copyItems();
    };
    TicketsPage.prototype.initializeItems = function () {
        this.itemSearch = this.items;
    };
    TicketsPage.prototype.copyItems = function () {
        this.items2 = this.items;
    };
    TicketsPage.prototype.onCancel = function () {
        this.itemSearch = this.items2;
    };
    TicketsPage.prototype.getItems = function (searchbar) {
        var _this = this;
        // Reset items back to all of the items
        this.initializeItems();
        console.log(this.itemSearch);
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        console.log(q);
        // if the value is an empty string don't filter the items
        if (q == undefined || q == "") {
            this.items = this.items2;
            this.items.splice(this.items.length - 1);
            console.log(this.items);
        }
        else {
            this.itemSearch = this.itemSearch.filter(function (v) {
                if (v.Name && q) {
                    if (v.Name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                        _this.items = _this.itemSearch;
                        return true;
                    }
                    return false;
                }
            });
            console.log(q, this.itemSearch.length, this.itemSearch);
            this.items.push(this.itemSearch);
            this.reloadData();
        }
    };
    TicketsPage.prototype.checkOut = function () {
        this.navCtrl.push("BuyPage");
    };
    TicketsPage.prototype.orderHistory = function () {
        this.navCtrl.push("OrderHistoryPage");
    };
    TicketsPage.prototype.buy = function () {
        var _this = this;
        var timeClicked = Date.now();
        var checkOutBy = timeClicked + 600000;
        console.log(timeClicked);
        var userId = this.afAuth.auth.currentUser.uid;
        var temp = [];
        var target = event.srcElement;
        var ticketClicked = parseInt(target.parentElement.parentElement.children.item(0).innerHTML.valueOf()) - 1;
        var checkId = target.parentElement.parentElement.children
            .item(1)
            .innerHTML.valueOf();
        if (userId == checkId) {
            this.toast
                .create({
                message: "This is your listing.",
                duration: 2000,
                position: "Middle"
            })
                .present();
        }
        else if (userId != checkId) {
            temp.push(this.items[ticketClicked]);
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
                        Charge: v.Charge,
                        checkOutTime: timeClicked,
                        reservationPerioid: checkOutBy
                    }
                ];
                var checkOutRef = _this.afAuth.auth.currentUser.uid;
                _this.afDatabase
                    .list("ticketsInBasket/" + checkOutRef)
                    .push(tempArray[0]);
                _this.afDatabase.list("approvedTickets/" + tempArray[0].Key).remove();
                _this.refresh();
            });
        }
    };
    TicketsPage.prototype.refresh = function () {
        window.location.reload();
    };
    TicketsPage.prototype.reloadData = function () {
        this.items = this.itemSearch;
    };
    TicketsPage.prototype.displayTickets = function () {
        var _this = this;
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
                var selectedIndex = i;
                var keyValue = value[selectedIndex];
                var indexSelecta = value.length - value.length + i;
                var id = value[indexSelecta];
                _this.kA.push(id);
                var ref = _this.afDatabase.object("approvedTickets/" + keyValue);
                ref.snapshotChanges().subscribe(function (snapshot) {
                    var finalKey = _this.kA[_this.kA.length - _this.kA.length + x];
                    console.log(finalKey);
                    var eventName = snapshot.payload.child("Name").val();
                    var eventPrice = snapshot.payload.child("Price").val();
                    var eventVenue = snapshot.payload.child("Venue").val();
                    var eventDate = snapshot.payload.child("Date").val();
                    var eventTime = snapshot.payload.child("Time").val();
                    var eventCreationDate = snapshot.payload.child("Creation").val();
                    var eventSellerUID = snapshot.payload.child("Seller").val();
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
                });
            }
        });
    };
    TicketsPage.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.toast
                .create({
                message: "Signed out",
                position: "middle",
                duration: 3500
            })
                .present();
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        });
    };
    TicketsPage.prototype.navMakeListing = function () {
        this.navCtrl.setRoot("MakeListingPage");
    };
    TicketsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-tickets",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\tickets\tickets.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button\n        id="info"\n        ion-button\n        icon-only\n        color="light"\n        (click)="ticketTradeInfo()"\n      >\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n      <button id="logout" ion-button icon-only color="light" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons left>\n      <button ion-button icon-only color="light" (click)="checkOut()">\n        <ion-icon name="basket"></ion-icon>\n      </button>\n      <button ion-button icon-only color="light" (click)="orderHistory()">\n        <ion-icon name="clipboard"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title position text-center>Buy Tickets</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-searchbar\n    [showCancelButton]="ShowCancel"\n    (ionInput)="getItems($event)"\n    (ionCancel)="onCancel()"\n    (ionClear)="initializeItems()"\n  >\n  </ion-searchbar>\n  <br />\n  <ion-list>\n    <div\n      class="ngDiv"\n      [id]="i"\n      ion-item\n      *ngFor="let item of items; let i = index"\n    >\n      <h1 hidden>{{ i + 1 }}</h1>\n      <h1 hidden>{{ item.Seller }}</h1>\n      <h2 position text-center>{{ item.Name }}</h2>\n      <h3 position text-center>Venue: {{ item.Venue }}</h3>\n      <h4 position text-center>Price: £{{ item.Price }}</h4>\n      <h5 position text-center>Date: {{ item.Date }}</h5>\n      <h6 position text-center>Time: {{ item.Time }}</h6>\n      <button\n        class="modalButton"\n        [id]="i"\n        ion-button\n        block\n        (click)="buy(index)"\n      >\n        Buy ticket\n      </button>\n      <h6></h6>\n    </div>\n  </ion-list>\n  <br />\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\tickets\tickets.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], TicketsPage);
    return TicketsPage;
}());

//# sourceMappingURL=tickets.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
webpackJsonp([7],{

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyPageModule", function() { return BuyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buy__ = __webpack_require__(646);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BuyPageModule = /** @class */ (function () {
    function BuyPageModule() {
    }
    BuyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__buy__["a" /* BuyPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__buy__["a" /* BuyPage */])]
        })
    ], BuyPageModule);
    return BuyPageModule;
}());

//# sourceMappingURL=buy.module.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BuyPage = /** @class */ (function () {
    function BuyPage(navCtrl, afAuth, toast, afDatabase, navParams, modal) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.toast = toast;
        this.afDatabase = afDatabase;
        this.navParams = navParams;
        this.modal = modal;
        this.items = [];
        this.kA = [];
        this.items2 = [];
        this.itemSearch = [];
        this.timedOutListings = [];
    }
    BuyPage.prototype.ionViewDidLoad = function () {
        this.retrieveCheckoutTickets();
        this.checkOutTimer();
    };
    BuyPage.prototype.checkOutTimer = function () {
        var _this = this;
        var currentUser = this.afAuth.auth.currentUser.uid;
        var ref = this.afDatabase.object("ticketsInBasket/" + currentUser);
        ref.snapshotChanges().subscribe(function (snapshot) {
            var allData = snapshot.payload.val();
            var array = [];
            array.push(allData);
            var value = Object.keys(allData);
            var keyArray = [];
            console.log('yes');
            keyArray.push(value);
            for (var i = 0; i < value.length; i++) {
                var x = 0;
                var count = 0;
                var selectedIndex = i;
                var keyValue = value[selectedIndex];
                var indexSelecta = value.length - value.length + i;
                var id = value[indexSelecta];
                _this.kA.push(id);
                var ref = _this.afDatabase.object("ticketsInBasket/" + currentUser + "/" + keyValue);
                ref.snapshotChanges().subscribe(function (snapshot) {
                    var eventSellerUID = snapshot.payload.child("Seller").val();
                    var checkOutTime = snapshot.payload.child("checkOutTime").val();
                    var timeNow = Date.now();
                    var eventName = snapshot.payload.child("Name").val();
                    var eventPrice = snapshot.payload.child("Price").val();
                    var eventVenue = snapshot.payload.child("Venue").val();
                    var eventDate = snapshot.payload.child("Date").val();
                    var eventTime = snapshot.payload.child("Time").val();
                    var eventCreationDate = snapshot.payload.child("Creation").val();
                    var eventCustomerPayout = snapshot.payload.child("Payout").val();
                    var eventServiceCharge = snapshot.payload.child("Charge").val();
                    var lats = snapshot.payload.child("Lat").val();
                    var longs = snapshot.payload.child("Long").val();
                    var payoutAccount = snapshot.payload.child("PayoutAccount").val();
                    var payoutSortCode = snapshot.payload.child("PayoutSortCode").val();
                    var maxTime = checkOutTime + 600000;
                    if (maxTime <= timeNow) {
                        _this.timedOutListings.push({
                            Name: eventName,
                            Venue: eventVenue,
                            Price: eventPrice,
                            Date: eventDate,
                            Time: eventTime,
                            Creation: eventCreationDate,
                            Seller: eventSellerUID,
                            Payout: eventCustomerPayout,
                            Charge: eventServiceCharge,
                            Lat: lats,
                            Long: longs,
                            PayoutAccount: payoutAccount,
                            PayoutSortCode: payoutSortCode
                        });
                        x++;
                        count + 1;
                        _this.afDatabase
                            .list("approvedTickets/")
                            .push(_this.timedOutListings[0]);
                        console.log(_this.timedOutListings[0]);
                        _this.timedOutListings.splice(0, 1);
                        _this.afDatabase
                            .list("ticketsInBasket/" + currentUser + "/" + keyValue)
                            .remove();
                    }
                    else if (maxTime > timeNow) {
                        console.log("Hello");
                    }
                });
            }
        });
    };
    BuyPage.prototype.checkOut = function () {
        var target = event.srcElement;
        var uId = this.afAuth.auth.currentUser.uid;
        var ticketId = target.parentElement.parentElement.children.item(1)
            .innerHTML;
        var sId = target.parentElement.parentElement.children.item(2).innerHTML;
        var sPrice = target.parentElement.parentElement.children
            .item(5)
            .innerHTML.substr(6, 10);
        var sArtist = target.parentElement.parentElement.children
            .item(3)
            .innerHTML.substr(0);
        var sortCode = target.parentElement.parentElement.children
            .item(9)
            .innerHTML.substr(0);
        var long = target.parentElement.parentElement.children
            .item(10)
            .innerHTML.substr(0);
        var lat = target.parentElement.parentElement.children
            .item(11)
            .innerHTML.substr(0);
        var sPayout = target.parentElement.parentElement.children
            .item(12)
            .innerHTML.substr(0);
        var sCharge = target.parentElement.parentElement.children
            .item(13)
            .innerHTML.substr(0);
        var sAccountNo = target.parentElement.parentElement.children
            .item(8)
            .innerHTML.substr(0);
        var sVenue = target.parentElement.parentElement.children
            .item(4)
            .innerHTML.substr(7);
        var sDate = target.parentElement.parentElement.children
            .item(6)
            .innerHTML.substr(6, 10);
        var sTime = target.parentElement.parentElement.children
            .item(7)
            .innerHTML.substr(5);
        var temp = [];
        var ticketClicked = parseInt(target.parentElement.parentElement.children.item(0).innerHTML.valueOf()) - 1;
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
                    Lat: v.Lat,
                    Long: v.Long,
                    Creation: v.Creation,
                    Charge: v.Charge,
                    PayoutAccount: v.PayoutAccount,
                    PayoutSortCode: v.PayoutSortCode
                }
            ];
            console.log(tempArray);
        });
        var myModalOpts = {
            cssClass: "modal",
            enableBackdropDismiss: true,
            showBackdrop: true
        };
        var listingRef = {
            userId: uId,
            ticketRef: ticketId,
            sellerId: sId,
            price: sPrice,
            artist: sArtist,
            date: sDate,
            time: sTime,
            location: sVenue,
            payoutAccount: sAccountNo,
            sortcode: sortCode,
            lat: lat,
            long: long,
            payout: sPayout,
            charge: sCharge
        };
        var myModal = this.modal.create("PaymentModalPage", { ticket: listingRef }, myModalOpts);
        myModal.present();
    };
    BuyPage.prototype.retrieveCheckoutTickets = function () {
        var _this = this;
        var currentUser = this.afAuth.auth.currentUser.uid;
        var ref = this.afDatabase.object("ticketsInBasket/" + currentUser);
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
                var ref = _this.afDatabase.object("ticketsInBasket/" + currentUser + "/" + keyValue);
                ref.snapshotChanges().subscribe(function (snapshot) {
                    var eventSellerUID = snapshot.payload.child("Seller").val();
                    var finalKey = _this.kA[_this.kA.length - _this.kA.length + x];
                    var eventName = snapshot.payload.child("Name").val();
                    var eventPrice = snapshot.payload.child("Price").val();
                    var eventVenue = snapshot.payload.child("Venue").val();
                    var eventDate = snapshot.payload.child("Date").val();
                    var eventTime = snapshot.payload.child("Time").val();
                    var eventCreationDate = snapshot.payload.child("Creation").val();
                    var eventCustomerPayout = snapshot.payload.child("Payout").val();
                    var eventServiceCharge = snapshot.payload.child("Charge").val();
                    var reserved = snapshot.payload.child("checkOutTime").val();
                    var timeLeft = snapshot.payload.child("reservationPerioid").val();
                    var lats = snapshot.payload.child("Lat").val();
                    var longs = snapshot.payload.child("Long").val();
                    var payoutAccount = snapshot.payload.child("PayoutAccount").val();
                    var payoutSortCode = snapshot.payload.child("PayoutSortCode").val();
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
                        Charge: eventServiceCharge,
                        CheckoutPeriod: timeLeft,
                        Lat: lats,
                        Long: longs,
                        PayoutAccount: payoutAccount,
                        PayoutSortCode: payoutSortCode
                    });
                    x++;
                    count + 1;
                });
            }
        });
    };
    BuyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-buy",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\buy\buy.html"*/'<ion-header>\n\n  <ion-navbar color="midnight-blue">\n\n    <ion-buttons right>\n\n      <button\n\n        id="info"\n\n        ion-button\n\n        icon-only\n\n        color="light"\n\n        (click)="ticketTradeInfo()"\n\n      >\n\n        <ion-icon name="information-circle"></ion-icon>\n\n      </button>\n\n      <button id="logout" ion-button icon-only color="light" (click)="logout()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only color="light" (click)="orderHistory()">\n\n        <ion-icon name="clipboard"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-title position text-center>Awaiting payment</ion-title>\n\n  <ion-list>\n\n    <div\n\n      class="ngDiv"\n\n      [id]="i"\n\n      ion-item\n\n      *ngFor="let item of items; let i = index"\n\n    >\n\n      <h1 hidden>{{ i + 1 }}</h1>\n\n      <h1 hidden>{{ item.Key }}</h1>\n\n      <h1 hidden>{{ item.Seller }}</h1>\n\n      <h2 position text-center>{{ item.Name }}</h2>\n\n      <h3 position text-center>Venue: {{ item.Venue }}</h3>\n\n      <h4 position text-center>Price: £{{ item.Price }}</h4>\n\n      <h5 position text-center>Date: {{ item.Date }}</h5>\n\n      <h6 position text-center>Time: {{ item.Time }}</h6>\n\n      <h6 hidden>{{ item.PayoutAccount }}</h6>\n\n      <h6 hidden>{{ item.PayoutSortCode }}</h6>\n\n      <h6 hidden>{{ item.Lat }}</h6>\n\n      <h6 hidden>{{ item.Long }}</h6>\n\n      <h6 hidden>{{ item.Payout }}</h6>\n\n      <h6 hidden>{{ item.Charge }}</h6>\n\n      <button\n\n        class="modalButton"\n\n        [id]="i"\n\n        ion-button\n\n        block\n\n        (click)="checkOut(index)"\n\n      >\n\n        Checkout\n\n      </button>\n\n      <h6></h6>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\buy\buy.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], BuyPage);
    return BuyPage;
}());

//# sourceMappingURL=buy.js.map

/***/ })

});
//# sourceMappingURL=7.js.map
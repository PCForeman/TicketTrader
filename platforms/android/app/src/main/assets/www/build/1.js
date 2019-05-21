webpackJsonp([1],{

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsPageModule", function() { return TicketsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tickets__ = __webpack_require__(658);
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
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tickets__["a" /* TicketsPage */])]
        })
    ], TicketsPageModule);
    return TicketsPageModule;
}());

//# sourceMappingURL=tickets.module.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var TicketsPage = /** @class */ (function () {
    function TicketsPage(afAuth, afDatabase, toast, app, aCtrl, navCtrl, loadingCtrl, navParams) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.toast = toast;
        this.app = app;
        this.aCtrl = aCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.items = [];
        this.kA = [];
        this.searchTerm = "";
        this.itemSearch = [];
        this.items2 = [];
    }
    TicketsPage.prototype.ionViewDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("ionViewDidLoad TicketsPage");
                        return [4 /*yield*/, this.checkIfOutDated()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.displayTickets()];
                    case 2:
                        _a.sent();
                        this.fetchTickets();
                        return [2 /*return*/];
                }
            });
        });
    };
    TicketsPage.prototype.fetchTickets = function () {
        var _this = this;
        setInterval(function () { return _this.displayTickets(); }, 45000);
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
        var term = searchbar.srcElement.value;
        console.log(term);
        // if the value is an empty string don't filter the items
        if (term == undefined || term == "") {
            this.items = this.items2;
            this.items.splice(this.items.length - 1);
            console.log(this.items);
        }
        else {
            this.itemSearch = this.itemSearch.filter(function (v) {
                if (v.Name && term) {
                    if (v.Name.toLowerCase().indexOf(term.toLowerCase()) > -1) {
                        _this.items = _this.itemSearch;
                        return true;
                    }
                    else if (v.Venue && term) {
                        if (v.Venue.toLowerCase().indexOf(term.toLowerCase()) > -1) {
                            _this.items = _this.itemSearch;
                            return true;
                        }
                        else if (v.Date && term) {
                            if (v.Date.toLowerCase().indexOf(term.toLowerCase()) > -1) {
                                _this.items = _this.itemSearch;
                                return true;
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
    };
    TicketsPage.prototype.checkOut = function () {
        this.navCtrl.push("BuyPage");
    };
    TicketsPage.prototype.orderHistory = function () {
        this.navCtrl.push("OrderHistoryPage");
    };
    TicketsPage.prototype.buy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var target, checkId, userId, timeClicked, checkOutBy, temp, ticketClicked;
            return __generator(this, function (_a) {
                this.loadingCtrl
                    .create({
                    spinner: "bubbles",
                    duration: 2500,
                    content: "Securing ticket"
                })
                    .present();
                target = event.srcElement;
                checkId = target.parentElement.parentElement.children.item(2)
                    .innerHTML;
                console.log(checkId);
                userId = this.afAuth.auth.currentUser.uid;
                timeClicked = Date.now();
                if (userId == checkId) {
                    this.toast
                        .create({
                        message: "This is your listing.",
                        duration: 2000,
                        position: "Middle"
                    })
                        .setCssClass("toastCss")
                        .present();
                }
                else {
                    checkOutBy = timeClicked + 600000;
                    temp = [];
                    ticketClicked = parseInt(target.parentElement.parentElement.children
                        .item(0)
                        .innerHTML.valueOf()) - 1;
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
                                reservationPerioid: checkOutBy,
                                Lat: v.Lat,
                                Long: v.Long,
                                PayoutAccount: v.PayoutAccount,
                                PayoutSortCode: v.PayoutSortCode,
                                downloadURL: v.downloadURL,
                                interested: v.interested
                            }
                        ];
                        var checkOutRef = _this.afAuth.auth.currentUser.uid;
                        _this.afDatabase
                            .list("ticketsInBasket/" + checkOutRef)
                            .push(tempArray[0]);
                        _this.afDatabase.list("approvedTickets/" + tempArray[0].Key).remove();
                        _this.navCtrl.push("BuyPage");
                    });
                    this.items = [];
                }
                return [2 /*return*/];
            });
        });
    };
    TicketsPage.prototype.sellerDetails = function () {
        var _this = this;
        var target = event.srcElement;
        var seller = target.parentElement.parentElement.children.item(2)
            .innerHTML;
        this.afDatabase
            .object("user/" + seller)
            .snapshotChanges()
            .subscribe(function (vals) {
            var NoS = vals.payload.child("NumberOfSales").val();
            var Rating = vals.payload.child("Rating").val();
            var RatingScore = (Rating / NoS).toPrecision(3);
            var alert = _this.aCtrl.create({
                title: "Seller",
                mode: "ios",
                message: "Number of sales:" +
                    " " +
                    NoS +
                    "<br>" +
                    "Seller Rating:" +
                    " " +
                    RatingScore +
                    "/5",
                buttons: [
                    {
                        text: "Close",
                        handler: function () { }
                    }
                ]
            });
            alert.present();
        });
    };
    TicketsPage.prototype.checkIfOutDated = function () {
        var _this = this;
        this.loadingCtrl
            .create({ spinner: "bubbles", duration: 2500, content: "Updating list" })
            .present();
        this.items = [];
        var ref = this.afDatabase.object("approvedTickets/");
        ref.snapshotChanges().subscribe(function (snapshot) {
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
                _this.kA.push(id);
                var ref2 = _this.afDatabase.object("approvedTickets/" + keyValue);
                ref2.snapshotChanges().subscribe(function (snapshot) {
                    var date = snapshot.payload.child("Date").val();
                    var Hour = snapshot.payload.child("Time").val();
                    var YYYY = parseInt(date.substr(6));
                    var MM = parseInt(date.substr(3, 3));
                    console.log(MM);
                    var DD = parseInt(date.substr(0, 2));
                    var HH = parseInt(Hour.substr(0));
                    var hoursToMilliSeconds = 3.6e6 * HH;
                    var eventInMilliSeconds = new Date(YYYY, MM - 1, DD).getTime();
                    var removalTime = eventInMilliSeconds + hoursToMilliSeconds;
                    var timeNow = new Date().getTime();
                    console.log(removalTime, timeNow);
                    if (timeNow > removalTime) {
                        _this.afDatabase.database
                            .ref("approvedTickets/" + keyValue)
                            .remove()
                            .then(function (res) {
                            console.log(res, "Removed");
                        })
                            .catch(function (error) {
                            console.log(error);
                        });
                    }
                    else {
                        console.log("Valid.");
                    }
                });
            }
        });
    };
    TicketsPage.prototype.reloadData = function () {
        this.items = this.itemSearch;
    };
    TicketsPage.prototype.displayTickets = function () {
        var _this = this;
        this.items = [];
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
                    var Longs = snapshot.payload.child("Long").val();
                    var Lats = snapshot.payload.child("Lat").val();
                    var payoutAccount = snapshot.payload.child("PayoutAccount").val();
                    var payoutSortCode = snapshot.payload.child("PayoutSortCode").val();
                    var downloadURL = snapshot.payload.child("downloadURL").val();
                    var interested = snapshot.payload.child("interested").val();
                    var itemObj = {
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
                        Long: Longs,
                        Lat: Lats,
                        PayoutAccount: payoutAccount,
                        PayoutSortCode: payoutSortCode,
                        downloadURL: downloadURL,
                        interested: interested
                    };
                    _this.items.push(itemObj);
                    x++;
                });
            }
        });
    };
    TicketsPage.prototype.showInterest = function () {
        var _this = this;
        var target = event.srcElement;
        var iD = target.parentElement.parentElement.children.item(1).innerHTML;
        var ref = this.afDatabase.database
            .ref("/approvedTickets/" + iD + "/interested")
            .transaction(function (interests) {
            if (interests === null) {
                return (interests = 1);
            }
            else {
                return interests + 1;
            }
        })
            .then(function (res) {
            _this.items = [];
            _this.displayTickets();
        })
            .catch(function (error) {
            console.log(error);
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
            _this.app.getRootNav().setRoot("LoginPage");
        });
    };
    TicketsPage.prototype.navMakeListing = function () {
        this.navCtrl.setRoot("MakeListingPage");
    };
    TicketsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-tickets",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\tickets\tickets.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button\n        id="info"\n        ion-button\n        icon-only\n        color="light"\n        (click)="ticketTradeInfo()"\n      >\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n      <button id="logout" ion-button icon-only color="light" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons left>\n      <button ion-button icon-only color="light" (click)="checkOut()">\n        <ion-icon name="basket"></ion-icon>\n      </button>\n      <button ion-button icon-only color="light" (click)="orderHistory()">\n        <ion-icon name="cloud-download"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title position text-center>Buy Tickets</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-searchbar\n    [showCancelButton]="ShowCancel"\n    (ionInput)="getItems($event)"\n    (ionCancel)="onCancel()"\n    (ionClear)="initializeItems()"\n  >\n  </ion-searchbar>\n  <br />\n  <ion-list>\n    <div\n      class="ngDiv"\n      [id]="i"\n      ion-item\n      *ngFor="let item of items; let i = index"\n    >\n      <h1 hidden>{{ i + 1 }}</h1>\n      <h1 hidden>{{ item.Key }}</h1>\n      <h1 hidden>{{ item.Seller }}</h1>\n      <h2 position text-center>{{ item.Name }}</h2>\n      <h3 position text-center>Venue: {{ item.Venue }}</h3>\n      <h4 position text-center>Price: £{{ item.Price }}</h4>\n      <h5 position text-center>Date: {{ item.Date }}</h5>\n      <h6 position text-center>Time: {{ item.Time }}</h6>\n      <button\n        [id]="i"\n        ion-button\n        class="buyTicketButtons"\n        (click)="buy(index)"\n        color="midnight-blue"\n      >\n        Buy ticket\n      </button>\n      <button\n      class="buyTicketButtons"\n      [id]="i"\n      ion-button\n      color="midnight-blue"\n      (click)="sellerDetails()"\n    >\n      Seller Info\n    </button>\n\n    <button\n    [id]="i"\n    class="buyTicketButtons"\n    ion-button\n    icon-only\n    color="midnight-blue"\n    (click)="showInterest()"\n     > <ion-icon name="thumbs-up">{{item.interested}}</ion-icon>\n  </button>\n      <h6></h6>\n    </div>\n  </ion-list>\n  <br />\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\tickets\tickets.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */]])
    ], TicketsPage);
    return TicketsPage;
}());

//# sourceMappingURL=tickets.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
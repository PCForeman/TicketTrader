webpackJsonp([6],{

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPageModule", function() { return OrderHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_history__ = __webpack_require__(651);
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
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_history__["a" /* OrderHistoryPage */])]
        })
    ], OrderHistoryPageModule);
    return OrderHistoryPageModule;
}());

//# sourceMappingURL=order-history.module.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_aes_256__ = __webpack_require__(343);
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





var OrderHistoryPage = /** @class */ (function () {
    function OrderHistoryPage(navCtrl, afAuth, afDatabase, toast, aes, modal, aCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.toast = toast;
        this.aes = aes;
        this.modal = modal;
        this.aCtrl = aCtrl;
        this.navParams = navParams;
        this.items = [];
        this.itemSold = [];
        this.kA = [];
        this.items2 = [];
        this.itemSearch = [];
    }
    OrderHistoryPage.prototype.ionViewDidLoad = function () {
        this.retrieveBoughtListings();
        this.retrieveSoldListings();
        //  this.fetchTickets();
    };
    OrderHistoryPage.prototype.remove = function (currentuser, id) {
        this.afDatabase
            .list("sold/" + currentuser + "/" + id)
            .remove()
            .then(function (res) {
            console.log(res);
        })
            .catch(function (error) {
            console.log(error);
        });
        this.items = [];
        this.retrieveSoldListings;
    };
    OrderHistoryPage.prototype.refresh = function () {
        window.location.reload();
    };
    OrderHistoryPage.prototype.getTime = function () {
        var button = event.srcElement;
        var date = button.parentElement.parentElement.children.item(3).innerHTML;
        var hours = button.parentElement.parentElement.children.item(4).innerHTML;
        var YYYY = parseInt(date.substr(6));
        var MM = parseInt(date.substr(3, 3));
        var DD = parseInt(date.substr(0, 2));
        var HH = parseInt(hours.substr(0, 2));
        var eventInMilliseconds = new Date(YYYY, MM, DD, HH).getTime();
        var removalAllowedTime = eventInMilliseconds + 960000;
        var timeNow = new Date().getTime();
        if (timeNow >= removalAllowedTime) {
            this.removeAlertBought();
        }
        else {
            this.toast.create({ message: 'You will be able to remove this record 24hrs after the event has taken place', duration: 3000, position: 'middle' }).present();
        }
    };
    OrderHistoryPage.prototype.viewTicket = function () {
        return __awaiter(this, void 0, void 0, function () {
            var button, url, myModalOpts, imageToView, myModal;
            return __generator(this, function (_a) {
                button = event.srcElement;
                url = button.parentElement.parentElement.children.item(6).innerHTML;
                console.log(url);
                myModalOpts = {
                    enableBackdropDismiss: true,
                    showBackdrop: false
                };
                imageToView = {
                    url: url
                };
                myModal = this.modal.create("ViewImageModalPage", { image: imageToView }, myModalOpts);
                myModal.present();
                return [2 /*return*/];
            });
        });
    };
    OrderHistoryPage.prototype.retrieveSoldListings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var currentUser, ref;
            return __generator(this, function (_a) {
                currentUser = this.afAuth.auth.currentUser.uid;
                ref = this.afDatabase.object("sold/" + currentUser);
                ref.snapshotChanges().subscribe(function (snapshot) {
                    var allData = snapshot.payload.val();
                    var keyValues = Object.keys(allData);
                    console.log(keyValues);
                    var _loop_1 = function () {
                        var key = keyValues[i].valueOf();
                        _this.afDatabase
                            .object("sold/" + currentUser + "/" + keyValues[i])
                            .snapshotChanges()
                            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var Artist, AccountNo, Date, FundRelease, Price, SortCode, Venue, Status, ticketObject;
                            return __generator(this, function (_a) {
                                console.log(key);
                                Artist = data.payload.child("Artist").val();
                                AccountNo = data.payload.child("AccountNo").val();
                                Date = data.payload.child("Date").val();
                                FundRelease = data.payload.child("FundRelease").val();
                                Price = data.payload.child("Price").val();
                                SortCode = data.payload.child("SortCode").val();
                                Venue = data.payload.child("Venue").val();
                                Status = data.payload.child("Status").val();
                                ticketObject = {
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
                                return [2 /*return*/];
                            });
                        }); });
                        i++;
                    };
                    for (var i = 0; i < keyValues.length;) {
                        _loop_1();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    OrderHistoryPage.prototype.removeAlertSold = function () {
        var _this = this;
        var target = event.srcElement;
        var id = target.parentElement.parentElement.children.item(1).innerHTML;
        var currentUser = this.afAuth.auth.currentUser.uid;
        var alert = this.aCtrl.create({
            title: "Order history",
            mode: "ios",
            message: "Remove this record?",
            buttons: [
                {
                    text: "Yes",
                    handler: function () {
                        _this.remove(currentUser, id);
                    }
                },
                {
                    text: "NO",
                    role: "cancel",
                    handler: function () { }
                }
            ]
        });
        alert.present();
    };
    //fetchTickets() {
    //  setInterval(() => this.retrieveBoughtListings(), 45000);
    //  setInterval(() => this.retrieveSoldListings(), 45000);
    //}
    OrderHistoryPage.prototype.removeBoughtTicket = function (currentUser, id) {
        this.afDatabase.list("bought/" + currentUser + "/" + id).remove;
    };
    OrderHistoryPage.prototype.removeAlertBought = function () {
        var _this = this;
        var target = event.srcElement;
        var id = target.parentElement.parentElement.children.item(1).innerHTML;
        var currentUser = this.afAuth.auth.currentUser.uid;
        var alert = this.aCtrl.create({
            title: "Order history",
            mode: "ios",
            message: "Remove this record?",
            buttons: [
                {
                    text: "Yes",
                    handler: function () {
                        _this.removeBoughtTicket(currentUser, id);
                    }
                },
                {
                    text: "NO",
                    role: "cancel",
                    handler: function () { }
                }
            ]
        });
        alert.present();
    };
    OrderHistoryPage.prototype.paymentDetails = function () {
        var _this = this;
        var target = event.srcElement;
        var id = target.parentElement.parentElement.children.item(1).innerHTML;
        var Account = target.parentElement.parentElement.children.item(6)
            .innerHTML;
        var Sort = target.parentElement.parentElement.children.item(7).innerHTML;
        var currentUser = this.afAuth.auth.currentUser.uid;
        console.log(Date.now() + 960000);
        var ref = this.afDatabase.object("sold/" + currentUser + "/" + id);
        ref.snapshotChanges().subscribe(function (snapshot) {
            var databaseTime = snapshot.payload.child("FundRelease").val();
            var timeNow = Date.now();
            var string = "Complete";
            var alert = _this.aCtrl.create({
                title: "Payment details",
                mode: "ios",
                message: "Payment account:" +
                    " " +
                    Account +
                    "<br>" +
                    "Sortcode:" +
                    " " +
                    Sort,
                buttons: [
                    {
                        text: "Close",
                        handler: function () { }
                    }
                ]
            });
            alert.present();
            if (timeNow > databaseTime) {
                _this.afDatabase
                    .object("sold/" + currentUser + "/" + id)
                    .update({ Status: string })
                    .catch(function (error) {
                    console.log(error);
                });
            }
        });
    };
    OrderHistoryPage.prototype.retrieveBoughtListings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var currentUser, ref;
            return __generator(this, function (_a) {
                currentUser = this.afAuth.auth.currentUser.uid;
                ref = this.afDatabase.object("bought/" + currentUser);
                ref.snapshotChanges().subscribe(function (snapshot) {
                    var allData = snapshot.payload.val();
                    var keyValues = Object.keys(allData);
                    for (var i = 0; i < keyValues.length;) {
                        _this.afDatabase
                            .object("bought/" + currentUser + "/" + keyValues[i])
                            .snapshotChanges()
                            .subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var Artist, Card, Date, Time, Price, Ticket, Venue, eIV, eKey, ticketObject;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        Artist = data.payload.child("Artist").val();
                                        Card = data.payload.child("Card").val();
                                        Date = data.payload.child("Date").val();
                                        Time = data.payload.child("Time").val();
                                        Price = data.payload.child("Price").val();
                                        Ticket = data.payload.child("Ticket").val();
                                        Venue = data.payload.child("Venue").val();
                                        eIV = data.payload.child("eIV").val();
                                        eKey = data.payload.child("eKey").val();
                                        return [4 /*yield*/, this.aes
                                                .decrypt(eKey, eIV, Card)
                                                .then(function (acc) { return (_this.plainTextCard = acc); })
                                                .catch(function (error) { return console.log(error); })];
                                    case 1:
                                        _a.sent();
                                        ticketObject = {
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
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        i++;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    OrderHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-order-history",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\order-history\order-history.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button\n        id="info"\n        ion-button\n        icon-only\n        color="light"\n        (click)="ticketTradeInfo()"\n      >\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n      <button id="logout" ion-button icon-only color="light" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons left>\n      <button ion-button icon-only color="light" (click)="orderHistory()">\n        <ion-icon name="clipboard"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title position text-center>Tickets</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <ion-title position text-center>Purchased Tickets</ion-title>\n  <ion-list>\n    <div\n      class="ngDiv"\n      [id]="i"\n      ion-item\n      *ngFor="let item of items; let i = index"\n    >\n      <h1 hidden>{{ i + 1 }}</h1>\n      <h2 position text-center>{{ item.Artist }}</h2>\n      <h3 position text-center>{{ item.Venue }}</h3>\n      <h4 position text-center>{{ item.Date }}</h4>\n      <h5 position text-center>AT {{ item.Time }}</h5>\n      <h5 position text-center>{{ item.Price }} paid with card ending in {{item.Card}}</h5>\n      <h6 hidden>{{ item.Ticket }}</h6>\n      <button\n        [id]="i"\n        class="adminButtons"\n        ion-button\n        icon-only\n        color="midnight-blue"\n        (click)="feedback()"\n      ><ion-icon name="star"></ion-icon>\n      </button>\n    <button\n    [id]="i"\n    class="adminButtons"\n    ion-button\n    icon-only\n    color="midnight-blue"\n    (click)="viewTicket()"\n  ><ion-icon name="images"></ion-icon>\n  </button>\n  <button\n  [id]="i"\n  class="adminButtons"\n  ion-button\n  icon-only\n  color="midnight-blue"\n  (click)="getTime()"\n><ion-icon name="trash"></ion-icon>\n</button>\n      <h6></h6>\n    </div>\n  </ion-list>\n\n  <ion-title position text-center>Tickets Sold</ion-title>\n  <ion-list>\n    <div\n      class="ngDiv"\n      [id]="i"\n      ion-item\n      *ngFor="let item of itemSold; let i = index"\n    >\n      <h1 hidden>{{ i + 1 }}</h1>\n      <h1 hidden>{{ item.Key }}</h1>\n      <h2 position text-center>{{ item.Artist }}</h2>\n      <h3 position text-center>{{ item.Venue }}</h3>\n      <h4 position text-center>{{ item.Date }}</h4>\n      <h5 position text-center>{{ item.Price }}</h5>\n      <h5 hidden> {{item.AccountNo}} </h5>\n      <h5 hidden> {{ item.SortCode }}</h5>\n      <button\n      [id]="i"\n      id="btnPayout"\n      class="adminButtons"\n      ion-button\n      icon-only\n      color="midnight-blue"\n      (click)="paymentDetails()"\n    ><ion-icon name="cash"></ion-icon>\n    </button>\n    <button\n    [id]="i"\n    class="adminButtons"\n    ion-button\n    color="midnight-blue"\n  >{{item.Status}}\n  </button>\n  <button\n    [id]="i"\n    class="adminButtons"\n    ion-button\n    icon-only\n    (click)="removeAlertSold()"\n    color="midnight-blue"><ion-icon name="trash"></ion-icon>\n  </button>\n      <h6></h6>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\order-history\order-history.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_aes_256__["a" /* AES256 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], OrderHistoryPage);
    return OrderHistoryPage;
}());

//# sourceMappingURL=order-history.js.map

/***/ })

});
//# sourceMappingURL=6.js.map
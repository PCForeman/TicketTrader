webpackJsonp([1],{

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellPageModule", function() { return SellPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sell__ = __webpack_require__(545);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SellPageModule = /** @class */ (function () {
    function SellPageModule() {
    }
    SellPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__sell__["a" /* SellPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sell__["a" /* SellPage */])]
        })
    ], SellPageModule);
    return SellPageModule;
}());

//# sourceMappingURL=sell.module.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_chooser_index__ = __webpack_require__(300);
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







var gListingCreationTime;
var gListingCustomerPayout;
var gListingServiceCharge;
var gLat;
var gLng;
var gVenue;
var SellPage = /** @class */ (function () {
    function SellPage(afAuth, toast, app, chooser, afStorage, fbDatabase, ldCtrl, navCtrl, navParams, modal) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.app = app;
        this.chooser = chooser;
        this.afStorage = afStorage;
        this.fbDatabase = fbDatabase;
        this.ldCtrl = ldCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.listing = {};
    }
    SellPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SellPage");
        this.listingTimestamp();
        this.lockTicketButton();
        this.unlockTicketButton();
        this.lockFileUpload();
        this.lockLocationButton();
    };
    SellPage.prototype.chooseFile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.chooser
                            .getFile("image")
                            .then(function (file) { return console.log(file ? file.name : "canceled"); })
                            .catch(function (error) { return console.error(error); })];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        return [2 /*return*/];
                }
            });
        });
    };
    SellPage.prototype.checkOut = function () {
        this.navCtrl.push("BuyPage");
    };
    SellPage.prototype.storageRef = function () { };
    SellPage.prototype.orderHistory = function () {
        this.navCtrl.push("OrderHistoryPage");
    };
    SellPage.prototype.generateListingId = function () {
        var bit1 = Date.now();
        var bit2 = Math.floor(Math.random() * 99 + 1);
        var randomID = (bit1 + bit2).toString();
    };
    SellPage.prototype.listingTimestamp = function () {
        var Y = new Date().getFullYear().toString();
        var M = new Date().getMonth().toString();
        var D = new Date().getDay().toString();
        var H = new Date().getHours().toString();
        var MM = new Date().getMinutes().toString();
        var recordListingTime = D + "/" + M + "/" + Y + " " + "At" + " " + H + ":" + MM;
        gListingCreationTime = recordListingTime;
    };
    SellPage.prototype.ticketIncomeCalc = function () {
        var userMoney = this.listing.listingPrice;
        var ticketTraderMoney = Number(((userMoney / 100) * 7 + 0.3).toFixed(2));
        console.log(ticketTraderMoney);
        var userFinal = Number(userMoney - ticketTraderMoney).toFixed(2);
        console.log(userFinal);
        if (userMoney >= 0 && userMoney <= 1000) {
            gListingCustomerPayout = userFinal;
            gListingServiceCharge = ticketTraderMoney;
            this.toast
                .create({
                message: "You will recieve £" +
                    userFinal +
                    ", when your ticket has been bought.",
                position: "middle",
                duration: 3500
            })
                .present();
            this.unlockLocationButton();
            this.unlockUploadButton();
        }
        else {
            this.toast
                .create({
                message: "Value not numerical, or exceeds the price limit.",
                position: "middle",
                duration: 3500
            })
                .present();
        }
    };
    SellPage.prototype.logout = function () {
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
    SellPage.prototype.lockFileUpload = function () {
        var disableFileUpload = (document.getElementById("btnUploadTicket"));
        disableFileUpload.disabled = true;
    };
    SellPage.prototype.unlockUploadButton = function () {
        var button = (document.getElementById("btnUploadTicket"));
        button.disabled = false;
    };
    SellPage.prototype.lockTicketButton = function () {
        var disableCreateListing = (document.getElementById("btnCreateListing"));
        disableCreateListing.disabled = true;
    };
    SellPage.prototype.lockLocationButton = function () {
        var disableCreateListing = (document.getElementById("btnLocation"));
        disableCreateListing.disabled = true;
    };
    SellPage.prototype.unlockLocationButton = function () {
        var button = (document.getElementById("btnLocation"));
        button.disabled = false;
    };
    SellPage.prototype.unlockTicketButton = function () {
        document
            .getElementById("btnUploadTicket")
            .addEventListener("click", function () {
            var EnableCreateListing = (document.getElementById("btnCreateListing"));
            EnableCreateListing.disabled = false;
        });
    };
    SellPage.prototype.showSpinner = function () {
        var loading = this.ldCtrl.create({
            content: ""
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 1000);
    };
    SellPage.prototype.createListing = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var artist, startTime, date, p3, p2, p1, rDate, price;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showSpinner()];
                    case 1:
                        _a.sent();
                        artist = this.listing.listingName;
                        artist.toUpperCase();
                        startTime = this.listing.listingTime;
                        date = this.listing.listingDate.toString();
                        p3 = date.slice(0, 4);
                        p2 = date.slice(5, 7);
                        p1 = date.slice(8, 11);
                        rDate = p1 + "/" + p2 + "/" + p3;
                        console.log(rDate);
                        price = this.listing.listingPrice;
                        if (!(artist == "" ||
                            (startTime < 0 && startTime > 24) ||
                            date == null ||
                            price == NaN ||
                            price < 0 ||
                            price > 1000)) return [3 /*break*/, 2];
                        this.toast
                            .create({
                            message: "One or more fields are incorrect, please check them",
                            duration: 3000,
                            position: "bottom"
                        })
                            .present();
                        return [3 /*break*/, 4];
                    case 2:
                        this.generateListingId();
                        return [4 /*yield*/, this.afAuth.authState.take(1).subscribe(function (auth) {
                                _this.listing.listingDate = rDate;
                                _this.listing.listingSellerUID = auth.uid;
                                _this.listing.listingCreationDate = gListingCreationTime;
                                _this.listing.listingServiceCharge = gListingServiceCharge;
                                _this.listing.listingCustomerPayout = gListingCustomerPayout;
                                _this.listing.listingLong = gLng[0];
                                _this.listing.listingLat = gLat[0];
                                _this.listing.listingLocation = gVenue[0];
                                _this.listing.listingSold = false;
                                var ref = _this.fbDatabase
                                    .list("unaprovedTickets/")
                                    .push(_this.listing)
                                    .orderByKey();
                                console.log(ref);
                                _this.toast
                                    .create({
                                    message: "Listing successfully created.",
                                    position: "middle",
                                    duration: 2000
                                })
                                    .present();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                            })];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SellPage.prototype.findVenue = function () {
        var myModalOpts = {
            cssClass: "modal",
            enableBackdropDismiss: true,
            showBackdrop: true
        };
        var myModal = this.modal.create("SelectLocationModalPage", {}, myModalOpts);
        myModal.present();
        myModal.onDidDismiss(function (venueData) {
            console.log(venueData.latData, venueData.lngData, venueData.venueData);
            gLat = venueData.latData;
            gLng = venueData.lngData;
            gVenue = venueData.venueData;
        });
    };
    SellPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-sell",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\sell\sell.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button ion-button icon-only color="light" (click)="ticketTradeInfo()">\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n      <button ion-button icon-only color="light" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons left>\n      <button ion-button icon-only color="light" (click)="checkOut()">\n        <ion-icon name="basket"></ion-icon>\n      </button>\n      <button ion-button icon-only color="light" (click)="orderHistory()">\n        <ion-icon name="clipboard"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title position text-center>Sell Tickets</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div class="ngDivAccount">\n    <ion-list-header text-center>List a ticket</ion-list-header>\n    <ion-item>\n      <ion-label floating>Event</ion-label>\n      <ion-input id="txtEvent" [(ngModel)]="listing.listingName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Start time</ion-label>\n      <ion-input id="txtTime" [(ngModel)]="listing.listingTime"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Date of event</ion-label>\n      <ion-datetime\n        id="listingDate"\n        displayformat="DD/MM/YY"\n        [(ngModel)]="listing.listingDate"\n      ></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Price £</ion-label>\n      <ion-input id="txtPrice" [(ngModel)]="listing.listingPrice"></ion-input>\n      <button\n        ion-button\n        id="btnCheckPrice"\n        icon-only\n        color="light"\n        (click)="ticketIncomeCalc()"\n        item-end\n      >\n        <ion-icon name="checkmark-circle"></ion-icon>\n      </button>\n    </ion-item>\n    <p>\n      <button ion-button id="btnLocation" class="sellButton" block (click)="findVenue()">Find the venue</button>\n      <img *ngIf="image" [src]="image" />\n      <button\n        ion-button\n        id="btnUploadTicket"\n        class="sellButton"\n        block\n        (click)="chooseFile()"\n      >\n        Select Ticket\n      </button>\n      <button\n        ion-button\n        id="btnCreateListing"\n        class="sellButton"\n        block\n        (click)="createListing()"\n      >\n        Create your listing\n      </button>\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\sell\sell.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_chooser_index__["a" /* Chooser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_chooser_index__["a" /* Chooser */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["AngularFireStorage"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["AngularFireStorage"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _k || Object])
    ], SellPage);
    return SellPage;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());

//# sourceMappingURL=sell.js.map

/***/ })

});
//# sourceMappingURL=1.js.map
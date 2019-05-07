webpackJsonp([2],{

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellPageModule", function() { return SellPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sell__ = __webpack_require__(656);
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
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sell__["a" /* SellPage */])]
        })
    ], SellPageModule);
    return SellPageModule;
}());

//# sourceMappingURL=sell.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_aes_256___ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions___ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__);
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
    function SellPage(afAuth, toast, app, afDatabase, ldCtrl, navCtrl, navParams, modal, aCtrl, aes, file, afStorage, filePath, androidPermissions) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.app = app;
        this.afDatabase = afDatabase;
        this.ldCtrl = ldCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.aCtrl = aCtrl;
        this.aes = aes;
        this.file = file;
        this.afStorage = afStorage;
        this.filePath = filePath;
        this.androidPermissions = androidPermissions;
        this.listing = {};
    }
    SellPage.prototype.ionViewDidLoad = function () {
        this.requestPermissions();
        console.log("ionViewDidLoad SellPage");
        this.listingTimestamp();
        this.lockTicketButton();
        this.unlockTicketButton();
        this.lockFileUpload();
        this.lockLocationButton();
        this.autoFillPaymentDetails();
    };
    SellPage.prototype.requestPermissions = function () {
        var _this = this;
        this.androidPermissions
            .checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
            .then(function (status) {
            if (status.hasPermission == true) {
                console.log("You already have permissions");
            }
            else {
                _this.androidPermissions
                    .requestPermissions([
                    _this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE,
                    _this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
                    _this.androidPermissions.PERMISSION.STORAGE
                ])
                    .then(function (status) {
                    if (status.hasPermission)
                        console.log(status.hasPermission);
                });
            }
        });
    };
    SellPage.prototype.selectTicket = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var files;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, window.chooser
                            .getFile()
                            .then(function (uri) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        this.nativepath = uri.uri;
                                        return [4 /*yield*/, this.resolvePath(this.nativepath)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1:
                        files = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SellPage.prototype.resolvePath = function (nativepath) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var path;
            return __generator(this, function (_a) {
                path = this.filePath.resolveNativePath(nativepath).then(function (res) {
                    console.log(_this.nativepath, path);
                    _this.file.resolveLocalFilesystemUrl(res).then(function (entry) {
                        console.log(JSON.stringify(entry));
                        var dirPath = entry.nativeURL;
                        var dirPathSplit = dirPath.split("/");
                        dirPathSplit.pop();
                        dirPath = dirPathSplit.join("/");
                        _this.file.readAsArrayBuffer(dirPath, entry.name).then(function (buffer) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.buffer = buffer;
                                this.entryname = entry.name;
                                console.log(buffer);
                                return [2 /*return*/];
                            });
                        }); });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    SellPage.prototype.upload = function (buffer, name) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var blob;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        blob = new Blob([buffer], { type: "pdf" });
                        console.log(blob);
                        return [4 /*yield*/, this.afStorage
                                .upload("tickets" + name, blob)
                                .then(function (done) { return __awaiter(_this, void 0, void 0, function () {
                                var url;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, done.ref.getDownloadURL()];
                                        case 1:
                                            url = _a.sent();
                                            this.url = url;
                                            return [2 /*return*/];
                                    }
                                });
                            }); })
                                .catch(function (error) { return console.log(error); })];
                    case 1:
                        _a.sent();
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
    SellPage.prototype.listingTimestamp = function () {
        var Y = new Date().getFullYear().toString();
        var M = new Date().getMonth().toString();
        var D = new Date().getDay().toString();
        var H = new Date().getHours().toString();
        var MM = new Date().getMinutes().toString();
        var recordListingTime = D + "/" + M + "/" + Y + " " + "At" + " " + H + ":" + MM;
        gListingCreationTime = recordListingTime;
    };
    SellPage.prototype.downloadTicket = function () { };
    SellPage.prototype.ticketIncomeCalc = function () {
        var userMoney = this.listing.Price;
        var ticketTraderMoney = Number(((userMoney / 100) * 7 + 0.3).toFixed(2));
        this.ttPayoutAmount = ticketTraderMoney;
        console.log(ticketTraderMoney);
        var userFinal = Number(userMoney - ticketTraderMoney).toFixed(2);
        this.payoutAmount = userFinal;
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
        var button = document.getElementById("btnUploadTicket");
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
        var button = document.getElementById("btnLocation");
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
    SellPage.prototype.autoFillPaymentDetails = function () {
        var _this = this;
        var key = this.afAuth.auth.currentUser.uid;
        this.afDatabase
            .object("user/" + key)
            .snapshotChanges()
            .subscribe(function (snapshot) {
            var allData = snapshot.payload.val();
            var value = Object.keys(allData);
            var cardKey = value[0];
            _this.afDatabase
                .object("user/" + key + "/" + cardKey)
                .snapshotChanges()
                .subscribe(function (snapshot) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var accountNo, Sortcode, Key, IV, accNoPlainText, sortCodePlainText, digits, alert;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            accountNo = snapshot.payload.child("AccountNo").val();
                            Sortcode = snapshot.payload.child("Sort").val();
                            Key = snapshot.payload.child("Key").val();
                            IV = snapshot.payload.child("IV").val();
                            return [4 /*yield*/, this.aes
                                    .decrypt(Key, IV, accountNo)
                                    .then(function (acc) { return (accNoPlainText = acc); })
                                    .catch(function (error) { return console.log(error); })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.aes
                                    .decrypt(Key, IV, Sortcode)
                                    .then(function (sort) { return (sortCodePlainText = sort); })
                                    .catch(function (error) { return console.log(error); })];
                        case 2:
                            _a.sent();
                            digits = accNoPlainText.toString().substr(5);
                            alert = this.aCtrl.create({
                                title: "Payment",
                                mode: "ios",
                                message: "Use saved account ending in" +
                                    " " +
                                    "XXXXX-" +
                                    digits +
                                    " " +
                                    "for payment?",
                                buttons: [
                                    {
                                        text: "Proceed",
                                        handler: function () {
                                            console.log("Cancel clicked");
                                            _this.listing.PayoutAccount = accNoPlainText;
                                            _this.listing.PaySortCode = sortCodePlainText;
                                        }
                                    },
                                    {
                                        text: "Dismiss",
                                        role: "cancel",
                                        handler: function () {
                                            console.log("cancelled");
                                        }
                                    }
                                ]
                            });
                            alert.present();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
    };
    SellPage.prototype.createListing = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var artist, startTime, date, p3, p2, p1, rDate, price;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showSpinner();
                        artist = this.listing.Name;
                        artist.toUpperCase();
                        startTime = this.listing.Time;
                        date = this.listing.Date.toString();
                        p3 = date.slice(0, 4);
                        p2 = date.slice(5, 7);
                        p1 = date.slice(8, 11);
                        rDate = p1 + "/" + p2 + "/" + p3;
                        console.log(rDate);
                        price = this.listing.Price;
                        if (!(artist == "" ||
                            (startTime < 0 && startTime > 24) ||
                            date == null ||
                            price == NaN ||
                            price < 0 ||
                            price > 1000)) return [3 /*break*/, 1];
                        this.toast
                            .create({
                            message: "One or more fields are incorrect, please check them",
                            duration: 3000,
                            position: "bottom"
                        })
                            .present();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.upload(this.buffer, this.entryname)];
                    case 2:
                        _a.sent();
                        this.afAuth.authState.take(1).subscribe(function (auth) {
                            _this.listing.Date = rDate;
                            _this.listing.Seller = auth.uid;
                            _this.listing.CreationDate = gListingCreationTime;
                            _this.listing.ServiceCharge = gListingServiceCharge;
                            _this.listing.CustomerPayout = gListingCustomerPayout;
                            _this.listing.Long = gLng[0];
                            _this.listing.Lat = gLat[0];
                            _this.listing.Location = gVenue[0];
                            _this.listing.Sold = false;
                            _this.listing.PaySortCode;
                            _this.listing.PayoutAccount;
                            _this.listing.downloadURL = _this.url;
                            var ref = _this.afDatabase
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
                            _this.clearSellFields();
                            _this.navCtrl.setRoot('Page');
                        });
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SellPage.prototype.clearSellFields = function () {
        this.listing.Name = "";
        this.listing.Date = "";
        this.listing.Time = null;
        this.listing.Price = null;
        this.listing.PaySortCode = "";
        this.listing.PayoutAccount = "";
    };
    SellPage.prototype.createListingConfirmation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                alert = this.aCtrl.create({
                    title: "Create listing",
                    mode: "ios",
                    message: "Your ticket will be added to listings when it has been confirmed as legitimate." +
                        "<br>" +
                        "You will recieve" +
                        " " +
                        "£" +
                        this.payoutAmount +
                        " " +
                        "upon a successful sale of the ticket," +
                        " " +
                        "£" +
                        this.ttPayoutAmount +
                        " " +
                        "will be deducted from the total price as a service charge.",
                    buttons: [
                        {
                            text: "Proceed",
                            handler: function () {
                                _this.createListing(_this.url);
                            }
                        },
                        {
                            text: "Dismiss",
                            role: "cancel",
                            handler: function () {
                                console.log("cancelled");
                            }
                        }
                    ]
                });
                alert.present();
                return [2 /*return*/];
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
            selector: "page-sell",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\sell\sell.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true" color="midnight-blue">\n\n    <ion-buttons right>\n\n      <button ion-button icon-only color="light" (click)="ticketTradeInfo()">\n\n        <ion-icon name="information-circle"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only color="light" (click)="logout()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only color="light" (click)="checkOut()">\n\n        <ion-icon name="basket"></ion-icon>\n\n      </button>\n\n      <button ion-button icon-only color="light" (click)="orderHistory()">\n\n        <ion-icon name="clipboard"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title position text-center>Sell Tickets</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="ngDivAccount">\n\n    <ion-list-header text-center>List a ticket</ion-list-header>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Account number to pay</ion-label>\n\n      <ion-input id="txtTime" [(ngModel)]="listing.PayoutAccount"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Sort code</ion-label>\n\n      <ion-input id="txtTime" [(ngModel)]="listing.PaySortCode"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Artist(s)</ion-label>\n\n      <ion-input id="txtEvent" [(ngModel)]="listing.Name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Start time</ion-label>\n\n      <ion-input id="txtTime" [(ngModel)]="listing.Time"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Date of event</ion-label>\n\n      <ion-datetime\n\n        id="listingDate"\n\n        displayformat="DD/MM/YY"\n\n        [(ngModel)]="listing.Date"\n\n      ></ion-datetime>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Price £</ion-label>\n\n      <ion-input id="txtPrice" [(ngModel)]="listing.Price"></ion-input>\n\n      <button\n\n        ion-button\n\n        id="btnCheckPrice"\n\n        icon-only\n\n        color="light"\n\n        (click)="ticketIncomeCalc()"\n\n        item-end\n\n      >\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n    <p>\n\n      <button\n\n        ion-button\n\n        id="btnLocation"\n\n        class="sellButton"\n\n        block\n\n        (click)="findVenue()"\n\n      >\n\n        Find the venue\n\n      </button>\n\n\n\n\n\n      <button\n\n        ion-button\n\n        id="btnUploadTicket"\n\n        class="sellButton"\n\n        block\n\n        (click)="selectTicket()"\n\n      >\n\n        Select Ticket\n\n      </button>\n\n      <button\n\n        ion-button\n\n        id="btnCreateListing"\n\n        class="sellButton"\n\n        block\n\n        (click)="createListingConfirmation()"\n\n      >\n\n        Create your listing\n\n      </button>\n\n    </p>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\sell\sell.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_aes_256___["a" /* AES256 */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__["AngularFireStorage"],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_permissions___["a" /* AndroidPermissions */]])
    ], SellPage);
    return SellPage;
}());

//# sourceMappingURL=sell.js.map

/***/ })

});
//# sourceMappingURL=2.js.map
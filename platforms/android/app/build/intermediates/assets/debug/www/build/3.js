webpackJsonp([3],{

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModalPageModule", function() { return PaymentModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_modal__ = __webpack_require__(648);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentModalPageModule = /** @class */ (function () {
    function PaymentModalPageModule() {
    }
    PaymentModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__payment_modal__["a" /* PaymentModalPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_modal__["a" /* PaymentModalPage */])]
        })
    ], PaymentModalPageModule);
    return PaymentModalPageModule;
}());

//# sourceMappingURL=payment-modal.module.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_aes_256__ = __webpack_require__(349);
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




var PaymentModalPage = /** @class */ (function () {
    function PaymentModalPage(navParams, aCtrl, vCtrl, afDatabase, aes, toast) {
        this.navParams = navParams;
        this.aCtrl = aCtrl;
        this.vCtrl = vCtrl;
        this.afDatabase = afDatabase;
        this.aes = aes;
        this.toast = toast;
    }
    PaymentModalPage.prototype.ionViewWillLoad = function () {
        var ticket = this.navParams.get("ticket");
        this.listingData = ticket;
        console.log(ticket);
        this.useExistingCard();
    };
    PaymentModalPage.prototype.close = function () {
        this.vCtrl.dismiss();
    };
    PaymentModalPage.prototype.useExistingCard = function () {
        var _this = this;
        var key = this.listingData.userId;
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
                var CardNo, cardExpiry, Holder, Key, IV, cardNoPlainText, cardExpiryPlainText, cardHolderPlainText, CardSubStr, alert;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            CardNo = snapshot.payload.child("Card").val();
                            cardExpiry = snapshot.payload.child("Expiry").val();
                            Holder = snapshot.payload.child("Holder").val();
                            Key = snapshot.payload.child("Key").val();
                            IV = snapshot.payload.child("IV").val();
                            return [4 /*yield*/, this.aes
                                    .decrypt(Key, IV, CardNo)
                                    .then(function (card) { return (cardNoPlainText = card); })
                                    .catch(function (error) { return console.log(error); })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.aes
                                    .decrypt(Key, IV, cardExpiry)
                                    .then(function (exp) { return (cardExpiryPlainText = exp); })
                                    .catch(function (error) { return console.log(error); })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.aes
                                    .decrypt(Key, IV, Holder)
                                    .then(function (holder) { return (cardHolderPlainText = holder); })
                                    .catch(function (error) { return console.log(error); })];
                        case 3:
                            _a.sent();
                            CardSubStr = cardNoPlainText.toString().substr(16);
                            alert = this.aCtrl.create({
                                title: "Payment",
                                message: "Use card ending in" +
                                    " XXXX-X" +
                                    CardSubStr +
                                    " " +
                                    "for payment?",
                                buttons: [
                                    {
                                        text: "NO",
                                        role: "cancel",
                                        handler: function () {
                                            console.log("Cancel clicked");
                                        }
                                    },
                                    {
                                        text: "YES",
                                        handler: function () {
                                            _this.cardName = cardHolderPlainText;
                                            _this.cardNo = cardNoPlainText;
                                            _this.expiry = cardExpiryPlainText;
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
    PaymentModalPage.prototype.processPayment = function () {
        if (this.cardNo.length != 19) {
            this.toast
                .create({
                message: "Card number should be 16 digits",
                duration: 2000,
                position: "middle"
            })
                .present();
        }
        else {
            console.log(this.listingData.userId);
            var transactionRef = [
                {
                    Seller: this.listingData.sellerId,
                    TicketRef: this.listingData.ticketRef,
                    Buyer: this.listingData.userId,
                    Price: this.listingData.price,
                    SellerPayout: this.listingData.payout,
                    ttRevenue: this.listingData.charge,
                    PayeeAccountNo: this.listingData.payoutAccount,
                    Payout: this.listingData.payout
                }
            ];
            var transRefNo = this.afDatabase
                .list("transactions")
                .push(transactionRef[0]).key;
            var buyerRef = [
                {
                    transactionRef: transRefNo,
                    TicketRef: this.listingData.ticketRef,
                    Paid: this.listingData.price,
                    FileUrl: "www.firebase.com"
                }
            ];
            var sellerRef = [
                {
                    Artist: this.listingData.artist,
                    transactionRef: transRefNo,
                    TicketRef: this.listingData.ticketRef,
                    Payout: this.listingData.payout,
                    Status: "Pending"
                }
            ];
            var saleArchive = [
                {
                    Seller: this.listingData.sellerId,
                    Event: this.listingData.artist,
                    Location: this.listingData.location,
                    Long: this.listingData.long,
                    Lat: this.listingData.lat,
                    Time: this.listingData.time,
                    Date: this.listingData.date,
                    Buyer: this.listingData.userId,
                    Price: this.listingData.price,
                    Payout: this.listingData.payout,
                    transactionRef: transRefNo
                }
            ];
            console.log(transactionRef, buyerRef, transRefNo);
            this.afDatabase
                .list("ticketsBought/" + this.listingData.userId)
                .push(buyerRef[0]);
            this.afDatabase
                .list("ticketsSold/" + this.listingData.userId)
                .push(sellerRef[0]);
            this.afDatabase
                .object("saleArchive/" + this.listingData.ticketRef)
                .set(saleArchive[0]);
            // Need to remove the ticket from basket after the data has been sent to the other tables. //
            this.close();
        }
    };
    PaymentModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-payment-modal",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\payment-modal\payment-modal.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button ion-button (click)="close()">Close</button>\n    </ion-buttons>\n    <ion-title position text-center>Pay</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list position text-center>\n    <ion-title>\n      Order Summary\n    </ion-title>\n    {{ listingData.artist }}<br />\n    {{ listingData.location }}<br />\n    {{ listingData.date }} {{ listingData.time }}\n    <div class="ngFor">\n      <ion-item>\n        <ion-label position text-center>Name on card</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder="Enter Cardholders name"\n          [(ngModel)]="cardName"\n          position\n          text-center\n        ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position text-center>16 Digit card number</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder="Enter Card Number"\n          [(ngModel)]="cardNo"\n          position\n          text-center\n        ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position text-center>Expiry date</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder="Enter Expiry"\n          [(ngModel)]="expiry"\n          position\n          text-center\n        ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position text-center>CVC</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder="Enter CVC"\n          [(ngModel)]="CVC"\n          position\n          text-center\n        ></ion-input>\n      </ion-item>\n\n      <button id="modalButton" ion-button (click)="processPayment()">\n        Pay {{ listingData.price }}\n      </button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\payment-modal\payment-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_aes_256__["a" /* AES256 */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], PaymentModalPage);
    return PaymentModalPage;
}());

//# sourceMappingURL=payment-modal.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
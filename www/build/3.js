webpackJsonp([3],{

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModalPageModule", function() { return PaymentModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_modal__ = __webpack_require__(547);
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

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentModalPage = /** @class */ (function () {
    function PaymentModalPage(navParams, aCtrl, vCtrl, afDatabase) {
        this.navParams = navParams;
        this.aCtrl = aCtrl;
        this.vCtrl = vCtrl;
        this.afDatabase = afDatabase;
    }
    PaymentModalPage.prototype.close = function () {
        this.vCtrl.dismiss();
    };
    PaymentModalPage.prototype.useExistingCard = function () {
        var _this = this;
        var key = this.listingData.userId;
        this.afDatabase.object("user/" + key).snapshotChanges().subscribe(function (snapshot) {
            var allData = snapshot.payload.val();
            var value = Object.keys(allData);
            var cardKey = value[0];
            _this.afDatabase.object("user/" + key + "/" + cardKey).snapshotChanges().subscribe(function (snapshot) {
                var CardNo = snapshot.payload.child("Card").val();
                var CVC = snapshot.payload.child("CVC").val();
                var Expiry = snapshot.payload.child("Expiry").val();
                var Holder = snapshot.payload.child("Holder").val();
                var CardSubStr = CardNo.toString().substr(12, 4);
                var expiryString = Expiry.toString().substr(0, 2) + '/' + Expiry.toString().substr(2, 4);
                var cardNoString = CardNo.toString().substr(0, 4) + '-' + CardNo.toString().substr(4, 4) + '-' + CardNo.toString().substr(8, 4) + '-' + CardNo.toString().substr(12, 4);
                var alert = _this.aCtrl.create({
                    title: 'Payment',
                    message: 'Use card ending in' + ' ' + CardSubStr + ' ' + 'for payment?',
                    buttons: [
                        {
                            text: 'NO',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'YES',
                            handler: function () {
                                _this.cardName = Holder;
                                _this.cardNo = cardNoString;
                                _this.expiry = expiryString;
                                _this.CVC = CVC;
                            }
                        }
                    ]
                });
                alert.present();
            });
        });
    };
    PaymentModalPage.prototype.ionViewWillLoad = function () {
        var ticket = this.navParams.get("ticket");
        this.listingData = ticket;
        this.useExistingCard();
    };
    PaymentModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-payment-modal",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\payment-modal\payment-modal.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button ion-button (click)="close()">Close</button>\n    </ion-buttons>\n    <ion-title position text-center>Pay</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list position text-center>\n    <ion-title>\n      Order Summary\n    </ion-title>\n    {{ listingData.artist }}<br />\n    {{ listingData.location }}<br />\n    {{ listingData.date }}<br />\n    {{ listingData.time }}\n    <div class="ngFor">\n      <ion-item>\n        <ion-label position text-center>Name on card</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder="Enter Cardholders name"\n          [(ngModel)]="cardName"\n          position\n          text-center\n        ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position text-center>16 Digit card number</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder="Enter Card Number"\n          [(ngModel)]="cardNo"\n          position\n          text-center\n        ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position text-center>Expiry date</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder="Enter Expiry"\n          [(ngModel)]="expiry"\n          position\n          text-center\n        ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position text-center>CVC</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder="Enter CVC"\n          [(ngModel)]="CVC"\n          position\n          text-center\n        ></ion-input>\n      </ion-item>\n\n      <button id="modalButton" ion-button>Pay {{ listingData.price }}</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\payment-modal\payment-modal.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]) === "function" && _d || Object])
    ], PaymentModalPage);
    return PaymentModalPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=payment-modal.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
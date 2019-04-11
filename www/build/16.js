webpackJsonp([16],{

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModalPageModule", function() { return PaymentModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_modal__ = __webpack_require__(542);
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
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_modal__["a" /* PaymentModalPage */])]
        })
    ], PaymentModalPageModule);
    return PaymentModalPageModule;
}());

//# sourceMappingURL=payment-modal.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PaymentModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentModalPage = /** @class */ (function () {
    function PaymentModalPage(navParams, vCtrl) {
        this.navParams = navParams;
        this.vCtrl = vCtrl;
    }
    PaymentModalPage.prototype.close = function () {
        this.vCtrl.dismiss();
    };
    PaymentModalPage.prototype.ionViewWillLoad = function () {
        var ticket = this.navParams.get("ticket");
        this.listingData = ticket;
        console.log(this.listingData);
    };
    PaymentModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-payment-modal",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\payment-modal\payment-modal.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button ion-button (click)="close()">Close</button>\n    </ion-buttons>\n    <ion-title position text-center>Checkout</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list position text-center>\n    <ion-title>\n      Order Summary\n    </ion-title>\n    {{ listingData.artist }}<br />\n    {{ listingData.date }}<br />Reference number<br />\n    {{ listingData.ticketRef }}\n  </ion-list>\n  <div class="ngFor">\n    <ion-item>\n      <ion-label position text-center>Name on card</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input position text-center></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position text-center>16 Digit card number</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input position text-center></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position text-center>Expiry date</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input id="input" position text-center></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position text-center>CVC</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input position text-center></ion-input>\n    </ion-item>\n\n    <button id="modalButton" ion-button>{{ listingData.price }}</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\payment-modal\payment-modal.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _b || Object])
    ], PaymentModalPage);
    return PaymentModalPage;
    var _a, _b;
}());

//# sourceMappingURL=payment-modal.js.map

/***/ })

});
//# sourceMappingURL=16.js.map
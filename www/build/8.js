webpackJsonp([8],{

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationModalPageModule", function() { return InformationModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__information_modal__ = __webpack_require__(653);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InformationModalPageModule = /** @class */ (function () {
    function InformationModalPageModule() {
    }
    InformationModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__information_modal__["a" /* InformationModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__information_modal__["a" /* InformationModalPage */]),
            ],
        })
    ], InformationModalPageModule);
    return InformationModalPageModule;
}());

//# sourceMappingURL=information-modal.module.js.map

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InformationModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
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
 * Generated class for the InformationModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InformationModalPage = /** @class */ (function () {
    function InformationModalPage(navCtrl, navParams, vCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vCtrl = vCtrl;
    }
    InformationModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InformationModalPage');
        this.displayDate();
    };
    InformationModalPage.prototype.displayDate = function () {
        var year = new Date().getFullYear();
        var month = new Date().getMonth() + 1;
        var day = new Date().getDate();
        var digits = year.toString().substr(2);
        this.date = day + '/' + '0' + month + '/' + digits;
    };
    InformationModalPage.prototype.close = function () {
        this.vCtrl.dismiss();
    };
    InformationModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-information-modal',template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\information-modal\information-modal.html"*/'<ion-header>\n\n  <ion-navbar color="midnight-blue">\n\n      <ion-buttons left>\n\n          <button ion-button>{{ this.date }}</button>\n\n        </ion-buttons>\n\n    <ion-buttons right>\n\n      <button ion-button (click)="close()">Dismiss</button>\n\n    </ion-buttons>\n\n    <ion-title position text-center>Information</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-title text-center>Privacy</ion-title>\n\nAll sensitive data is stored safely and encrypted with AES256 encryption. At any point you can delete your account on the accounts tab and this will remove your details from the system.\n\n<ion-title text-center>Rules</ion-title>\n\nAll listings are subject to a verification process to reduce the chance of ticket scamming, any listings that do not match will be rejected. Anyone caught trying to scam will be banned from TicketTrader indefinitely.\n\n<ion-title text-center>User guide</ion-title>\n\n<ion-icon name="map"> Icon for the home tab.</ion-icon>\n\n<ion-icon name="search"> Icon for the search tab.</ion-icon>\n\n<ion-icon name="cart"> Icon for the sell tab.</ion-icon>\n\n<ion-icon name="cog"> Icon for the account tab.</ion-icon>\n\n<ion-icon name="basket"> Icon for the checkout tab.</ion-icon>\n\n<ion-icon name="cloud-download"> Icon for the Order history tab.</ion-icon>\n\n<ion-icon name="log-out"> Icon to log out of the application.</ion-icon>\n\n</ion-content>\n\n\n\n<div class id="footer">\n\n    <ion-footer>\n\n      <ion-toolbar color="midnight-blue">\n\n        <ion-title position text-center>TicketTrader</ion-title>\n\n      </ion-toolbar>\n\n    </ion-footer>\n\n  </div>'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\information-modal\information-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], InformationModalPage);
    return InformationModalPage;
}());

//# sourceMappingURL=information-modal.js.map

/***/ })

});
//# sourceMappingURL=8.js.map
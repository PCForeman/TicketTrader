webpackJsonp([11],{

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardModalPageModule", function() { return AddCardModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_card_modal__ = __webpack_require__(538);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddCardModalPageModule = /** @class */ (function () {
    function AddCardModalPageModule() {
    }
    AddCardModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_card_modal__["a" /* AddCardModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_card_modal__["a" /* AddCardModalPage */]),
            ],
        })
    ], AddCardModalPageModule);
    return AddCardModalPageModule;
}());

//# sourceMappingURL=add-card-modal.module.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___);
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
 * Generated class for the AddCardModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCardModalPage = /** @class */ (function () {
    function AddCardModalPage(navCtrl, navParams, vCtrl, afDatabase, afAuth, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vCtrl = vCtrl;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.toast = toast;
    }
    AddCardModalPage.prototype.close = function () {
        this.vCtrl.dismiss();
    };
    AddCardModalPage.prototype.addDetails = function () {
        var key = this.afAuth.auth.currentUser.uid;
        if (this.holderName == ' ' && this.cardNo == ' ') {
            this.toast.create({ message: 'One or more fields are empty', duration: 2000, position: 'middle' }).present();
        }
        else if (this.holderName == undefined || this.holderName == ' ' || this.holderName == null) {
            this.toast.create({ message: 'Cardholder cannot be empty.', duration: 2000, position: 'middle' }).present();
        }
        else if (this.cardNo.length != 16) {
            this.toast.create({ message: 'Card number Must be 16 digits.', duration: 2000, position: 'middle' }).present();
        }
        else if (this.sortcode.length != 6) {
            this.toast.create({ message: 'Sortcode Must be 6 digits.', duration: 2000, position: 'middle' }).present();
        }
        else if (this.accountNumber.length != 8) {
            this.toast.create({ message: 'Account number Must be 8 digits.', duration: 2000, position: 'middle' }).present();
        }
        else if (this.Cvc.length != 3) {
            this.toast.create({ message: 'CVC must be 3 digits', duration: 2000, position: 'middle' }).present();
        }
        else if (this.expiry.length != 4) {
            this.toast.create({ message: 'Must be MM/YY', duration: 2000, position: 'middle' }).present();
        }
        else {
            var payment = [{
                    Holder: this.holderName,
                    Card: this.cardNo,
                    Expiry: this.expiry,
                    CVC: this.Cvc,
                    Sort: this.sortcode,
                    AccountNo: this.accountNumber
                }];
            console.log(payment);
            this.afDatabase.list("user/" + key).push(payment[0]);
            this.close();
        }
    };
    AddCardModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AddCardModalPage");
    };
    AddCardModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-add-card-modal",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\add-card-modal\add-card-modal.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button ion-button (click)="close()">Close</button>\n    </ion-buttons>\n    <ion-title position text-center>Add card</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="ngFor">\n    <ion-item>\n      <ion-label position text-center>Cardholder name</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input [(ngModel)]="holderName" placeholder="Enter cardholder name" position text-center></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position text-center>16 Digit card number</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input [(ngModel)]="cardNo" placeholder="Enter card number" position text-center></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position text-center>Expiry date</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input [(ngModel)]="expiry" id="input" placeholder="Enter expiry date" position text-center></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position text-center>CVC</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input [(ngModel)]="Cvc" placeholder="Enter CVC" position text-center></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position text-center>Sort code</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input [(ngModel)]="sortcode" placeholder="Enter Sortcode" position text-center></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position text-center>Account number</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-input [(ngModel)]="accountNumber" placeholder="Enter Account number" position text-center></ion-input>\n    </ion-item>\n\n    <button id="modalButton" (click)="addDetails()" ion-button>Add payment details</button>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\add-card-modal\add-card-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], AddCardModalPage);
    return AddCardModalPage;
}());

//# sourceMappingURL=add-card-modal.js.map

/***/ })

});
//# sourceMappingURL=11.js.map
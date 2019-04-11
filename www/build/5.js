webpackJsonp([5],{

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAccountPageModule", function() { return ModalAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_account__ = __webpack_require__(540);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalAccountPageModule = /** @class */ (function () {
    function ModalAccountPageModule() {
    }
    ModalAccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_account__["a" /* ModalAccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_account__["a" /* ModalAccountPage */]),
            ],
        })
    ], ModalAccountPageModule);
    return ModalAccountPageModule;
}());

//# sourceMappingURL=modal-account.module.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
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
 * Generated class for the ModalAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalAccountPage = /** @class */ (function () {
    function ModalAccountPage(navParams, view, afDatabase, afAuth) {
        this.navParams = navParams;
        this.view = view;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
    }
    ModalAccountPage.prototype.close = function () {
        this.view.dismiss();
    };
    ModalAccountPage.prototype.updateSurname = function () {
        var key = this.afAuth.auth.currentUser.uid;
        var ref = this.afDatabase.object("/user/" + key);
        ref.update({ surname: this.uSurname });
        console.log(ref);
    };
    ModalAccountPage.prototype.updateName = function () {
        var key = this.afAuth.auth.currentUser.uid;
        var ref = this.afDatabase.object("/user/" + key);
        ref.update({ firstname: this.uName });
        console.log(ref);
    };
    ModalAccountPage.prototype.updateAddress = function () {
        var key = this.afAuth.auth.currentUser.uid;
        var ref = this.afDatabase.object("/user/" + key);
        ref.update({ addressL1: this.uAddressL1 });
        console.log(ref);
    };
    ModalAccountPage.prototype.updatePhoneNo = function () {
        var key = this.afAuth.auth.currentUser.uid;
        var ref = this.afDatabase.object("/user/" + key);
        ref.update({ phoneNo: this.uPhoneNo });
        console.log(ref);
    };
    ModalAccountPage.prototype.updatePostCode = function () {
        var key = this.afAuth.auth.currentUser.uid;
        var ref = this.afDatabase.object("/user/" + key);
        ref.update({ addressPC: this.uPC });
        console.log(ref);
    };
    ModalAccountPage.prototype.updatePassword = function () {
        var newPass = this.password.toString();
        console.log(newPass);
        var key = this.afAuth.auth.currentUser.uid;
        var ref = this.afDatabase.object("/user/" + key);
        ref.update({ password: newPass });
        this.afAuth.auth.currentUser.updatePassword(newPass);
    };
    ModalAccountPage.prototype.ionViewWillLoad = function () {
        var ticket = this.navParams.get("ticket");
        this.userD = ticket;
        console.log(this.userD);
    };
    ModalAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modal-account',template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\modal-account\modal-account.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-title>Edit account</ion-title\n    ><ion-buttons end>\n      <button ion-button (click)="close()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="ngFor">\n    <ion-item>\n      <ion-title>Update Name</ion-title><br />\n      <h1 text-center>{{ userD.firstname }}</h1>\n    </ion-item>\n    <ion-item>\n      <ion-label text-center></ion-label>\n      <ion-input [(ngModel)]="this.uName"></ion-input>\n      <button\n        ion-button\n        icon-only\n        color="dark"\n        (click)="updateName()"\n        item-end\n      >\n        <ion-icon name="checkmark-circle"></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-title>Update Surname</ion-title><br />\n      <h1 text-center>{{ userD.surname }}</h1>\n    </ion-item>\n    <ion-item>\n      <ion-label text-center></ion-label>\n      <ion-input [(ngModel)]="this.uSurname"></ion-input>\n      <button\n        ion-button\n        icon-only\n        color="dark"\n        (click)="updateSurname()"\n        item-end\n      >\n        <ion-icon name="checkmark-circle"></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-title>Update Phone No</ion-title><br />\n      <h1 text-center>{{ userD.phonenumber }}</h1>\n    </ion-item>\n    <ion-item>\n      <ion-label text-center></ion-label>\n      <ion-input [(ngModel)]="this.uPhoneNo"></ion-input>\n      <button\n        ion-button\n        icon-only\n        color="dark"\n        (click)="updatePhoneNo()"\n        item-end\n      >\n        <ion-icon name="checkmark-circle"></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-title>Update Address</ion-title><br />\n      <h1 text-center>{{ userD.adress1 }}</h1>\n    </ion-item>\n    <ion-item>\n      <ion-label text-center></ion-label>\n      <ion-input [(ngModel)]="this.uAddressL1"></ion-input>\n      <button\n        ion-button\n        icon-only\n        color="dark"\n        (click)="updateAddress()"\n        item-end\n      >\n        <ion-icon name="checkmark-circle"></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-title>Update Postcode</ion-title><br />\n      <h1 text-center>{{ userD.adress2 }}</h1>\n    </ion-item>\n    <ion-item>\n      <ion-label text-center></ion-label>\n      <ion-input [(ngModel)]="this.uPC"></ion-input>\n      <button\n        ion-button\n        icon-only\n        color="dark"\n        (click)="updatePostCode()"\n        item-end\n      >\n        <ion-icon name="checkmark-circle"></ion-icon>\n      </button>\n    </ion-item>\n\n    <ion-item>\n      <ion-title>Update password</ion-title><br />\n      <h1 text-center>**********</h1>\n    </ion-item>\n    <ion-item>\n      <ion-label text-center></ion-label>\n      <ion-input type="password" [(ngModel)]="this.password"></ion-input>\n      <button\n        ion-button\n        icon-only\n        color="light"\n        (click)="updatePassword()"\n        item-end\n      >\n        <ion-icon name="checkmark-circle"></ion-icon>\n      </button>\n    </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\modal-account\modal-account.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"]) === "function" && _d || Object])
    ], ModalAccountPage);
    return ModalAccountPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=modal-account.js.map

/***/ })

});
//# sourceMappingURL=5.js.map
webpackJsonp([11],{

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(537);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */])]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountPage = /** @class */ (function () {
    function AccountPage(afDatabase, afAuth, toast, app, modal, navCtrl, navParams) {
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.toast = toast;
        this.app = app;
        this.modal = modal;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        this.displayAccountData();
    };
    AccountPage.prototype.openModal = function () {
        var _this = this;
        var currentUser = this.afAuth.auth.currentUser.uid;
        var ref = this.afDatabase.object("user/" + currentUser);
        ref.snapshotChanges().subscribe(function (snapshot) {
            var ad1 = snapshot.payload.child("addressL1/").val().toString();
            var ad2 = snapshot.payload.child("addressPC/").val().toString();
            var dob = snapshot.payload.child("dOb/").val().toString();
            var em = snapshot.payload.child("email/").val().toString();
            var fn = snapshot.payload.child("firstname/").val().toString();
            var pw = snapshot.payload.child("password/").val().toString();
            var pn = snapshot.payload.child("phoneNo/").val().toString();
            var sn = snapshot.payload.child("surname/").val().toString();
            var myModalOpts = {
                cssClass: "modal",
                enableBackdropDismiss: true,
                showBackdrop: true
            };
            var listingRef = {
                adress1: ad1,
                adress2: ad2,
                dOb: dob,
                email: em,
                password: pw,
                firstname: fn,
                phonenumber: pn,
                surname: sn
            };
            var myModal = _this.modal.create("ModalAccountPage", { ticket: listingRef }, myModalOpts);
            myModal.present();
        });
    };
    AccountPage.prototype.getUserPassword = function () {
        var _this = this;
        this.playerPassword = this.afDatabase.object("user/" + this.afAuth.auth.currentUser.uid);
        this.playerPassword.snapshotChanges().subscribe(function (snapshot) {
            var password = snapshot.payload.child("password/").val();
            _this.gPassword = password;
        });
    };
    AccountPage.prototype.updateUserPassword = function () {
        var key = this.afAuth.auth.currentUser.uid;
        this.getUserPassword();
        if (this.currentPassword == this.gPassword &&
            this.newPassword == this.comparePassword) {
            this.afAuth.auth.currentUser.updatePassword(this.newPassword);
            this.afDatabase
                .object("/user/" + key)
                .update({ password: this.newPassword });
            this.passwordChangedMessage();
            this.currentPassword = "";
            this.newPassword = "";
            this.comparePassword = "";
        }
    };
    AccountPage.prototype.checkOut = function () {
        this.navCtrl.push("BuyPage");
    };
    AccountPage.prototype.orderHistory = function () {
        this.navCtrl.push("OrderHistoryPage");
    };
    AccountPage.prototype.passwordValidationMessage = function () {
        this.toast
            .create({
            message: "Please ensure all fields are filled out",
            position: "middle",
            duration: 2000
        })
            .present();
    };
    AccountPage.prototype.passwordChangedMessage = function () {
        this.toast
            .create({
            message: "Password successfully changed",
            position: "middle",
            duration: 2000
        })
            .present();
    };
    AccountPage.prototype.displayAccountData = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.userData = _this.afDatabase
                    .object("user/" + data.uid)
                    .valueChanges();
            }
            else {
                _this.toast
                    .create({
                    message: "Could not find authentication details",
                    position: "middle",
                    duration: 3000
                })
                    .present();
            }
        });
    };
    AccountPage.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.toast
                .create({
                message: "Signed out",
                position: "middle",
                duration: 3500
            })
                .present();
            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        });
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-account",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\account\account.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button ion-button icon-only color="light" (click)="ticketTradeInfo()">\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n      <button ion-button icon-only color="light" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons left>\n      <button ion-button icon-only color="light" (click)="checkOut()">\n        <ion-icon name="basket"></ion-icon>\n      </button>\n      <button ion-button icon-only color="light" (click)="orderHistory()">\n        <ion-icon name="clipboard"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title position text-center>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-content>\n      <div class="ngDivAccount">\n    <ion-item-group>\n      <ion-list-header position text-center color="white">Account Details</ion-list-header>\n      <ion-label position text-center>First name</ion-label>\n      <ion-item position text-center>{{\n        (userData | async)?.firstname\n      }}</ion-item>\n      <ion-label position text-center>Surname</ion-label>\n      <ion-item position text-center>{{\n        (userData | async)?.surname\n      }}</ion-item>\n      <ion-label position text-center>Email Address</ion-label>\n      <ion-item position text-center>{{ (userData | async)?.email }}</ion-item>\n      <ion-label position text-center>Address</ion-label>\n      <ion-item position text-center>{{\n        (userData | async)?.addressL1\n      }}</ion-item>\n      <ion-label position text-center>Postcode</ion-label>\n      <ion-item position text-center>{{\n        (userData | async)?.addressPC\n      }}</ion-item>\n      <ion-label position text-center>Phone Number</ion-label>\n      <ion-item position text-center>{{\n        (userData | async)?.phoneNo\n      }}</ion-item>\n      <ion-label position text-center>Date of birth</ion-label>\n      <ion-item position text-center>{{ (userData | async)?.dOb }}</ion-item>\n      <br />\n    </ion-item-group>\n    <button\n    ion-button\n    id="btnChangePassword"\n    class="modalButton"\n    color="midnight-blue"\n    block\n    (click)="openModal()">\n    Update details\n  </button>\n      </div>\n      </ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=11.js.map
webpackJsonp([13],{

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(645);
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
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */])]
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(121);
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





var AccountPage = /** @class */ (function () {
    function AccountPage(afDatabase, afAuth, toast, app, modal, navCtrl, navParams, aCtrl) {
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.toast = toast;
        this.app = app;
        this.modal = modal;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aCtrl = aCtrl;
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
            var accountData = {
                adress1: ad1,
                adress2: ad2,
                dOb: dob,
                email: em,
                password: pw,
                firstname: fn,
                phonenumber: pn,
                surname: sn
            };
            var myModal = _this.modal.create("ModalAccountPage", { data: accountData }, myModalOpts);
            myModal.present();
        });
    };
    AccountPage.prototype.addCard = function () {
        var myModalOpts = {
            cssClass: "modal",
            enableBackdropDismiss: true,
            showBackdrop: true
        };
        var listingRef = {};
        var myModal = this.modal.create("AddCardModalPage", { ticket: listingRef }, myModalOpts);
        myModal.present();
    };
    AccountPage.prototype.deleteAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var ref;
            return __generator(this, function (_a) {
                ref = this.afDatabase.object("user/" + this.afAuth.auth.currentUser.uid);
                ref.snapshotChanges().subscribe(function (snapshot) {
                    var pw = snapshot.payload.child("password/").val().toString();
                    console.log(pw);
                    var alert = _this.aCtrl.create({
                        title: 'Enter password to delete account',
                        inputs: [
                            {
                                name: 'password',
                                placeholder: 'Password',
                                type: 'password'
                            }
                        ],
                        buttons: [
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function (cancelled) {
                                    console.log('Cancel clicked');
                                }
                            },
                            {
                                text: 'Login',
                                handler: function (data) {
                                    console.log(data);
                                    if (data.password == pw) {
                                        try {
                                            var tempKey = _this.afAuth.auth.currentUser.uid;
                                            console.log(tempKey);
                                            _this.logout();
                                            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                                            _this.afDatabase.object("user/" + tempKey).remove();
                                        }
                                        catch (e) {
                                            console.log(e);
                                        }
                                    }
                                    else {
                                        console.log('Cancelled');
                                        return false;
                                    }
                                }
                            }
                        ]
                    });
                    alert.present();
                });
                return [2 /*return*/];
            });
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
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
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
                return [2 /*return*/];
            });
        });
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-account",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\account\account.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button ion-button icon-only color="light" (click)="ticketTradeInfo()">\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n      <button ion-button icon-only color="light" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons left>\n      <button ion-button icon-only color="light" (click)="checkOut()">\n        <ion-icon name="basket"></ion-icon>\n      </button>\n      <button ion-button icon-only color="light" (click)="orderHistory()">\n        <ion-icon name="clipboard"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title position text-center>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-content>\n    <div class="ngDivAccount">\n      <ion-label position text-center>First name</ion-label>\n      <ion-item position text-center>{{\n        (userData | async)?.firstname\n      }}</ion-item>\n      <ion-label position text-center>Surname</ion-label>\n      <ion-item position text-center>{{\n        (userData | async)?.surname\n      }}</ion-item>\n      <ion-label position text-center>Email Address</ion-label>\n      <ion-item position text-center>{{ (userData | async)?.email }}</ion-item>\n      <ion-label position text-center>Address</ion-label>\n      <ion-item position text-center>{{\n        (userData | async)?.addressL1\n      }}</ion-item>\n      <ion-label position text-center>Postcode</ion-label>\n      <ion-item position text-center>{{\n        (userData | async)?.addressPC\n      }}</ion-item>\n      <ion-label position text-center>Phone Number</ion-label>\n      <ion-item position text-center>{{\n        (userData | async)?.phoneNo\n      }}</ion-item>\n      <ion-label position text-center>Date of birth</ion-label>\n      <ion-item position text-center>{{ (userData | async)?.dOb }}</ion-item>\n      <br />\n      <button\n        ion-button\n        class="sellTicketButtons"\n        icon-only\n        id="btnDeleteAcc"\n        color="midnight-blue"\n        (click)="addCard()"\n      >\n        <ion-icon name="card"></ion-icon>\n      </button>\n      <button\n        ion-button\n        class="sellTicketButtons"\n        icon-only\n        id="btnChangePassword"\n        color="midnight-blue"\n        (click)="openModal()"\n      >\n        <ion-icon name="folder-open"></ion-icon>\n      </button>\n      <button\n        ion-button\n        class="buttonDeleteAccount"\n        color="midnight-blue"\n        id="btnDeleteAcc"\n        block\n        (click)="deleteAccount()"\n      >\n        Delete Account\n      </button>\n    </div>\n  </ion-content>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ })

});
//# sourceMappingURL=13.js.map
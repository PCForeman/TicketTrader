webpackJsonp([6],{

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAccountPageModule", function() { return ModalAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_account__ = __webpack_require__(645);
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
            declarations: [__WEBPACK_IMPORTED_MODULE_2__modal_account__["a" /* ModalAccountPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_account__["a" /* ModalAccountPage */])]
        })
    ], ModalAccountPageModule);
    return ModalAccountPageModule;
}());

//# sourceMappingURL=modal-account.module.js.map

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(43);
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




var ModalAccountPage = /** @class */ (function () {
    function ModalAccountPage(navCtrl, navParams, loader, toast, view, afDatabase, afAuth, Modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loader = loader;
        this.toast = toast;
        this.view = view;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.Modal = Modal;
    }
    ModalAccountPage.prototype.close = function () {
        var index = this.view.index;
        this.view.dismiss(index);
    };
    ModalAccountPage.prototype.backToAccount = function () {
        this.navCtrl.setRoot("AccountPage");
    };
    ModalAccountPage.prototype.showSpinner = function () {
        var loading = this.loader.create({
            content: ""
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    ModalAccountPage.prototype.successMessage = function () {
        this.toast
            .create({
            message: "Successfully updated record.",
            duration: 1000,
            position: "middle"
        })
            .present();
    };
    ModalAccountPage.prototype.emptyStringMessage = function () {
        this.toast
            .create({
            message: "You cannot submit an empty field.",
            duration: 1000,
            position: "middle"
        })
            .present();
    };
    ModalAccountPage.prototype.phoneNoMessage = function () {
        this.toast
            .create({
            message: "Not a valid phone number.",
            duration: 1000,
            position: "middle"
        })
            .present();
    };
    ModalAccountPage.prototype.postCodeMessage = function () {
        this.toast
            .create({
            message: "Not a valid postcode, must be 7 or 8 characters long.",
            duration: 1000,
            position: "middle"
        })
            .present();
    };
    ModalAccountPage.prototype.PasswordTooShortMessage = function () {
        this.toast
            .create({
            message: "New password needs to be 6 or more characters.",
            duration: 1000,
            position: "middle"
        })
            .present();
    };
    ModalAccountPage.prototype.refresh = function () {
        window.location.reload();
    };
    ModalAccountPage.prototype.updateSurname = function () {
        return __awaiter(this, void 0, void 0, function () {
            var key, ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.uSurname == null || this.uSurname == "")) return [3 /*break*/, 1];
                        this.emptyStringMessage();
                        return [3 /*break*/, 4];
                    case 1:
                        this.close();
                        key = this.afAuth.auth.currentUser.uid;
                        ref = this.afDatabase.object("/user/" + key);
                        ref.update({ surname: this.uSurname });
                        return [4 /*yield*/, this.showSpinner()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.successMessage()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ModalAccountPage.prototype.updateName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var key, ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.uName == null || this.uName == "")) return [3 /*break*/, 1];
                        this.emptyStringMessage();
                        return [3 /*break*/, 4];
                    case 1:
                        this.close();
                        key = this.afAuth.auth.currentUser.uid;
                        ref = this.afDatabase.object("/user/" + key);
                        ref.update({ firstname: this.uName });
                        return [4 /*yield*/, this.showSpinner()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.successMessage()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ModalAccountPage.prototype.updateAddress = function () {
        return __awaiter(this, void 0, void 0, function () {
            var key, ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.uAddressL1 == null || this.uAddressL1 == "")) return [3 /*break*/, 1];
                        this.emptyStringMessage();
                        return [3 /*break*/, 4];
                    case 1:
                        this.close();
                        key = this.afAuth.auth.currentUser.uid;
                        ref = this.afDatabase.object("/user/" + key);
                        ref.update({ addressL1: this.uAddressL1 });
                        return [4 /*yield*/, this.showSpinner()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.successMessage()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ModalAccountPage.prototype.updatePhoneNo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var len, key, ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        len = this.uPhoneNo.toString();
                        if (!(len.length < 7 || len.length > 15)) return [3 /*break*/, 1];
                        this.phoneNoMessage();
                        return [3 /*break*/, 4];
                    case 1:
                        this.close();
                        key = this.afAuth.auth.currentUser.uid;
                        ref = this.afDatabase.object("/user/" + key);
                        ref.update({ phoneNo: this.uPhoneNo });
                        return [4 /*yield*/, this.showSpinner()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.successMessage()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ModalAccountPage.prototype.updatePostCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pcLen, key, ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pcLen = this.uPC.toString();
                        console.log(pcLen.length);
                        if (!(pcLen.length == 7 || pcLen.length == 8)) return [3 /*break*/, 3];
                        this.close();
                        key = this.afAuth.auth.currentUser.uid;
                        ref = this.afDatabase.object("/user/" + key);
                        ref.update({ addressPC: this.uPC });
                        return [4 /*yield*/, this.showSpinner()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.successMessage()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.postCodeMessage();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ModalAccountPage.prototype.updatePassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var newPass, key, ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.close();
                        newPass = this.password.toString();
                        if (!(newPass.length < 6)) return [3 /*break*/, 1];
                        this.PasswordTooShortMessage();
                        return [3 /*break*/, 4];
                    case 1:
                        key = this.afAuth.auth.currentUser.uid;
                        ref = this.afDatabase.object("/user/" + key);
                        ref.update({ password: newPass });
                        this.afAuth.auth.currentUser.updatePassword(newPass);
                        return [4 /*yield*/, this.showSpinner()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.successMessage()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ModalAccountPage.prototype.ionViewWillLoad = function () {
        var ticket = this.navParams.get("ticket");
        this.userD = ticket;
        console.log(this.userD);
    };
    ModalAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-modal-account",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\modal-account\modal-account.html"*/'<ion-header>\n\n  <ion-navbar color="midnight-blue">\n\n    <ion-title>Edit account</ion-title\n\n    ><ion-buttons end>\n\n      <button ion-button (click)="close()">Close</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="ngFor">\n\n    <ion-item>\n\n      <ion-title>Update Name</ion-title><br />\n\n      <h1 text-center>{{ userD.firstname }}</h1>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label text-center></ion-label>\n\n      <ion-input [(ngModel)]="this.uName"></ion-input>\n\n      <button ion-button icon-only color="dark" (click)="updateName()" item-end>\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-title>Update Surname</ion-title><br />\n\n      <h1 text-center>{{ userD.surname }}</h1>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label text-center></ion-label>\n\n      <ion-input [(ngModel)]="this.uSurname"></ion-input>\n\n      <button\n\n        ion-button\n\n        icon-only\n\n        color="dark"\n\n        (click)="updateSurname()"\n\n        item-end\n\n      >\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-title>Update Phone No</ion-title><br />\n\n      <h1 text-center>{{ userD.phonenumber }}</h1>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label text-center></ion-label>\n\n      <ion-input [(ngModel)]="this.uPhoneNo"></ion-input>\n\n      <button\n\n        ion-button\n\n        icon-only\n\n        color="dark"\n\n        (click)="updatePhoneNo()"\n\n        item-end\n\n      >\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-title>Update Address</ion-title><br />\n\n      <h1 text-center>{{ userD.adress1 }}</h1>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label text-center></ion-label>\n\n      <ion-input [(ngModel)]="this.uAddressL1"></ion-input>\n\n      <button\n\n        ion-button\n\n        icon-only\n\n        color="dark"\n\n        (click)="updateAddress()"\n\n        item-end\n\n      >\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-title>Update Postcode</ion-title><br />\n\n      <h1 text-center>{{ userD.adress2 }}</h1>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label text-center></ion-label>\n\n      <ion-input [(ngModel)]="this.uPC"></ion-input>\n\n      <button\n\n        ion-button\n\n        icon-only\n\n        color="dark"\n\n        (click)="updatePostCode()"\n\n        item-end\n\n      >\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-title>Update password</ion-title><br />\n\n      <h1 text-center>**********</h1>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label text-center></ion-label>\n\n      <ion-input type="password" [(ngModel)]="this.password"></ion-input>\n\n      <button\n\n        ion-button\n\n        icon-only\n\n        color="light"\n\n        (click)="updatePassword()"\n\n        item-end\n\n      >\n\n        <ion-icon name="checkmark-circle"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\modal-account\modal-account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* ModalController */]])
    ], ModalAccountPage);
    return ModalAccountPage;
}());

//# sourceMappingURL=modal-account.js.map

/***/ })

});
//# sourceMappingURL=6.js.map
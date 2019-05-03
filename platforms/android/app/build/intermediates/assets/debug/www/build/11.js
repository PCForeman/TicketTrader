webpackJsonp([11],{

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardModalPageModule", function() { return AddCardModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_card_modal__ = __webpack_require__(643);
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

/***/ 643:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_aes_256__ = __webpack_require__(343);
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





var AddCardModalPage = /** @class */ (function () {
    function AddCardModalPage(navCtrl, navParams, vCtrl, afDatabase, afAuth, toast, aes) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vCtrl = vCtrl;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.toast = toast;
        this.aes = aes;
        this.generateSecureKeyAndIV();
    }
    AddCardModalPage.prototype.close = function () {
        this.vCtrl.dismiss();
    };
    AddCardModalPage.prototype.addDetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formatExpiry, formatSortCode, formatCardNo, key, eText1, eText2, eText3, eText4, eText5, eText6, payment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        formatExpiry = this.expiry.toString().substr(0, 2) +
                            "/" +
                            this.expiry.toString().substr(2);
                        formatSortCode = this.sortcode.toString().substr(0, 2) +
                            "-" +
                            this.sortcode.toString().substr(2, 2) +
                            "-" +
                            this.sortcode.toString().substr(4, 2);
                        formatCardNo = this.cardNo.toString().substr(0, 4) +
                            "-" +
                            this.cardNo.toString().substr(4, 4) +
                            "-" +
                            this.cardNo.toString().substr(8, 4) +
                            "-" +
                            this.cardNo.toString().substr(12, 4);
                        console.log(formatSortCode, formatExpiry);
                        this.sortcode = formatSortCode;
                        this.expiry = formatExpiry;
                        this.cardNo = formatCardNo;
                        key = this.afAuth.auth.currentUser.uid;
                        if (!(this.holderName == " " && this.cardNo == " ")) return [3 /*break*/, 1];
                        this.toast
                            .create({
                            message: "One or more fields are empty",
                            duration: 2000,
                            position: "middle"
                        })
                            .present();
                        return [3 /*break*/, 14];
                    case 1:
                        if (!(this.holderName == undefined ||
                            this.holderName == " " ||
                            this.holderName == null)) return [3 /*break*/, 2];
                        this.toast
                            .create({
                            message: "Cardholder cannot be empty.",
                            duration: 2000,
                            position: "middle"
                        })
                            .present();
                        return [3 /*break*/, 14];
                    case 2:
                        if (!(formatCardNo.length != 19)) return [3 /*break*/, 3];
                        this.toast
                            .create({
                            message: "Card number Must be 16 digits.",
                            duration: 2000,
                            position: "middle"
                        })
                            .present();
                        return [3 /*break*/, 14];
                    case 3:
                        if (!(this.sortcode.length != 8)) return [3 /*break*/, 4];
                        this.toast
                            .create({
                            message: "Sortcode Must be 6 digits.",
                            duration: 2000,
                            position: "middle"
                        })
                            .present();
                        return [3 /*break*/, 14];
                    case 4:
                        if (!(this.accountNumber.length != 8)) return [3 /*break*/, 5];
                        this.toast
                            .create({
                            message: "Account number Must be 8 digits.",
                            duration: 2000,
                            position: "middle"
                        })
                            .present();
                        return [3 /*break*/, 14];
                    case 5:
                        if (!(this.Cvc.length != 3)) return [3 /*break*/, 6];
                        this.toast
                            .create({
                            message: "CVC must be 3 digits",
                            duration: 2000,
                            position: "middle"
                        })
                            .present();
                        return [3 /*break*/, 14];
                    case 6:
                        if (!(this.expiry.length != 5)) return [3 /*break*/, 7];
                        this.toast
                            .create({
                            message: "Must be MM/YY",
                            duration: 2000,
                            position: "middle"
                        })
                            .present();
                        return [3 /*break*/, 14];
                    case 7:
                        console.log(this.secureKey, this.secureIV);
                        return [4 /*yield*/, this.aes
                                .encrypt(this.secureKey, this.secureIV, this.cardNo)
                                .then(function (promise) { return (eText1 = promise.valueOf()); })
                                .catch(function (error) { return console.error(error); })];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.aes
                                .encrypt(this.secureKey, this.secureIV, this.accountNumber)
                                .then(function (promise) { return (eText2 = promise.valueOf()); })];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.aes
                                .encrypt(this.secureKey, this.secureIV, this.holderName)
                                .then(function (promise) { return (eText4 = promise.valueOf()); })];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.aes
                                .encrypt(this.secureKey, this.secureIV, this.Cvc)
                                .then(function (promise) { return (eText5 = promise.valueOf()); })];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.aes
                                .encrypt(this.secureKey, this.secureIV, this.expiry)
                                .then(function (promise) { return (eText6 = promise.valueOf()); })
                                .catch(function (error) { return console.error(error); })];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, this.aes
                                .encrypt(this.secureKey, this.secureIV, this.sortcode)
                                .then(function (promise) { return (eText3 = promise.valueOf()); })
                                .catch(function (error) { return console.error(error); })];
                    case 13:
                        _a.sent();
                        payment = [
                            {
                                Holder: eText4,
                                Card: eText1,
                                Expiry: eText6,
                                CVC: eText5,
                                Sort: eText3,
                                AccountNo: eText2,
                                Key: this.secureKey,
                                IV: this.secureIV
                            }
                        ];
                        console.log(payment);
                        this.afDatabase.list("user/" + key).push(payment[0]);
                        this.close();
                        _a.label = 14;
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    AddCardModalPage.prototype.generateSecureKeyAndIV = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.aes.generateSecureKey("pook")];
                    case 1:
                        _a.secureKey = _c.sent(); // Returns a 32 bytes string
                        _b = this;
                        return [4 /*yield*/, this.aes.generateSecureIV("pook")];
                    case 2:
                        _b.secureIV = _c.sent(); // Returns a 16 bytes string
                        return [2 /*return*/];
                }
            });
        });
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
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_aes_256__["a" /* AES256 */]])
    ], AddCardModalPage);
    return AddCardModalPage;
}());

//# sourceMappingURL=add-card-modal.js.map

/***/ })

});
//# sourceMappingURL=11.js.map
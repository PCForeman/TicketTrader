webpackJsonp([14],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
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




var RegisterPage = /** @class */ (function () {
    function RegisterPage(afAuth, afDatabase, ldCtrl, navCtrl, navParams, toast) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.ldCtrl = ldCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.user = {};
    }
    RegisterPage.prototype.rRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var vfirstname, vSurname, vEmail, vAdress1, vPassword, vPostCode, vPCL, vMobile, mobileLen, vDoB, result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showSpinner()];
                    case 1:
                        _a.sent();
                        vfirstname = this.user.firstname;
                        vSurname = this.user.surname;
                        vEmail = this.user.email;
                        vAdress1 = this.user.addressL1;
                        vPassword = this.user.password;
                        vPostCode = this.user.addressPC;
                        vPCL = vPostCode.length;
                        vMobile = this.user.phoneNo;
                        mobileLen = vMobile.length;
                        vDoB = this.user.dOb;
                        if (!(vfirstname == "" ||
                            vfirstname == null ||
                            vPassword == "" ||
                            vPassword == null ||
                            vSurname == "" ||
                            vSurname == null ||
                            vEmail == "" ||
                            vEmail == null ||
                            vAdress1 == "" ||
                            vAdress1 == null ||
                            vPostCode == "" ||
                            vPCL != 8 ||
                            vPostCode == null ||
                            vMobile == "" ||
                            vMobile == null ||
                            mobileLen < 9 ||
                            mobileLen > 10 ||
                            vDoB == null)) return [3 /*break*/, 2];
                        this.toast
                            .create({
                            message: "One or more fields are incorrect, please check them",
                            duration: 3000,
                            position: "bottom"
                        })
                            .present();
                        return [3 /*break*/, 5];
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)];
                    case 3:
                        result = _a.sent();
                        console.log(result);
                        this.afAuth.authState.take(1).subscribe(function (auth) {
                            _this.afDatabase.object("user/" + auth.uid).set(_this.user);
                        });
                        this.toast
                            .create({
                            message: "Registration successful",
                            position: "middle",
                            duration: 3000
                        })
                            .present();
                        this.navCtrl.setRoot("LoginPage");
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.rLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showSpinner()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.setRoot("LoginPage")];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.showSpinner = function () {
        var loading = this.ldCtrl.create({
            content: ""
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 50);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-register",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\register\register.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-title position text-center>Register</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Enter a valid email address</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Enter a password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>First name</ion-label>\n    <ion-input [(ngModel)]="user.firstname"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Surname</ion-label>\n    <ion-input [(ngModel)]="user.surname"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>House number and road name</ion-label>\n    <ion-input [(ngModel)]="user.addressL1"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Postcode</ion-label>\n    <ion-input [(ngModel)]="user.addressPC"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Mobile Number</ion-label>\n    <ion-input [(ngModel)]="user.phoneNo"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Date of birth</ion-label>\n    <ion-datetime\n      displayformat="DD/MM/YY"\n      [(ngModel)]="user.dOb"\n    ></ion-datetime>\n  </ion-item>\n\n  <button class="registerButton" ion-button block (click)="rRegister(user)">\n    Register\n  </button>\n  <button class="registerButton" ion-button block (click)="rLogin()">\n    Already registered?\n  </button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		523,
		11
	],
	"../pages/admin-view/admin-view.module": [
		524,
		10
	],
	"../pages/admin/admin.module": [
		525,
		13
	],
	"../pages/admin2/admin2.module": [
		526,
		9
	],
	"../pages/admin3/admin3.module": [
		527,
		8
	],
	"../pages/buy/buy.module": [
		528,
		7
	],
	"../pages/home/home.module": [
		257
	],
	"../pages/login/login.module": [
		256
	],
	"../pages/modal-account/modal-account.module": [
		529,
		6
	],
	"../pages/order-history/order-history.module": [
		530,
		5
	],
	"../pages/page/page.module": [
		531,
		4
	],
	"../pages/payment-modal/payment-modal.module": [
		532,
		3
	],
	"../pages/register/register.module": [
		533,
		12
	],
	"../pages/select-location-modal/select-location-modal.module": [
		534,
		2
	],
	"../pages/sell/sell.module": [
		535,
		1
	],
	"../pages/tickets/tickets.module": [
		536,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 255;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */])]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */])]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
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




var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, navParams, afAuth, ldCtrl, fbDatabase, toast, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.ldCtrl = ldCtrl;
        this.fbDatabase = fbDatabase;
        this.toast = toast;
        this.app = app;
        this.items = [];
        this.kA = [];
        this.itemSearch = [];
        this.items2 = [];
        this.refreshTickets = [];
    }
    AdminPage.prototype.ionViewDidLoad = function () {
        this.retrieveUnaprovedTickets();
        this.copyItems();
    };
    AdminPage.prototype.refresh = function () {
        window.location.reload();
    };
    AdminPage.prototype.initializeItems = function () {
        this.itemSearch = this.items;
    };
    AdminPage.prototype.copyItems = function () {
        this.items2.push(this.items);
    };
    AdminPage.prototype.onCancel = function () {
        this.itemSearch = this.items2;
    };
    AdminPage.prototype.getItems = function (searchbar) {
        var _this = this;
        // Reset items back to all of the items
        this.initializeItems();
        console.log(this.itemSearch);
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        console.log(q);
        // if the value is an empty string don't filter the items
        if (q == undefined || q == "") {
            this.items = this.items2;
            this.items.splice(this.items.length - 1);
            console.log(this.items);
        }
        else {
            this.itemSearch = this.itemSearch.filter(function (v) {
                if (v.Key && q) {
                    if (v.Key.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                        _this.items = _this.itemSearch;
                        return true;
                    }
                    return false;
                }
            });
            console.log(q, this.itemSearch.length, this.itemSearch);
            this.items.push(this.itemSearch);
            this.reloadData();
        }
    };
    AdminPage.prototype.reloadData = function () {
        this.items = this.itemSearch;
    };
    AdminPage.prototype.retrieveUnaprovedTickets = function () {
        var _this = this;
        var ref = this.fbDatabase.object("unaprovedTickets/");
        ref.snapshotChanges().subscribe(function (snapshot) {
            var allData = snapshot.payload.val();
            var array = [];
            array.push(allData);
            var value = Object.keys(allData);
            var keyArray = [];
            keyArray.push(value);
            for (var i = 0; i < value.length; i++) {
                var x = 0;
                var selectedIndex = i;
                var keyValue = value[selectedIndex];
                var indexSelecta = value.length - value.length + i;
                var id = value[indexSelecta];
                _this.kA.push(id);
                var ref = _this.fbDatabase.object("unaprovedTickets/" + keyValue);
                ref.snapshotChanges().subscribe(function (snapshot) {
                    var finalKey = _this.kA[_this.kA.length - _this.kA.length + x];
                    var eventName = snapshot.payload.child("listingName").val();
                    var eventPrice = snapshot.payload.child("listingPrice").val();
                    var eventVenue = snapshot.payload.child("listingLocation").val();
                    var eventDate = snapshot.payload.child("listingDate").val();
                    var eventTime = snapshot.payload.child("listingTime").val();
                    var lats = snapshot.payload.child("listingLat").val();
                    var longs = snapshot.payload.child("listingLong").val();
                    var eventCreationDate = snapshot.payload
                        .child("listingCreationDate")
                        .val();
                    var eventSellerUID = snapshot.payload.child("listingSellerUID").val();
                    var eventCustomerPayout = snapshot.payload
                        .child("listingCustomerPayout")
                        .val();
                    var eventServiceCharge = snapshot.payload
                        .child("listingServiceCharge")
                        .val();
                    var listingBoolean = snapshot.payload.child("listingSold").val();
                    _this.items.push({
                        Key: finalKey,
                        Name: eventName,
                        Venue: eventVenue,
                        Price: eventPrice,
                        Date: eventDate,
                        Time: eventTime,
                        Creation: eventCreationDate,
                        Seller: eventSellerUID,
                        Payout: eventCustomerPayout,
                        Charge: eventServiceCharge,
                        Sold: listingBoolean,
                        lat: lats,
                        long: longs
                    });
                    x++;
                });
            }
        });
    };
    AdminPage.prototype.accept = function () {
        var _this = this;
        var temp = [];
        var target = event.srcElement;
        var ticketClicked = parseInt(target.parentElement.parentElement.children.item(0).innerHTML.valueOf()) - 1;
        console.log(ticketClicked);
        temp.push(this.items[ticketClicked]);
        //this.items.splice(ticketClicked);
        temp.filter(function (v) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        temp = [
                            {
                                Key: v.Key,
                                Name: v.Name,
                                Venue: v.Venue,
                                Price: v.Price,
                                Date: v.Date,
                                Seller: v.Seller,
                                Time: v.Time,
                                Payout: v.Payout,
                                Creation: v.Creation,
                                Charge: v.Charge,
                                long: v.long,
                                lat: v.lat
                            }
                        ];
                        this.fbDatabase.list("approvedTickets/").push(temp[0]);
                        this.fbDatabase.list("unaprovedTickets/" + temp[0].Key).remove();
                        return [4 /*yield*/, this.toast
                                .create({
                                message: "Ticket" +
                                    " " +
                                    temp[0].Key +
                                    " " +
                                    "has been approved and moved to active listings",
                                position: "top",
                                duration: 2000
                            })
                                .present()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.showSpinner()];
                    case 2:
                        _a.sent();
                        this.refresh();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AdminPage.prototype.showSpinner = function () {
        var loading = this.ldCtrl.create({
            content: ""
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 1500);
    };
    AdminPage.prototype.reject = function () {
        var _this = this;
        var temp = [];
        var target = event.srcElement;
        var ticketClicked = parseInt(target.parentElement.parentElement.children.item(0).innerHTML.valueOf()) - 1;
        console.log(ticketClicked);
        temp.push(this.items[ticketClicked]);
        //this.items.splice(ticketClicked);
        temp.filter(function (v) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        temp = [
                            {
                                Key: v.Key,
                                Name: v.Name,
                                Venue: v.Venue,
                                Price: v.Price,
                                Date: v.Date,
                                Seller: v.Seller,
                                Time: v.Time,
                                Payout: v.Payout,
                                Creation: v.Creation,
                                Charge: v.Charge
                            }
                        ];
                        this.fbDatabase.list("rejectedTickets/").push(temp[0]);
                        this.fbDatabase.list("unaprovedTickets/" + temp[0].Key).remove();
                        return [4 /*yield*/, this.toast
                                .create({
                                message: "Ticket" +
                                    " " +
                                    temp[0].Key +
                                    " " +
                                    "has been approved and moved to active listings",
                                position: "top",
                                duration: 2000
                            })
                                .present()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.showSpinner()];
                    case 2:
                        _a.sent();
                        this.refresh();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    AdminPage.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.toast
                .create({
                message: "Signed out",
                position: "middle",
                duration: 3500
            })
                .present();
            _this.app.getRootNav().setRoot("LoginPage");
        });
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-admin",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\admin\admin.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button ion-button icon-only color="light" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons left>\n      <button ion-button icon-only color="light" (click)="ticketTradeInfo()">\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title position text-center>Pending listings</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-searchbar\n    [showCancelButton]="ShowCancel"\n    (ionInput)="getItems($event)"\n    (ionCancel)="onCancel()"\n    (ionClear)="initializeItems()"\n  >\n  </ion-searchbar>\n  <ion-list>\n    <div class="ngDivAdmin" [id]="i" ion-item *ngFor="let item of items; let i = index">\n      <h1 hidden>{{ i + 1 }}</h1>\n      <h2 position text-center>{{ item.Key }}</h2>\n      <h3 position text-center>{{ item.Name }}</h3>\n      <h4 position text-center>Venue: {{ item.Venue }}</h4>\n      <h5 position text-center>Price: £{{ item.Price }}</h5>\n      <h6 position text-center>Date: {{ item.Date }}</h6>\n      <h6 position text-center>Time: {{ item.Time }}</h6>\n      <button\n        [id]="i"\n        ion-button\n        class="modalButton"\n        block\n        (click)="accept(index)"\n      >\n        Accept\n      </button>\n      <button\n        [id]="i"\n        ion-button\n        class="modalButton"\n        block\n        (click)="reject(index)"\n      >\n        Reject\n      </button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\admin\admin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
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





var userLat;
var userLong;
var userPos;
var keys = [];
var HomePage = /** @class */ (function () {
    function HomePage(afAuth, toast, gLocation, afDatabase, app, ngZone, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.toast = toast;
        this.gLocation = gLocation;
        this.afDatabase = afDatabase;
        this.app = app;
        this.ngZone = ngZone;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.markerObject = [];
        window.ionicPageRef = {
            zone: this.ngZone,
            component: this
        };
    }
    HomePage.prototype.ionViewWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.loadMap();
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.loadMap = function () {
        var _this = this;
        this.gLocation
            .getCurrentPosition()
            .then(function (resp) {
            resp.coords.latitude;
            resp.coords.longitude;
        })
            .catch(function (error) {
            console.log("Cannot locate you", error);
        });
        var watch = this.gLocation.watchPosition();
        watch.subscribe(function (data) {
            userLat = data.coords.latitude;
            userLong = data.coords.longitude;
            var latLng = new google.maps.LatLng(userLat, userLong);
            userPos = latLng;
            var mapOptions = {
                center: latLng,
                zoom: 7,
                zoomControl: true,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.addUserMarker();
            _this.loadListings();
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.addUserMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: userPos
        });
        var content = "You are here" + " ";
        this.addInfoWindow(marker, content);
    };
    HomePage.prototype.loadListings = function () {
        var _this = this;
        var ref = this.afDatabase.object("approvedTickets/");
        ref.snapshotChanges().subscribe(function (snapshot) {
            var allData = snapshot.payload.val();
            var array = [];
            array.push(allData);
            var value = Object.keys(allData);
            var keyArray = [];
            keyArray.push(value);
            for (var i = 0; i < value.length; i++) {
                var x = 0;
                var selectedIndex = i;
                var keyValue = value[selectedIndex];
                var indexSelecta = value.length - value.length + i;
                var id = value[indexSelecta];
                keys.push(id);
                var ref = _this.afDatabase.object("approvedTickets/" + keyValue);
                ref.snapshotChanges().subscribe(function (snapshot) {
                    var finalKey = keys[keys.length - keys.length + x];
                    var eventName = snapshot.payload.child("Name").val();
                    var eventPrice = snapshot.payload.child("Price").val();
                    var eventVenue = snapshot.payload.child("Venue").val();
                    var eventDate = snapshot.payload.child("Date").val();
                    var eventTime = snapshot.payload.child("Time").val();
                    var eventCreationDate = snapshot.payload.child("Creation").val();
                    var eventSellerUID = snapshot.payload.child("Seller").val();
                    var eventCustomerPayout = snapshot.payload.child("Payout").val();
                    var eventServiceCharge = snapshot.payload.child("Charge").val();
                    var lats = snapshot.payload.child("lat").val();
                    var longs = snapshot.payload.child("long").val();
                    _this.markerObject.push({
                        index: _this.markerObject.length,
                        Key: finalKey,
                        Name: eventName,
                        Venue: eventVenue,
                        Price: eventPrice,
                        Date: eventDate,
                        Time: eventTime,
                        Creation: eventCreationDate,
                        Seller: eventSellerUID,
                        Payout: eventCustomerPayout,
                        Charge: eventServiceCharge,
                        Lat: lats,
                        Long: longs
                    });
                    x++;
                });
                _this.markerObject.forEach(function (ticket) {
                    ticket.index;
                    ticket.Lat;
                    ticket.Long;
                    ticket.Artist;
                    var latLng = new google.maps.LatLng(ticket.Lat, ticket.Long);
                    var marker = new google.maps.Marker({
                        map: _this.map,
                        animation: google.maps.Animation.DROP,
                        position: latLng
                    });
                    var content = "<h1 hidden>" +
                        ticket.Key +
                        "</h1>" +
                        "<br>" +
                        " " +
                        ("<h2 hidden>" + ticket.index + "</h2>") +
                        "<br>" +
                        " " +
                        ticket.Name +
                        "<br>" +
                        "Date" +
                        " " +
                        ticket.Date +
                        "<br>" +
                        "Time" +
                        " " +
                        ticket.Time +
                        "<br>" +
                        "Price:" +
                        " " +
                        "£" +
                        ticket.Price +
                        "<br>" +
                        " " +
                        "<br>" +
                        '<button class="infoWindowButton" <button onClick="window.ionicPageRef.zone.run(function () { window.ionicPageRef.component.buyTickets()})">Buy this ticket?</button>';
                    _this.addInfoWindow(marker, content);
                });
            }
        });
    };
    HomePage.prototype.buyTickets = function () {
        var _this = this;
        var timeClicked = Date.now();
        var checkOutBy = timeClicked + 600000;
        var temp = [];
        var tempArray = [];
        var target = event.srcElement;
        var ticketId = target.parentElement.children.item(0).innerHTML;
        var index = target.parentElement.children.item(2).innerHTML.valueOf();
        var ref = this.afDatabase.object("approvedTickets/" + ticketId);
        ref.snapshotChanges().subscribe(function (snapshot) {
            var seller = snapshot.payload.child("Seller").val();
            var eventName = snapshot.payload.child("Name").val();
            var eventPrice = snapshot.payload.child("Price").val();
            var eventVenue = snapshot.payload.child("Venue").val();
            var eventDate = snapshot.payload.child("Date").val();
            var eventTime = snapshot.payload.child("Time").val();
            var eventCreationDate = snapshot.payload.child("Creation").val();
            var eventCustomerPayout = snapshot.payload.child("Payout").val();
            var eventServiceCharge = snapshot.payload.child("Charge").val();
            var lats = snapshot.payload.child("lat").val();
            var longs = snapshot.payload.child("long").val();
            console.log(seller, eventName, eventDate, eventPrice, lats, longs, eventTime, eventCreationDate, eventVenue, eventCustomerPayout, eventServiceCharge);
            var buyerId = _this.afAuth.auth.currentUser.uid;
            if (buyerId != seller) {
                temp.push(_this.markerObject[index]);
                temp.filter(function (v) {
                    tempArray = [
                        {
                            Key: v.Key,
                            Name: v.Name,
                            Venue: v.Venue,
                            Price: v.Price,
                            Date: v.Date,
                            Seller: v.Seller,
                            Time: v.Time,
                            Payout: v.Payout,
                            Creation: v.Creation,
                            Charge: v.Charge,
                            checkOutTime: timeClicked,
                            reservationPerioid: checkOutBy,
                            Lat: lats,
                            Long: longs
                        }
                    ];
                });
                console.log(tempArray);
                var checkOutRef = _this.afAuth.auth.currentUser.uid;
                _this.afDatabase
                    .list("ticketsInBasket/" + checkOutRef)
                    .push(tempArray[0]);
                _this.afDatabase.object("approvedTickets/" + ticketId).remove();
                _this.navCtrl.push("BuyPage");
            }
            else if (buyerId == seller) {
                _this.toast
                    .create({
                    message: "This is your listing",
                    duration: 2000,
                    position: "top"
                })
                    .present();
            }
        });
    };
    HomePage.prototype.refresh = function () {
        window.location.reload();
    };
    HomePage.prototype.checkOut = function () {
        this.navCtrl.push("BuyPage");
    };
    HomePage.prototype.orderHistory = function () {
        this.navCtrl.push("OrderHistoryPage");
    };
    HomePage.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, "click", function () {
            infoWindow.open(_this.map, marker);
        });
    };
    HomePage.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            _this.toast
                .create({
                message: "Signed out",
                position: "middle",
                duration: 3500
            })
                .present();
            _this.app.getRootNav().setRoot("LoginPage");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button\n        id="button"\n        ion-button\n        icon-only\n        color="light"\n        (click)="ticketTradeInfo()"\n      >\n        <ion-icon name="information-circle"></ion-icon>\n      </button>\n      <button id="button" ion-button icon-only color="light" (click)="logout()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons left>\n      <button\n        id="button"\n        ion-button\n        icon-only\n        color="light"\n        (click)="checkOut()"\n      >\n        <ion-icon name="basket"></ion-icon>\n      </button>\n      <button\n        id="button"\n        ion-button\n        icon-only\n        color="light"\n        (click)="orderHistory()"\n      >\n        <ion-icon name="clipboard"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title position text-center>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_storage__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera_ngx__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home_module__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_register_register__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_firebase_config__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_chooser_index__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin-view/admin-view.module#AdminViewPageModule', name: 'AdminViewPage', segment: 'admin-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin/admin.module#AdminPageModule', name: 'AdminPage', segment: 'admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin2/admin2.module#Admin2PageModule', name: 'Admin2Page', segment: 'admin2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/admin3/admin3.module#Admin3PageModule', name: 'Admin3Page', segment: 'admin3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/buy/buy.module#BuyPageModule', name: 'BuyPage', segment: 'buy', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-account/modal-account.module#ModalAccountPageModule', name: 'ModalAccountPage', segment: 'modal-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-history/order-history.module#OrderHistoryPageModule', name: 'OrderHistoryPage', segment: 'order-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page/page.module#PageModule', name: 'Page', segment: 'page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment-modal/payment-modal.module#PaymentModalPageModule', name: 'PaymentModalPage', segment: 'payment-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select-location-modal/select-location-modal.module#SelectLocationModalPageModule', name: 'SelectLocationModalPage', segment: 'select-location-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sell/sell.module#SellPageModule', name: 'SellPage', segment: 'sell', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tickets/tickets.module#TicketsPageModule', name: 'TicketsPage', segment: 'tickets', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_18__app_firebase_config__["a" /* FbConfig */]),
                __WEBPACK_IMPORTED_MODULE_15__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home_module__["HomePageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* MyApp */], __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */], __WEBPACK_IMPORTED_MODULE_16__pages_register_register__["a" /* RegisterPage */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera_ngx__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_chooser_index__["a" /* Chooser */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_maps__["a" /* GoogleMaps */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["AngularFireDatabase"],
                __WEBPACK_IMPORTED_MODULE_10_angularfire2_storage__["AngularFireStorage"],
                __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_11_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FbConfig; });
var FbConfig = {
    apiKey: "AIzaSyCqwIbC5-SIABFpRslbXqWZaUfLYmgX720",
    authDomain: "dissy-c7abe.firebaseapp.com",
    databaseURL: "https://dissy-c7abe.firebaseio.com",
    projectId: "dissy-c7abe",
    storageBucket: "dissy-c7abe.appspot.com",
    messagingSenderId: "241298422972"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin__ = __webpack_require__(298);
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






var loginCounter = 0;
var attemptsLeft = 4;
var gFirstname;
var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, afDatabase, toast, ldCtrl, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.toast = toast;
        this.ldCtrl = ldCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    LoginPage.prototype.showSpinner = function () {
        var loading = this.ldCtrl.create({
            content: ""
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 250);
    };
    LoginPage.prototype.loginRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showSpinner()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */])];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.adminLogin = function (user) {
        var adminCredential1 = user.email;
        var adminCredential2 = user.password;
        if (adminCredential1 == "admin@TicketTrader.com" &&
            adminCredential2 == "admin!") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__admin_admin__["a" /* AdminPage */]);
        }
        else {
            this.loginLogin(user);
        }
    };
    LoginPage.prototype.loginLogin = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, lastSignIn, creation, currentTime, x, z, key, e_1, disableLogin, disableReg;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.showSpinner()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 3:
                        result = _a.sent();
                        lastSignIn = new Date(this.afAuth.auth.currentUser.metadata.lastSignInTime).valueOf();
                        creation = new Date(this.afAuth.auth.currentUser.metadata.creationTime).valueOf();
                        currentTime = new Date().valueOf();
                        x = Number(creation - currentTime);
                        z = Number(lastSignIn - creation);
                        key = this.afAuth.auth.currentUser.uid;
                        console.log(result);
                        this.userName = this.afDatabase.object("user/" + key);
                        this.userName.snapshotChanges().subscribe(function (snapshot) {
                            var firstName = snapshot.payload.child("firstname/").val();
                            gFirstname = firstName;
                            var adminCredential1 = user.email;
                            var adminCredential2 = user.password;
                            if (adminCredential1 == "admin@TicketTrader.com" &&
                                adminCredential2 == "admin!") {
                                _this.navCtrl.setRoot("AdminViewPage");
                            }
                            else if (x < 0 && z > 0) {
                                _this.toast
                                    .create({
                                    message: "Welcome back " + gFirstname + " " + " enjoy your stay :)",
                                    position: "middle",
                                    duration: 1000
                                })
                                    .present();
                                _this.navCtrl.setRoot("Page");
                            }
                            else {
                                _this.toast
                                    .create({
                                    message: "Welcome to TicketTrader " +
                                        gFirstname +
                                        " " +
                                        "click on the info button in the top left corner to help get you started.",
                                    position: "middle",
                                    duration: 1000
                                })
                                    .present();
                                _this.navCtrl.setRoot("Page");
                            }
                        });
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        loginCounter = loginCounter + 1;
                        attemptsLeft = attemptsLeft - 1;
                        console.error(e_1);
                        if (loginCounter < 4) {
                            this.toast
                                .create({
                                message: "Credentials are wrong, You have" +
                                    " " +
                                    attemptsLeft +
                                    " " +
                                    "attempts left.",
                                position: "middle",
                                duration: 1000
                            })
                                .present();
                        }
                        else {
                            if (attemptsLeft <= 0) {
                                disableLogin = (document.getElementById("btnLogin"));
                                disableReg = document.getElementById("btnReg");
                                disableLogin.disabled = true;
                                disableReg.disabled = true;
                                this.toast
                                    .create({
                                    message: "Wrong credentials have been entered too many times, your account has been locked.",
                                    position: "middle",
                                    duration: 3500
                                })
                                    .present();
                            }
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-title position text-center>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Enter your email address</ion-label>\n    <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Enter your password</ion-label>\n    <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n  </ion-item>\n\n  <button\n    ion-button\n    id="btnLogin"\n    class="loginButton"\n    color="midnight-blue"\n    block\n    (click)="loginLogin(user)"\n  >\n    Login\n  </button>\n  <button\n    ion-button\n    id="btnReg"\n    class="loginButton"\n    color="midnight-blue"\n    block\n    (click)="loginRegister()"\n  >\n    Need an account?\n  </button>\n</ion-content>\n\n<div class id="footer">\n  <ion-footer>\n    <ion-toolbar color="midnight-blue">\n      <ion-title position text-center>TicketTrader</ion-title>\n    </ion-toolbar>\n  </ion-footer>\n</div>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[301]);
//# sourceMappingURL=main.js.map
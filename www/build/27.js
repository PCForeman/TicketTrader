webpackJsonp([27],{

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminpaymentsPageModule", function() { return AdminpaymentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adminpayments__ = __webpack_require__(650);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminpaymentsPageModule = /** @class */ (function () {
    function AdminpaymentsPageModule() {
    }
    AdminpaymentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adminpayments__["a" /* AdminpaymentsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adminpayments__["a" /* AdminpaymentsPage */]),
            ],
        })
    ], AdminpaymentsPageModule);
    return AdminpaymentsPageModule;
}());

//# sourceMappingURL=adminpayments.module.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminpaymentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(64);
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



var AdminpaymentsPage = /** @class */ (function () {
    function AdminpaymentsPage(navCtrl, navParams, fbDatabase) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbDatabase = fbDatabase;
        this.kA = [];
        this.items = [];
    }
    AdminpaymentsPage.prototype.ionViewDidLoad = function () {
        this.retrievePayments();
    };
    AdminpaymentsPage.prototype.retrievePayments = function () {
        var _this = this;
        // Retrieve all of the unapproved tickets that are in the database, and creates an object for each one
        var ref = this.fbDatabase.object("payments/");
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
                var ref = _this.fbDatabase.object("payments/" + keyValue);
                ref.snapshotChanges().subscribe(function (snapshot) {
                    var amount = snapshot.payload.child("amount").val();
                    var ref = snapshot.payload.child("ticketRef").val();
                    var pId = snapshot.payload.child("paymentId").val();
                    _this.items.push({
                        Amount: amount,
                        Ref: ref,
                        pId: pId
                    });
                    x++;
                });
                console.log(_this.items);
            }
        });
    };
    AdminpaymentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adminpayments',template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\adminpayments\adminpayments.html"*/'<ion-header>\n\n  <ion-navbar color="midnight-blue">\n\n    <ion-buttons right>\n\n      <button ion-button icon-only color="light" (click)="logout()">\n\n        <ion-icon name="log-out"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-buttons left>\n\n      <button ion-button icon-only color="light" (click)="ticketTradeInfo()">\n\n        <ion-icon name="information-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title position text-center>Pending listings</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n\n\n    <ion-list>\n\n        <div\n\n          class="ngDivAdmin"\n\n          [id]="i"\n\n          ion-item\n\n          *ngFor="let item of items; let i = index"\n\n        >\n\n          <h1 hidden>{{ i + 1 }}</h1>\n\n          <h2 position text-center>Amount {{ item.Amount }}</h2>\n\n          <h3 position text-center>Sale reference {{ item.Ref }}</h3>\n\n          <h4 position text-center>{{ item.pId }}</h4>\n\n</div>'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\adminpayments\adminpayments.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], AdminpaymentsPage);
    return AdminpaymentsPage;
}());

//# sourceMappingURL=adminpayments.js.map

/***/ })

});
//# sourceMappingURL=27.js.map
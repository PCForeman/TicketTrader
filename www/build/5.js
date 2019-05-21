webpackJsonp([5],{

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__(654);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__page__["a" /* Page */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page__["a" /* Page */])]
        })
    ], PageModule);
    return PageModule;
}());

//# sourceMappingURL=page.module.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
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
 * Generated class for the Page tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Page = /** @class */ (function () {
    function Page(navCtrl) {
        this.navCtrl = navCtrl;
        this.homeRoot = "HomePage";
        this.ticketsRoot = "TicketsPage";
        this.sellRoot = "SellPage";
        this.accountRoot = "AccountPage";
        this.tab1Root = "TicketsPage";
        this.tab2Root = "HomePage";
        this.tab3Root = "SellPage";
        this.tab4Root = "AccountPage";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("myTab"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Tabs */])
    ], Page.prototype, "tabRef", void 0);
    Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-page",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\page\page.html"*/'<ion-tabs position="centered" color="midnight-blue">\n  <ion-tab\n    color="midnight-blue"\n    [root]="homeRoot"\n    tabTitle="Home"\n    tabIcon="map"\n  ></ion-tab>\n  <ion-tab\n    color="midnight-blue"\n    [root]="ticketsRoot"\n    tabTitle="Listings"\n    tabIcon="search"\n  ></ion-tab>\n  <ion-tab\n    color="midnight-blue"\n    [root]="sellRoot"\n    tabTitle="Sell"\n    tabIcon="cart"\n  ></ion-tab>\n  <ion-tab\n    color="midnight-blue"\n    [root]="accountRoot"\n    tabTitle="Account"\n    tabIcon="settings"\n  ></ion-tab>\n</ion-tabs>\n\n<head>\n  <link\n    href="https://unpkg.com/ionicons@4.4.6/dist/css/ionicons.min.css"\n    rel="stylesheet"\n  />\n</head>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\page\page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], Page);
    return Page;
}());

//# sourceMappingURL=page.js.map

/***/ })

});
//# sourceMappingURL=5.js.map
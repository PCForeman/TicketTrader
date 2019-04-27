webpackJsonp([10],{

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewPageModule", function() { return AdminViewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_view__ = __webpack_require__(541);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdminViewPageModule = /** @class */ (function () {
    function AdminViewPageModule() {
    }
    AdminViewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__admin_view__["a" /* AdminViewPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__admin_view__["a" /* AdminViewPage */])]
        })
    ], AdminViewPageModule);
    return AdminViewPageModule;
}());

//# sourceMappingURL=admin-view.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminViewPage = /** @class */ (function () {
    function AdminViewPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.adminRoot = "AdminPage";
        this.admin2Root = "Admin2Page";
        this.admin3Root = "Admin3Page";
    }
    AdminViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-admin-view",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\admin-view\admin-view.html"*/'<ion-tabs position="text-center" color="midnight-blue">\n  <ion-tab\n    color="midnight-blue"\n    [root]="adminRoot"\n    tabTitle="Pending listings"\n    tabIcon="document"\n  ></ion-tab>\n  <ion-tab\n    color="midnight-blue"\n    [root]="admin2Root"\n    tabTitle="Active listings"\n    tabIcon="happy"\n  ></ion-tab>\n  <ion-tab\n    color="midnight-blue"\n    [root]="admin3Root"\n    tabTitle="Rejected listings"\n    tabIcon="sad"\n  ></ion-tab>\n</ion-tabs>\n\n<head>\n  <link\n    href="https://unpkg.com/ionicons@4.4.6/dist/css/ionicons.min.css"\n    rel="stylesheet"\n  />\n</head>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\admin-view\admin-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], AdminViewPage);
    return AdminViewPage;
}());

//# sourceMappingURL=admin-view.js.map

/***/ })

});
//# sourceMappingURL=10.js.map
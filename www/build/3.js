webpackJsonp([3],{

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLocationModalPageModule", function() { return SelectLocationModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_location_modal__ = __webpack_require__(656);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectLocationModalPageModule = /** @class */ (function () {
    function SelectLocationModalPageModule() {
    }
    SelectLocationModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__select_location_modal__["a" /* SelectLocationModalPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_location_modal__["a" /* SelectLocationModalPage */])]
        })
    ], SelectLocationModalPageModule);
    return SelectLocationModalPageModule;
}());

//# sourceMappingURL=select-location-modal.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLocationModalPage; });
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


var SelectLocationModalPage = /** @class */ (function () {
    function SelectLocationModalPage(navCtrl, view, navParams, vCtrl, zone) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
        this.vCtrl = vCtrl;
        this.zone = zone;
        this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        this.autocomplete = { input: "" };
        this.autocompleteItems = [];
        this.geocoder = new google.maps.Geocoder();
        this.markers = [];
    }
    SelectLocationModalPage.prototype.updateResults = function () {
        var _this = this;
        if (this.autocomplete.input == "") {
            this.autocompleteItems = [];
            return;
        }
        this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input }, function (places) {
            _this.autocompleteItems = [];
            _this.zone.run(function () {
                places.forEach(function (places) {
                    _this.autocompleteItems.push(places);
                });
            });
        });
    };
    SelectLocationModalPage.prototype.selectSearchResult = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.autocompleteItems = [];
                this.geocoder.geocode({ placeId: item.place_id }, function (results, status) { return __awaiter(_this, void 0, void 0, function () {
                    var position, marker, venue, venueData, latData, lngData;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(status === "OK" && results[0])) return [3 /*break*/, 2];
                                position = {
                                    lat: results[0].geometry.location.lat(),
                                    lng: results[0].geometry.location.lng()
                                };
                                marker = new google.maps.Marker({
                                    position: results[0].geometry.location,
                                    map: this.map
                                });
                                return [4 /*yield*/, this.markers.push(marker)];
                            case 1:
                                _a.sent();
                                this.map.setCenter(results[0].geometry.location);
                                venue = this.autocomplete.input.toString().toUpperCase();
                                console.log(position.lat, position.lng, venue);
                                venueData = [];
                                venueData.push(venue);
                                latData = [];
                                latData.push(position.lat);
                                lngData = [];
                                lngData.push(position.lng);
                                this.view.dismiss({ venueData: venueData, latData: latData, lngData: lngData });
                                _a.label = 2;
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    SelectLocationModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SelectLocationModalPage");
        this.loadMap();
    };
    SelectLocationModalPage.prototype.close = function () {
        this.vCtrl.dismiss({ venueData: 0, latData: 0, lngData: 0 });
    };
    SelectLocationModalPage.prototype.loadMap = function () {
        var uluru = { lat: -25.344, lng: 131.036 };
        var mapOptions = {
            center: uluru,
            zoom: 1,
            zoomControl: true,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SelectLocationModalPage.prototype, "mapElement", void 0);
    SelectLocationModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-select-location-modal",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\select-location-modal\select-location-modal.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button ion-button (click)="close()">Close</button>\n    </ion-buttons>\n    <ion-title position text-center>Locate venue</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-searchbar\n    [(ngModel)]="autocomplete.input"\n    (ionInput)="updateResults()"\n    placeholder="Search for a place"\n  ></ion-searchbar>\n  <ion-list [hidden]="autocompleteItems.length == 0">\n    <ion-item\n      *ngFor="let item of autocompleteItems"\n      tappable\n      (click)="selectSearchResult(item)"\n    >\n      {{ item.description }}\n    </ion-item>\n  </ion-list>\n  <div #map id="map"></div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\select-location-modal\select-location-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], SelectLocationModalPage);
    return SelectLocationModalPage;
}());

//# sourceMappingURL=select-location-modal.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
webpackJsonp([3],{

/***/ 533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModalPageModule", function() { return PaymentModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment_modal__ = __webpack_require__(547);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentModalPageModule = /** @class */ (function () {
    function PaymentModalPageModule() {
    }
    PaymentModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__payment_modal__["a" /* PaymentModalPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment_modal__["a" /* PaymentModalPage */])]
        })
    ], PaymentModalPageModule);
    return PaymentModalPageModule;
}());

//# sourceMappingURL=payment-modal.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(52);
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



var PaymentModalPage = /** @class */ (function () {
    function PaymentModalPage(navParams, aCtrl, vCtrl, afDatabase) {
        this.navParams = navParams;
        this.aCtrl = aCtrl;
        this.vCtrl = vCtrl;
        this.afDatabase = afDatabase;
    }
    PaymentModalPage.prototype.ionViewWillLoad = function () {
        var ticket = this.navParams.get("ticket");
        this.listingData = ticket;
        console.log(ticket);
        this.useExistingCard();
    };
    PaymentModalPage.prototype.close = function () {
        this.vCtrl.dismiss();
    };
    PaymentModalPage.prototype.useExistingCard = function () {
        var _this = this;
        var key = this.listingData.userId;
        this.afDatabase
            .object("user/" + key)
            .snapshotChanges()
            .subscribe(function (snapshot) {
            var allData = snapshot.payload.val();
            var value = Object.keys(allData);
            var cardKey = value[0];
            _this.afDatabase
                .object("user/" + key + "/" + cardKey)
                .snapshotChanges()
                .subscribe(function (snapshot) {
                var CardNo = snapshot.payload.child("Card").val();
                var cardExpiry = snapshot.payload.child("Expiry").val();
                var Holder = snapshot.payload.child("Holder").val();
                var CardSubStr = CardNo.toString().substr(12, 4);
                var cardNoString = CardNo.toString().substr(0, 4) +
                    "-" +
                    CardNo.toString().substr(4, 4) +
                    "-" +
                    CardNo.toString().substr(8, 4) +
                    "-" +
                    CardNo.toString().substr(12, 4);
                var alert = _this.aCtrl.create({
                    title: "Payment",
                    message: "Use card ending in" + " " + CardSubStr + " " + "for payment?",
                    buttons: [
                        {
                            text: "NO",
                            role: "cancel",
                            handler: function () {
                                console.log("Cancel clicked");
                            }
                        },
                        {
                            text: "YES",
                            handler: function () {
                                _this.cardName = Holder;
                                _this.cardNo = cardNoString;
                                _this.expiry = cardExpiry;
                            }
                        }
                    ]
                });
                alert.present();
            });
        });
    };
    PaymentModalPage.prototype.processPayment = function () {
        console.log(this.listingData.userId);
        var transactionRef = [{
                Seller: this.listingData.sellerId,
                TicketRef: this.listingData.ticketRef,
                Buyer: this.listingData.userId,
                Price: this.listingData.price,
                SellerPayout: this.listingData.payout,
                ttRevenue: this.listingData.charge,
                PayeeAccountNo: this.listingData.payoutAccount,
                Payout: this.listingData.payout
            }];
        var transRefNo = this.afDatabase.list("transactions").push(transactionRef[0]).key;
        var buyerRef = [{
                transactionRef: transRefNo,
                TicketRef: this.listingData.ticketRef,
                Paid: this.listingData.price,
                FileUrl: 'www.firebase.com',
            }];
        var sellerRef = [{
                Artist: this.listingData.artist,
                transactionRef: transRefNo,
                TicketRef: this.listingData.ticketRef,
                Payout: this.listingData.payout,
                Status: 'Pending',
            }];
        var saleArchive = [{
                Seller: this.listingData.sellerId,
                Event: this.listingData.artist,
                Location: this.listingData.location,
                Long: this.listingData.long,
                Lat: this.listingData.lat,
                Time: this.listingData.time,
                Date: this.listingData.date,
                Buyer: this.listingData.userId,
                Price: this.listingData.price,
                Payout: this.listingData.payout,
                transactionRef: transRefNo
            }];
        console.log(transactionRef, buyerRef, transRefNo);
        this.afDatabase.list("ticketsBought/" + this.listingData.userId).push(buyerRef[0]);
        this.afDatabase.list("ticketsSold/" + this.listingData.userId).push(sellerRef[0]);
        this.afDatabase.object("saleArchive/" + this.listingData.ticketRef).set(saleArchive[0]);
        // Need to remove the ticket from basket after the data has been sent to the other tables. //
        this.close();
    };
    PaymentModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-payment-modal",template:/*ion-inline-start:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\payment-modal\payment-modal.html"*/'<ion-header>\n  <ion-navbar color="midnight-blue">\n    <ion-buttons right>\n      <button ion-button (click)="close()">Close</button>\n    </ion-buttons>\n    <ion-title position text-center>Pay</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list position text-center>\n    <ion-title>\n      Order Summary\n    </ion-title>\n    {{ listingData.artist }}<br />\n    {{ listingData.location }}<br />\n    {{ listingData.date }} {{ listingData.time }}\n    <div class="ngFor">\n      <ion-item>\n        <ion-label position text-center>Name on card</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder="Enter Cardholders name"\n          [(ngModel)]="cardName"\n          position\n          text-center\n        ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position text-center>16 Digit card number</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder="Enter Card Number"\n          [(ngModel)]="cardNo"\n          position\n          text-center\n        ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position text-center>Expiry date</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder="Enter Expiry"\n          [(ngModel)]="expiry"\n          position\n          text-center\n        ></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position text-center>CVC</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-input\n          placeholder="Enter CVC"\n          [(ngModel)]="CVC"\n          position\n          text-center\n        ></ion-input>\n      </ion-item>\n\n      <button id="modalButton"  ion-button (click)="processPayment()">Pay {{ listingData.price }}</button>\n    </div>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\paulf\Desktop\TicketTrader\TicketTrader\src\pages\payment-modal\payment-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], PaymentModalPage);
    return PaymentModalPage;
}());

//# sourceMappingURL=payment-modal.js.map

/***/ })

});
//# sourceMappingURL=3.js.map
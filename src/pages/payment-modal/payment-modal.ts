import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PaymentModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-modal',
  templateUrl: 'payment-modal.html',
})
export class PaymentModalPage {

listingData:any;

  constructor(public navParams: NavParams, private vCtrl: ViewController) {
  }


  ionViewWillLoad() {
    const ticket = this.navParams.get('ticket');
    this.listingData = ticket;
    console.log(this.listingData);
  }
}

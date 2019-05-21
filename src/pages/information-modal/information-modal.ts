import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the InformationModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information-modal',
  templateUrl: 'information-modal.html',
})
export class InformationModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private vCtrl: ViewController) {
  }

date:any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationModalPage');
    this.displayDate();
  }

displayDate(){
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();
const digits = year.toString().substr(2);
this.date = day +'/'+'0'+month+'/'+digits
}


close(){
  this.vCtrl.dismiss();
}

}

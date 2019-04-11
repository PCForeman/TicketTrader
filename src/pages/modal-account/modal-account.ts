import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

/**
 * Generated class for the ModalAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-account',
  templateUrl: 'modal-account.html',
})
export class ModalAccountPage {

  constructor(public navParams: NavParams, private view: ViewController,
    private afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth) {
  }
uSurname:any;
uName:any;
password:any;
uPC:any;
userD:any;
uPhoneNo:any;
uAddressL1:any;

close(){
  this.view.dismiss();
}

updateSurname(){
  var key = this.afAuth.auth.currentUser.uid
  var ref = this.afDatabase.object(`/user/${key}`)
  ref.update({surname: this.uSurname});
  console.log(ref);
}

updateName(){
  var key = this.afAuth.auth.currentUser.uid
  var ref = this.afDatabase.object(`/user/${key}`)
  ref.update({firstname: this.uName});
  console.log(ref);
}

updateAddress(){
  var key = this.afAuth.auth.currentUser.uid
  var ref = this.afDatabase.object(`/user/${key}`)
  ref.update({addressL1: this.uAddressL1});
  console.log(ref);
}

updatePhoneNo(){
  var key = this.afAuth.auth.currentUser.uid
  var ref = this.afDatabase.object(`/user/${key}`)
  ref.update({phoneNo: this.uPhoneNo});
  console.log(ref);
}

updatePostCode(){
  var key = this.afAuth.auth.currentUser.uid
  var ref = this.afDatabase.object(`/user/${key}`)
  ref.update({addressPC: this.uPC});
  console.log(ref);
}

updatePassword(){
  var newPass = this.password.toString()
  console.log(newPass);
  var key = this.afAuth.auth.currentUser.uid;
  var ref = this.afDatabase.object(`/user/${key}`)
  ref.update({password: newPass});
  this.afAuth.auth.currentUser.updatePassword(newPass);
}

  ionViewWillLoad() {
  const ticket = this.navParams.get("ticket")
  this.userD = ticket;
  console.log(this.userD)
  }

}

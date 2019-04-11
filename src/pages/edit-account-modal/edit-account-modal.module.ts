import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditAccountModalPage } from './edit-account-modal';

@NgModule({
  declarations: [
    EditAccountModalPage,
  ],
  imports: [
    IonicPageModule.forChild(EditAccountModalPage),
  ],
})
export class EditAccountModalPageModule {}

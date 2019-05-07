import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewImageModalPage } from './view-image-modal';

@NgModule({
  declarations: [
    ViewImageModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewImageModalPage),
  ],
})
export class ViewImageModalPageModule {}

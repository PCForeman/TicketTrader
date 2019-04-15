import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectLocationModalPage } from './select-location-modal';

@NgModule({
  declarations: [
    SelectLocationModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectLocationModalPage),
  ],
})
export class SelectLocationModalPageModule {}

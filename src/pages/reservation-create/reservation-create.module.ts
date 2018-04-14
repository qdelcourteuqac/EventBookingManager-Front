import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservationCreatePage } from './reservation-create';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ReservationCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationCreatePage),
    TranslateModule.forChild()
  ],
  exports: [
    ReservationCreatePage
  ]
})
export class ReservationCreatePageModule {}

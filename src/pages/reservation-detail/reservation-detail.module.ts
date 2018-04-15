import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservationDetailPage } from './reservation-detail';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ReservationDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    ReservationDetailPage
  ]
})
export class ReservationDetailPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservationListPage } from './reservation-list';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ReservationListPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservationListPage),
    TranslateModule.forChild()
  ],
  exports: [
    ReservationListPage
  ]
})
export class ReservationListPageModule {}

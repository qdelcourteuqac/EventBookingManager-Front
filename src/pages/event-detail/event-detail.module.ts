import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDetailPage } from './event-detail';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    EventDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EventDetailPage),
    TranslateModule.forChild()
  ],
  exports: [
    EventDetailPage
  ]
})
export class EventDetailPageModule {}

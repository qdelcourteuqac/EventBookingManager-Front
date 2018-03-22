import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventCreatePage } from './event-create';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    EventCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(EventCreatePage),
    TranslateModule.forChild(),
  ],
  exports: [
    EventCreatePage
  ]
})
export class EventCreatePageModule {}

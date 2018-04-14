import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScannerPage } from './scanner';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(ScannerPage),
    TranslateModule.forChild()
  ],
  exports: [
    ScannerPage
  ]
})
export class ScannerPageModule {}

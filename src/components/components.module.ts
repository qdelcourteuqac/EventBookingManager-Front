import { NgModule } from '@angular/core';
import { ProgressbarComponent } from './progressbar/progressbar';
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [ProgressbarComponent],
	imports: [IonicModule],
	exports: [ProgressbarComponent]
})
export class ComponentsModule {}

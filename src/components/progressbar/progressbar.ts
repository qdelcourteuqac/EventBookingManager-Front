import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';


@Component({
  selector: 'progressbar',
  templateUrl: 'progressbar.html'
})
export class ProgressbarComponent implements OnChanges {

  @Input() full: boolean;
  @Input() max: number;
  @Input() value:  number;

  label: string;
  cssAttrWidth: string;

  constructor() {
    this.full = false;
    this.max = 0;
    this.value = 0;

    this.refresh();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refresh();
  }

  refresh() {
    this.label = this.value + " / " + this.max;
    this.cssAttrWidth = (this.max === 0) ? "0%" : ((this.value / this.max) * 100).toFixed(1) + "%";
  }

}

import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

import { config } from "../../app/config";
import { ScanApiProvider } from "../../providers/scan/scan";
import { Event } from '../../models/event';
import { ScanResponse } from "../../models/scan";


@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage implements OnInit {

  static readonly STATUS_PENDING: string = 'pending';
  static readonly STATUS_LOADING: string = 'loading';
  static readonly STATUS_SUCCESS: string = 'success';
  static readonly STATUS_ERROR: string   = 'error';

  state: string; // pending, loading, success, error

  progressContext: object;

  max: number;
  value: number;

  scanResponse: ScanResponse;

  event: Event;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public scanner: BarcodeScanner,
              public scanProvider: ScanApiProvider) {
    this.event = this.navParams.get('event');
  }

  ngOnInit() {
    this.state = ScannerPage.STATUS_PENDING;

    this.progressContext = {};

    this.updateProgressBar();
  }


  scan() {
    this.scanner.scan(config.scannerOptions).then((result) => {
      if (!result.cancelled) {
        this.state = ScannerPage.STATUS_LOADING;
        this.scanProvider.scanQrCode(result.text).then((response: ScanResponse) => {
          this.scanResponse = response;
          this.state = ScannerPage.STATUS_SUCCESS;
          this.updateProgressBar();
        }).catch((error: ScanResponse) => {
          this.scanResponse = error;
          this.state = ScannerPage.STATUS_ERROR;
        });
      }
    });
  }

  updateProgressBar() {
    this.scanProvider.getProgress(this.event).then( (response: any) => {
      this.max = response.totalOfAttendee;
      this.value = response.totalAlreadyScanned;
    }, (err: any) => {
      this.progressContext = {
        errorMessage: err.message
      };
    });
  }

}

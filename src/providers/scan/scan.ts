import { Injectable } from '@angular/core';

import { Api } from '../api/api';
import { Event } from '../../models/event';

@Injectable()
export class ScanApiProvider {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('scan', params);
  }

  scanQrCode(code: string) {
    return new Promise((resolve, reject) => {
      this.api.get('scan/reservation/'+code).subscribe((response: any) => {
        resolve(response);
      }, (err: any) => {
        reject(err);
      });
    });
  }

  getProgress(event: Event) {
    return new Promise((resolve, reject) => {
      this.api.get('scan/event/progress/'+event.id).subscribe((response: any) => {
        resolve(response);
      }, (err: any) => {
        reject(err);
      });
    });
  }
}

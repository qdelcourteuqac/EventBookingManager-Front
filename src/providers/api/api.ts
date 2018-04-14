import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {config} from "../../app/config";

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  url: string = config.baseUrl;

  constructor(public http: HttpClient) {
    this.verifyUrl();
  }

  verifyUrl() {
    if (this.url.match(/^https?:\/\//)) {
      if (this.url.match(/^http:\/\//)) {
        this.url = this.url.substr(0, 7) + this.url.substr(7);
      } else {
        this.url = this.url.substr(0, 8) + this.url.substr(8);
      }
    }
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }

    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.url + '/' + endpoint, body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.url + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
  }
}

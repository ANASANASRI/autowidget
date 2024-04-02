import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accessKey: string | undefined;
  host: string | undefined;
  merchantId: string | undefined;
  orderId: string | undefined;
  amount: number | undefined;
  currency: string | undefined;
  hmac: string | undefined;

  constructor() { }

  updateParams(params: any): void {
    this.accessKey = params['access_key'];
    this.host = params['host'];
    this.merchantId = params['merchant_id'];
    this.orderId = params['order_id'];
    this.amount = params['amount'];
    this.currency = params['currency'];
    this.hmac = params['hmac'];
  }
}

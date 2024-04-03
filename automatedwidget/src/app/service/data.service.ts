import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accessKey: string | undefined;
  host: string | undefined;
  merchantId: number | undefined;
  orderId: string | undefined;
  amount: number | undefined;
  currency: string | undefined;
  hmac: string | undefined;

  private _accessKey = new BehaviorSubject<string | undefined>(undefined);
  private _host = new BehaviorSubject<string | undefined>(undefined);
  private _merchantId = new BehaviorSubject<number | undefined>(undefined);
  private _orderId = new BehaviorSubject<string | undefined>(undefined);
  private _amount = new BehaviorSubject<number | undefined>(undefined);
  private _currency = new BehaviorSubject<string | undefined>(undefined);
  private _hmac = new BehaviorSubject<string | undefined>(undefined);

  accessKey$ = this._accessKey.asObservable();
  host$ = this._host.asObservable();
  merchantId$ = this._merchantId.asObservable();
  orderId$ = this._orderId.asObservable();
  amount$ = this._amount.asObservable();
  currency$ = this._currency.asObservable();
  hmac$ = this._hmac.asObservable();

  constructor() { }

  updateParams(params: any): void {
    this.accessKey = params['access_key'];
    this.host = params['host'];
    this.merchantId = params['merchant_id'];
    this.orderId = params['order_id'];
    this.amount = params['amount'];
    this.currency = params['currency'];
    this.hmac = params['hmac'];

    this._accessKey.next(params['access_key']);
    this._host.next(params['host']);
    this._merchantId.next(params['merchant_id']);
    this._orderId.next(params['order_id']);
    this._amount.next(params['amount']);
    this._currency.next(params['currency']);
    this._hmac.next(params['hmac']);
  }
}

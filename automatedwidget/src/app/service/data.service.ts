import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
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
  }

  get accessKey(): string | undefined {
    return this._accessKey.value;
  }

  set accessKey(value: string | undefined) {
    this._accessKey.next(value);
  }

  get host(): string | undefined {
    return this._host.value;
  }

  set host(value: string | undefined) {
    this._host.next(value);
  }

  get merchantId(): number | undefined {
    return this._merchantId.value;
  }

  set merchantId(value: number | undefined) {
    this._merchantId.next(value);
  }

  get orderId(): string | undefined {
    return this._orderId.value;
  }

  set orderId(value: string | undefined) {
    this._orderId.next(value);
  }

  get amount(): number | undefined {
    return this._amount.value;
  }

  set amount(value: number | undefined) {
    this._amount.next(value);
  }

  get currency(): string | undefined {
    return this._currency.value;
  }

  set currency(value: string | undefined) {
    this._currency.next(value);
  }

  get hmac(): string | undefined {
    return this._hmac.value;
  }

  set hmac(value: string | undefined) {
    this._hmac.next(value);
  }
}

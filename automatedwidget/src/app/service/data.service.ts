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

  private _merchantId: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);
  private _accessKey: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  private _host: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  private _orderId: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  private _amount: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);
  private _currency: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  private _hmac: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

  merchantId$ = this._merchantId.asObservable();
  accessKey$ = this._accessKey.asObservable();
  host$ = this._host.asObservable();
  orderId$ = this._orderId.asObservable();
  amount$ = this._amount.asObservable();
  currency$ = this._currency.asObservable();
  hmac$ = this._amount.asObservable();

  constructor() { }

  setMerchantId(merchantId: number | undefined) {
    this._merchantId.next(merchantId);
  }  
 

  setAccessKey(accessKey: string | undefined) {
    this._accessKey.next(accessKey);
  }

  setHost(host: string | undefined) {
    this._host.next(host);
  }

  
  setOrderId(orderId: string | undefined) {
    this._orderId.next(orderId);
  }

  setAmount(amount: number | undefined) {
    this._amount.next(amount);
  }

  setCurrency(currency: string | undefined) {
    this._currency.next(currency);
  }

  setHmac(hmac: string | undefined) {
    this._hmac.next(hmac);
  }
  
}

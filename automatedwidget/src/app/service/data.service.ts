import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accessKey: string | undefined;
  host: string | undefined;
  marchandId: number | undefined;
  orderId: string | undefined;
  amount: number | undefined;
  currency: string | undefined;
  hmac: string | undefined;

  private _marchandId: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);
  private _accessKey: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  private _host: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  private _orderId: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  private _amount: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);
  private _currency: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  private _hmac: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

  marchandId$ = this._marchandId.asObservable();
  accessKey$ = this._accessKey.asObservable();
  host$ = this._host.asObservable();
  orderId$ = this._orderId.asObservable();
  amount$ = this._amount.asObservable();
  currency$ = this._currency.asObservable();
  hmac$ = this._amount.asObservable();

  constructor() { }

  setMarchandId(marchandId: number | undefined) {
    this._marchandId.next(marchandId);
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

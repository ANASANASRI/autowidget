import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _accessKey: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  private _host: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  private _merchantId: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);
  private _orderId: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  private _amount: BehaviorSubject<number | undefined> = new BehaviorSubject<number | undefined>(undefined);
  private _currency: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  private _hmac: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

  constructor() { }

  set accessKey(value: string | undefined) {
    this._accessKey.next(value);
  }

  get accessKey$(): Observable<string | undefined> {
    return this._accessKey.asObservable();
  }

  set host(value: string | undefined) {
    this._host.next(value);
  }

  get host$(): Observable<string | undefined> {
    return this._host.asObservable();
  }

  set merchantId(value: number | undefined) {
    this._merchantId.next(value);
  }

  get merchantId$(): Observable<number | undefined> {
    return this._merchantId.asObservable();
  }

  set orderId(value: string | undefined) {
    this._orderId.next(value);
  }

  get orderId$(): Observable<string | undefined> {
    return this._orderId.asObservable();
  }

  set amount(value: number | undefined) {
    this._amount.next(value);
  }

  get amount$(): Observable<number | undefined> {
    return this._amount.asObservable();
  }

  set currency(value: string | undefined) {
    this._currency.next(value);
  }

  get currency$(): Observable<string | undefined> {
    return this._currency.asObservable();
  }

  set hmac(value: string | undefined) {
    this._hmac.next(value);
  }

  get hmac$(): Observable<string | undefined> {
    return this._hmac.asObservable();
  }
}

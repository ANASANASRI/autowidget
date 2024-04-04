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
  merchantId$ = this._merchantId.asObservable();

  constructor() { }

  setMerchantId(merchantId: number | undefined) {
    this._merchantId.next(merchantId);
  }  
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PaymentMethod } from './../model/payment-method.model';

@Injectable({
  providedIn: 'root'
})
export class MerchantMethodsService {

  private baseUrl = 'http://localhost:8085/merchant'; 

  constructor(private http: HttpClient) {}

  getMerchantPaymentMethods(merchantId: number): Observable<PaymentMethod[]> {
    return this.http.get<PaymentMethod[]>(`${this.baseUrl}/methods/${merchantId}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error); 
  }
}

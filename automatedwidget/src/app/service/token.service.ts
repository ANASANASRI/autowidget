import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private baseUrl = 'http://localhost:8085/token'; 

  constructor(private http: HttpClient) {}

  generateToken(orderId: string, orderAmount: string, customerName: string, customerMail: string, currency: string, marchandId: string) {
    const url = `${this.baseUrl}/generate-token`;
    const params = {
      orderId: orderId,
      orderAmount: orderAmount,
      customerMail: customerMail,
      customerName: customerName,
      currency: currency,
      marchandId: marchandId
    };

    return this.http.get<string>(url, { params });
  }

}

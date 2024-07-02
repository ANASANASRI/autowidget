import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private baseUrl = 'http://localhost:8085'; 

  constructor(private http: HttpClient) {}

  generateToken(orderId: string, orderAmount: string, customerName: string, customerMail: string, currency: string, marchandId: string) {
    const url = `${this.baseUrl}/token/generate-token`;
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

  sendTokenToMail(customerName: string, customerMail: string, token: string){
    const url = `${this.baseUrl}/mail/send-token`;
    const params = {
      customerName: customerName,
      customerMail: customerMail,
      token: token
    };
    return this.http.post<string>(url, { params });
    
  };

}

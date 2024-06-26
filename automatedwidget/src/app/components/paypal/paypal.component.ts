import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements AfterViewInit {

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    this.loadPayPalScript().then(() => {
      this.renderPayPalButton();
    }).catch(err => {
      console.error('PayPal SDK could not be loaded.', err);
    });
  }

  loadPayPalScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://www.paypal.com/sdk/js?client-id=test&currency=USD';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('PayPal SDK script could not be loaded.'));
      document.body.appendChild(script);
    });
  }

  renderPayPalButton(): void {
    // @ts-ignore
    
    paypal.Buttons({
      style: {
        layout: 'horizontal',
        color:  'blue',
        label:  'pay',
        height: 40
      },
      createOrder: (data: any, actions: any) => {
        return this.http.post<any>('/api/paypal/create-payment', {
          amount: 1000.00, // Replace with the amount to be charged
          currency: 'MAD', // Replace with the currency
          description: 'Purchase description' // Replace with the description
        }).toPromise().then(order => {
          if (order && order.id) {
            return order.id;
          }
          throw new Error('Order creation failed');
        });
      },
      onApprove: (data: any, actions: any) => {
        return this.http.post<any>('/api/paypal/execute-payment', {
          paymentId: data.orderID,
          payerId: data.payerID
        }).toPromise().then(details => {
          alert('Transaction completed by ' + details.payer.name.given_name);
          // Handle successful payment here
        }).catch(err => {
          console.error('Payment execution error', err);
          // Handle payment execution error here
        });
      },
      onError: (err: any) => {
        console.error('PayPal Button Error', err);
      }
    }).render('#paypal-button-container');
    
  }
}

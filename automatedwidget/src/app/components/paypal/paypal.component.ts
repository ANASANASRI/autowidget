import { Component, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../service/data.service';

declare var paypal: any; // Declare PayPal variable

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements AfterViewInit {

  orderAmount: string;
  currency: string;
  orderId: string;
  marchandId: string;

  constructor(private http: HttpClient, public dataService: DataService) { 
    this.orderAmount = this.dataService.amount !== undefined ? String(this.dataService.amount) : ''; // Convert to string if not undefined
    this.currency = this.dataService.currency !== undefined ? String(this.dataService.currency) : ''; // Convert to string if not undefined
    this.orderId = this.dataService.orderId !== undefined ? String(this.dataService.orderId) : ''; // Convert to string if not undefined
    this.marchandId = this.dataService.marchandId !== undefined ? String(this.dataService.marchandId) : ''; // Convert to string if not undefined
  }

  ngAfterViewInit(): void {
    this.loadPayPalScript().then(() => {
      this.renderPayPalButton();
    }).catch(err => {
      console.error('PayPal SDK could not be loaded.', err);
    });
  }

  loadPayPalScript(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if (document.getElementById('paypal-sdk')) {
        resolve(); // Script is already loaded
        return;
      }
      const script = document.createElement('script');
      script.id = 'paypal-sdk';
      script.src = 'https://www.paypal.com/sdk/js?client-id=AQWbAzK6sUy3815sNoGI1uIXZ5Nwr2eP_Vcj6H16As6s4z6ckYbPs-bXaRYDmDSUESAL-FwWOvWiBcAS&currency=USD';
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('PayPal SDK script could not be loaded.'));
      document.body.appendChild(script);
    });
  }

  renderPayPalButton(): void {
    paypal.Buttons({
      style: {
        layout: 'horizontal',
        color: 'blue',
        label: 'pay',
        height: 40
      },
      createOrder: (data: any, actions: any) => {
        return this.http.post<any>('/demo/checkout/api/paypal/order/create/', {
          amount: this.orderAmount, 
          currency: this.currency, 
        }).toPromise().then(order => {
          if (order && order.id) {
            return order.id;
          }
          throw new Error('Order creation failed');
        }).catch(err => {
          console.error('Order creation error', err);
          throw err;
        });
      },
      onApprove: (data: any, actions: any) => {
        return this.http.post<any>('/demo/checkout/api/paypal/order/' + data.orderID + '/capture/', {
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

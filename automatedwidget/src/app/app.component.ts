import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './service/data.service'; // Import your DataService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute, private dataService: DataService) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.accessKey = params['access_key'];
      this.host = params['host'];
      this.merchantId = params['merchant_id'];
      this.orderId = params['order_id'];
      this.amount = params['amount'];
      this.currency = params['currency'];
      this.hmac = params['hmac'];
    });
  
  }
    // You can access variables from the service like this
    accessKey = this.dataService.accessKey;
    host = this.dataService.host;
    merchantId = this.dataService.merchantId;
    orderId = this.dataService.orderId;
    amount = this.dataService.amount;
    currency = this.dataService.currency;
    hmac = this.dataService.hmac;

  }
    
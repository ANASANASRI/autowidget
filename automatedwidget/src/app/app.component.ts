import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './service/data.service'; // Import your DataService

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  accessKey: string | undefined;
  host: string | undefined;
  merchantId: string | undefined;
  orderId: string | undefined;
  amount: number | undefined;
  currency: string | undefined;
  hmac: string | undefined;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.dataService.updateParams(params); // Update the data in the service
    });

    // You can access variables from the service like this
    this.accessKey = this.dataService.accessKey;
    this.host = this.dataService.host;
    this.merchantId = this.dataService.merchantId;
    this.orderId = this.dataService.orderId;
    this.amount = this.dataService.amount;
    this.currency = this.dataService.currency;
    this.hmac = this.dataService.hmac;
  }
}

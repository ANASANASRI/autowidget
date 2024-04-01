import { Component, HostListener ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  accessKey: string | undefined;
  host: string | undefined;
  merchantId: string | undefined;
  orderId: string | undefined;
  amount: number | undefined;
  currency: string | undefined;
  hmac: string | undefined;

  constructor(private route: ActivatedRoute) { }

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



  }

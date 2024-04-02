import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isMobile!: boolean; // Definite Assignment Assertion
//
  constructor(private dataService: DataService) { }

  // You can access variables from the service like this
  accessKey = this.dataService.accessKey;
  host = this.dataService.host;
  merchantId = this.dataService.merchantId;
  orderId = this.dataService.orderId;
  amount = this.dataService.amount;
  currency = this.dataService.currency;
  hmac = this.dataService.hmac;
//
  ngOnInit(): void {
    this.checkIfMobile();
    window.addEventListener('resize', () => {
      this.checkIfMobile();
    });

    //
    // You can access variables from the service like this
    this.accessKey = this.dataService.accessKey;
    this.host = this.dataService.host;
    this.merchantId = this.dataService.merchantId;
    this.orderId = this.dataService.orderId;
    this.amount = this.dataService.amount;
    this.currency = this.dataService.currency;
    this.hmac = this.dataService.hmac;
  }
  reloadPage() {
    // Reload the page
    window.location.reload();
  }

  toggleImage(hovering: boolean): void {
    if (window.innerWidth > 1023){
      if (hovering) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
      }
  
  }

  private checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 1023;
  }
}

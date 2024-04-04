import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service'; // Import DataService

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  merchantId: number | undefined;

  constructor(private dataService: DataService) { } // Inject DataService into TestComponent

  ngOnInit(): void {
    this.dataService.merchantId$.subscribe(merchantId => {
      console.log('Merchant ID from DataService:', merchantId); // Log merchantId value from DataService
      this.merchantId = merchantId;
      // You can perform calculations here with the updated merchantId
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  merchantId: number | undefined;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.merchantId$.subscribe(merchantId => {
      this.merchantId = merchantId;
      console.log('Merchant ID in TestComponent:', this.merchantId); // Log the merchantId value to the console
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service'; // Import DataService

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(public dataService: DataService) { } // Inject DataService into TestComponent

  ngOnInit(): void {
    console.log('Merchant ID from DataService:', this.dataService.merchantId); // Log merchantId value from DataService
  }
}
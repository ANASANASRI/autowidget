import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service'; // Import DataService

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  marchandId: number | undefined;

  constructor(private dataService: DataService) { } // Inject DataService into TestComponent

  ngOnInit(): void {
    this.dataService.marchandId$.subscribe(marchandId => {
      console.log('Marchand ID from DataService:', marchandId); // Log marchandId value from DataService
      this.marchandId = marchandId;
      // You can perform calculations here with the updated marchandId
    });
  }
}

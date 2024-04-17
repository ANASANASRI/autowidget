import { Component, HostListener ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private route: ActivatedRoute, public  dataService: DataService) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.dataService.accessKey = params['access_key'];
      this.dataService.host = params['host'];
      this.dataService.setMarchandId(params['marchand_id']);
      this.dataService.marchandId = params['marchand_id'];
      this.dataService.orderId = params['order_id'];
      this.dataService.amount = params['amount'];
      this.dataService.currency = params['currency'];
      this.dataService.hmac = params['hmac'];
      this.dataService.setMarchandId(params['marchand_id']);

    });
  
  }

  }

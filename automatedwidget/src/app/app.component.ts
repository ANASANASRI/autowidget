import { Component, HostListener ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'amanpay-front-w';

  accessKey: string | undefined;
  host: string | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      // Extract the accessKey and host from query parameters
      this.accessKey = params['accessKey'];
      this.host = params['host'];

      // Log the received data
      console.log('Access Key:', this.accessKey);
      console.log('Host:', this.host);
    });
  }
  }

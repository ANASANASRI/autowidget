import { Component, HostListener ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'amanpay-front-w';

  accessKey: string | undefined;
  host: string | undefined;

  ngOnInit() {
    this.receiveMessageFromWidget();
  }

  receiveMessageFromWidget() {
    window.addEventListener('message', (event) => {
      // Verify the sender origin
      if (event.origin === 'https://anasanasri.github.io') {
        // Access the data sent from the widget
        const data = event.data;
        console.log('Data received from widget:', data);
        
        // Process the received data here
        this.accessKey = data.accessKey;
        this.host = data.host;
      }
    });
  }
  }

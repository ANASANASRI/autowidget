import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amanpay-front-w';

  constructor() {
      this.receiveMessageFromWidget();
    }
  
    receiveMessageFromWidget() {
      window.addEventListener('message', (event) => {
        // Verify the sender origin
        if (event.origin === 'https://anasanasri.github.io/WidgetTest/') {
          // Access the data sent from the widget
          const data = event.data;
          console.log('Data received from widget:', data);
          
          // Process the received data here
          // For example, you can set them to Angular component variables
          // this.accessKey = data.accessKey;
          // this.host = data.host;
        }
      });
    }
  }

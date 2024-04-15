import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;
  imageUrl: string = '';

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.imageUrl = 'https://i.ibb.co/gFZGbV3/Logopng.png';
    this.toggleImage(false);
  }

  reloadPage() {
    window.location.reload();
  }

  toggleImage(hovering: boolean): void {
    if (window.innerWidth <= 1023) {
      this.imageUrl = 'https://i.ibb.co/7K50gbw/Pay-Pikpng.png';
    } else {
      if (hovering) {
        this.imageUrl = 'https://i.ibb.co/C08m5wn/Logohover.png';
      } else {
        this.imageUrl = 'https://i.ibb.co/gFZGbV3/Logopng.png';
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) { // Specify the type of the 'event' parameter
    this.toggleImage(false);
  }
}

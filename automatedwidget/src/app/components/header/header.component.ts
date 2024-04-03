import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Changed 'styleUrl' to 'styleUrls'
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false; // Initialize isMobile variable
  imageUrl: string = ''; // Declare imageUrl variable

  constructor(public dataService: DataService) { }
 
  ngOnInit(): void {
    this.checkIfMobile();
    this.setImageUrlForMobile();
    window.addEventListener('resize', () => {
      this.checkIfMobile();
    });
  }

  reloadPage() {
    // Reload the page
    window.location.reload();
  }

  toggleImage(hovering: boolean): void {
    if (window.innerWidth > 1023) {
      if (hovering) {
        this.imageUrl = 'https://i.ibb.co/yyyD2SV/Logohover.png'; // Change to your new image URL
      } else {
        this.imageUrl = 'https://i.ibb.co/gFZGbV3/Logopng.png'; // Restore to the default image URL
      }
    } 
  }
  
  private setImageUrlForMobile(): void {
    if (this.isMobile) {
      this.imageUrl = 'https://i.ibb.co/7K50gbw/Pay-Pikpng.png'; // Set the mobile image URL
    } else {
      this.imageUrl = 'https://i.ibb.co/gFZGbV3/Logopng.png'; // Set the default image URL
    }
  }
  
  
  private checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 1023;
  }
}

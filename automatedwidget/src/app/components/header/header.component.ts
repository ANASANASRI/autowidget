import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'] // Changed 'styleUrl' to 'styleUrls'
})
export class HeaderComponent implements OnInit ,AfterViewInit{
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
  ngAfterViewInit(): void {
    console.log('*************header**************:',this.dataService.merchantId,'/////');
    // Do nothing here, let setUpSlider be called when the data is ready
  }
  
  reloadPage() {
    // Reload the page
    window.location.reload();
  }

  toggleImage(hovering: boolean): void {
    if (window.innerWidth > 1023) {
      if (hovering) {
        this.imageUrl = 'https://i.ibb.co/yyyD2SV/Logohover.png'; 
      } else {
        this.imageUrl = 'https://i.ibb.co/gFZGbV3/Logopng.png'; 
      }
    } 
  }
  
  private setImageUrlForMobile(): void {
    if (this.isMobile) {
      this.imageUrl = 'https://i.ibb.co/7K50gbw/Pay-Pikpng.png'; 
    } else {
      this.imageUrl = 'https://i.ibb.co/gFZGbV3/Logopng.png';
    }
  }
  
  
  private checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 1023;
  }
}

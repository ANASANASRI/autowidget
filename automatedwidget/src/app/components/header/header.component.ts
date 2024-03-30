import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isMobile!: boolean; // Definite Assignment Assertion

  constructor() { }

  ngOnInit(): void {
    this.checkIfMobile();
    window.addEventListener('resize', () => {
      this.checkIfMobile();
    });
  }
  reloadPage() {
    // Reload the page
    window.location.reload();
  }

  toggleImage(hovering: boolean): void {
    if (window.innerWidth > 1023){
      if (hovering) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
      }
  
  }

  private checkIfMobile(): void {
    this.isMobile = window.innerWidth <= 1023;
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {

  selectedOptionIndex: number | undefined;

  handleOptionClicked(index: number) {
    console.log('Index of clicked option:', index);
    this.selectedOptionIndex = index;
    console.log('selected',this.selectedOptionIndex);
  }

  ////////////////////////////redirect close button//////////////////////////////////

  redirectUrl: string = "https://github.com/ANASANASRI/amanpay-front-w";

  constructor(private router: Router) {}

  redirectToUrl() {
    window.location.href = this.redirectUrl;
  }

}

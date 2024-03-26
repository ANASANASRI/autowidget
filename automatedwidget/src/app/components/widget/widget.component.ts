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

  redirectUrl: string = "file:///C:/Users/anasa/OneDrive/Desktop/testTheWidgetWt1/index.html";

  constructor(private router: Router) {}

  redirectToUrl() {
    window.location.href = this.redirectUrl;
  }

}

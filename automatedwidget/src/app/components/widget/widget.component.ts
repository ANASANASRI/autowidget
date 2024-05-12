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

  // redirectUrl: string = "https://anasanasri.github.io/WidgetTest/";
  redirectUrl: string = "file:///C:/Users/anasa/OneDrive/Desktop/testTheWidgetWt1/index.html";

  constructor(private router: Router) {}

  redirectToUrl() {
    window.location.href = this.redirectUrl;
  }

  ////////////////////////////enable move widget////////////////////////////////

  topPosition = 0;
  leftPosition = 0;
  isDragging = false;

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    const startX = event.clientX - this.leftPosition;
    const startY = event.clientY - this.topPosition;

    const onMouseMove = (moveEvent: MouseEvent) => {
      if (this.isDragging) {
        this.leftPosition = moveEvent.clientX - startX;
        this.topPosition = moveEvent.clientY - startY;
      }
    };

    const onMouseUp = () => {
      this.isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

}

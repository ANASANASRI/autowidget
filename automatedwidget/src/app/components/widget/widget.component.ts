import { Component } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent {

  selectedOptionIndex: number | undefined;

  handleOptionClicked(index: number) {
    console.log('Index of clicked option:', index);
    this.selectedOptionIndex = index;
    console.log('selected', this.selectedOptionIndex);
  }

  ////////////////////////////redirect close button//////////////////////////////////

  constructor() {}

  redirectToUrl() {
    window.parent.postMessage('closeWidget', '*');
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

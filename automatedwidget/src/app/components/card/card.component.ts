import { Component,OnInit } from '@angular/core';
import IMask from 'imask';

declare const functioncard : any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {
  
  ngOnInit(): void {
    functioncard(IMask);
  }

}

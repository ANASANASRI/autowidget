import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-cardsteps',
  templateUrl: './cardsteps.component.html',
  styleUrl: './cardsteps.component.css'
})
export class CardstepsComponent implements OnInit {
  cardForm: FormGroup | any; 
  emailForm: FormGroup| any; 

  constructor(private formBuilder: FormBuilder) { } 

  ngOnInit() {
    this.initializeForms(); 
  }

  initializeForms() {
    // Initialize name form with validation
    this.cardForm = this.formBuilder.group({
      //cardForm: ['', Validators.required] // First name field is required
    });

  }


  ///////////////
  reloadPage() {
    window.location.reload();
  }
  
}
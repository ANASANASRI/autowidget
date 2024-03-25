import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-cardsteps',
  templateUrl: './cardsteps.component.html',
  styleUrl: './cardsteps.component.css'
})
export class CardstepsComponent implements OnInit {
  nameForm: FormGroup | any; 
  emailForm: FormGroup| any; 

  constructor(private formBuilder: FormBuilder) { } 

  ngOnInit() {
    this.initializeForms(); 
  }

  initializeForms() {
    // Initialize name form with validation
    this.nameForm = this.formBuilder.group({
      firstName: ['', Validators.required] // First name field is required
    });

    // Initialize email form with validation
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]] 
    });
  }
}
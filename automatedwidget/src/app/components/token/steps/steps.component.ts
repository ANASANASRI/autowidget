import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'] 
})
export class StepsComponent implements OnInit {

  nameForm: FormGroup | any; 
  emailForm: FormGroup| any; 

  constructor(private _formBuilder: FormBuilder) { } 

  ngOnInit() {
    this.initializeForms(); 
  }

  initializeForms() {
    // Initialize name form with validation
    this.nameForm = this._formBuilder.group({
      firstName: ['', Validators.required] // First name field is required
    });

    // Initialize email form with validation
    this.emailForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]] 
    });
  }

  ////////
  isNameEditable: boolean = true;

  // makeNameEditable() {
  // this.isNameEditable = true;
  // }
  makeNameNoEditable() {
    this.isNameEditable = false;
  }


  ///////////////
  reloadPage() {
    window.location.reload();
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { DataService } from '../../../service/data.service';
import { TokenService } from '../../../service/token.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'] 
})
export class StepsComponent implements OnInit {
  nameForm: FormGroup | any; 
  emailForm: FormGroup | any; 
  isNameEditable: boolean = true;

  constructor(private _formBuilder: FormBuilder,private tokenService: TokenService,public dataService: DataService) {}

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

  makeNameNoEditable() {
    this.isNameEditable = false;
  }

  reloadPage() {
    window.location.reload();
  }


  generateToken() {
    const name = this.nameForm.get('firstName')?.value || ''; // Get name from form
    const email = this.emailForm.get('email')?.value || ''; // Get email from form
    console.log('asddsd'),
    console.log( name ,'//', email),
    console.log( this.dataService.orderId$ ,'//', this.dataService.amount$),
    this.dataService.orderId$.subscribe(orderId => {
      if (orderId) {
        this.dataService.amount$.subscribe(orderAmount => {
          if (orderAmount) {

            this.tokenService.generateToken(orderId.toString(), orderAmount.toString(), name, email).subscribe(
              token => {
                console.log('Token:', token); 
              },
              error => {
                console.log('token error response')
              }
            );
          } else {
            console.log('undefined orderAmount')
          }
        });
      } else {
        console.log('undefined orderId')
      }
    });
  }
  
}

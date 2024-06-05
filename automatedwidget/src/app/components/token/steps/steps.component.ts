import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { DataService } from '../../../service/data.service';
import { TokenService } from '../../../service/token.service';


@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'] 
})
export class StepsComponent implements OnInit {
  nameForm: FormGroup | any; 
  emailForm: FormGroup | any; 
  isNameEditable: boolean = true;
  token!: string;

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
    const orderId = this.dataService.orderId || ''; // Get orderId from DataService
    const orderAmount = this.dataService.amount || ''; // Get orderAmount from DataService
  
    this.tokenService.generateToken(orderId, orderAmount.toString(), name, email).subscribe(
      token => {
        this.token=token,
        console.log('Token:', token); 
      },
      error => {
        console.log('token error'); 
      }
    );
  }
  

}

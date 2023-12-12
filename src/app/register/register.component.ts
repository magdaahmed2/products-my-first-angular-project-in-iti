import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { Router } from '@angular/router';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  gameForm: FormGroup;

  constructor(private fb: FormBuilder , private router: Router) {
    
  
    this.gameForm = this.fb.group({
      Name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern(/^\S+$/),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,

          //Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"),
        ],
      ],

      username: [
        '', 
        [Validators.required, 
        Validators.pattern(/^\S*$/)
      ],
      ],
      password: [
        '', 
        [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*$#])[A-Za-z\d@*$#]{8,}$/)
      ],
    ],
    });
  }

  submitAddGameForm() {
    console.log(this.gameForm);
    this.router.navigate(['/login']);
  }
}
    

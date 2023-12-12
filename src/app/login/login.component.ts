import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {};
  product: any = {
    
   email: "",
   pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$",

    password: ""

    
  }
  
  submitAddGameForm(gameForm : any){
    console.log(this.product)
  //  console.log(gameForm)
  //  console.log(g
  this.router.navigate(['']);
}
}


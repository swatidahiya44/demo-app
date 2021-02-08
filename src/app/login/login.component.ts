import { Component, OnInit } from '@angular/core';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  login (){
    console.log(this.email)
    var a = "swati@gmail.com";
    var b = "pretty";
    if(a === this.email && b === this.password){
      this.router.navigate(['/home']);

    }
    else{
      alert("Invalid Email or Password");
      this.email = "";
      this.password = "";
    }


  
    
  }
}

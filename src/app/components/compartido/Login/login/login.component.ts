import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewUser(){
    this.router.navigateByUrl('/home')
  }

  viewShop(){
    this.router.navigateByUrl('/shop')
  }

  viewAdmin(){
    this.router.navigateByUrl('/admin')
  }

  viewDomicilio(){}

  viewRegistar(){}


}

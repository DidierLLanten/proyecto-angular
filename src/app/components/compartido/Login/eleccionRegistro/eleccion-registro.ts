import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-eleccion-login',
  templateUrl: './eleccion-registro.html',
})
export class EleccionRegistroComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  viewRegistroConsumer(){
    this.router.navigateByUrl('/registro')
  }

  viewRegistroDelivery(){
    this.router.navigateByUrl('/home')
  }

  viewRegistroShop(){
    this.router.navigateByUrl('/home')
  }

}

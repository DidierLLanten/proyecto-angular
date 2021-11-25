import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-delivery',
  templateUrl: './registro-delivery.component.html',
  styleUrls: ['./registro-delivery.component.css']
})
export class RegistroDeliveryComponent implements OnInit {

  usuario = {
    nombre: null,
    apellido: null,
    edad: null,
    cedula: null,
    correo: null,
    direccion: null,
    contrasena: null,
    photo: null,
    rol: null
  }

  constructor() { }

  ngOnInit(): void {
  }



}

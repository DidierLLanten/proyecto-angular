import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UsuarioService} from "../../../../../servicios/usuario.service";
import {Usuario} from "../../../../../modelos/usuario.model";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private _usuarioService: UsuarioService, private router: Router) {
  }

  ngOnInit(): void {
    // this.usuario = new Usuario();
  }

  guardarUsuario(formulario: NgForm) {
    if (formulario.valid) {
      console.log("Entro el muy hpt")
      console.log(formulario.value);
      let auxUsuario: Usuario = {...this.usuario};
      console.log(this.usuario.nombre +"enviando datos");
      this._usuarioService.agregarUsuario(auxUsuario);
      formulario.reset();
      // this.viewUser();
    } else {
      console.log("NOOO Entro el muy hpt")
      Object.values(formulario.controls).forEach(control => {
        console.log(control.markAsTouched());
        return;
      })

    }
  }

  viewUser() {
    this.router.navigateByUrl('/home')
  }

}

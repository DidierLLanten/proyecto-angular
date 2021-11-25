import {Component, OnInit} from '@angular/core';
import {Usuario} from "./modelos/usuario.model";
import {UsuarioService} from "./servicios/usuario.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SpaLicores';

  usuariosCentral: Usuario[] = [];

  constructor(private _usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this._usuarioService.obtenerUsuarios()
      .subscribe((usuarios: Usuario[]) => {
          this.usuariosCentral = usuarios;
          this._usuarioService.setUsuarios(usuarios);
        }
      );
    // this.usuariosCentral = this._usuarioService.usuariosService;
  }

}

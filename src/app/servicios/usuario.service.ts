import {Usuario} from "../modelos/usuario.model";
import {Injectable} from "@angular/core";
import {DataService} from "../data.service";
import {Framework} from "../../../../App-listado-p2/src/app/frameworks.model";

@Injectable()
export class UsuarioService {
  usuariosService: Usuario[] = [];

  constructor(private _dataService: DataService) {
  }

  setUsuarios(usuarios: Usuario[]){
    this.usuariosService = usuarios;
  }

  agregarUsuario(usuario: Usuario){
    console.log(usuario.nombre + "llegando a usuario service")
    this.usuariosService.push(usuario);
    this._dataService.guardarUsuario(this.usuariosService);

    /*console.log(this.usuariosService + " " + 'usuarios');
    if (this.usuariosService != null) {
      this.usuariosService.push(usuario);
    } else {
      // this.usuariosService = [new Framework(framework.nombre, framework.lenguaje)];
      this.usuariosService = [new Usuario()];
    }
    console.log(this.usuariosService + " " + 'frameworks');
    this._dataService.guardarUsuario(this.usuariosService);*/
  }

  obtenerUsuarios(){
    return this._dataService.obtenerUsuarios();
  }

  modificarUsuario(id: number, usuario: Usuario) {
    this.usuariosService[id] = {...usuario};
    this._dataService.updateUsuario(id, this.usuariosService[id]);
  }

  eliminarUsuario(id: number) {
    this.usuariosService.splice(id, 1);
    this._dataService.deleteUsuario(id)
  }

}

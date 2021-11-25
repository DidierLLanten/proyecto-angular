import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Usuario} from "./modelos/usuario.model";

@Injectable()
export class DataService {
  constructor(private _httpClient: HttpClient) {
  }

  //Guardar usuario
  guardarUsuario(usuarios: Usuario[]){
    console.log(usuarios.length + "llegando a usuario data service")
    console.log(usuarios[0].nombre + "llegando a usuario data service")
    this._httpClient.put('https://rappi-5d982-default-rtdb.firebaseio.com/usuarios.json', usuarios)
      .subscribe(
        response => console.log("Objeto usuarios guardado: " + response),
        error => console.log("Error al guardar los usuarios: " + error)
      );
  }

  //obtener Usuarios[]
  obtenerUsuarios() {
    return this._httpClient.get<Usuario[]>('https://rappi-5d982-default-rtdb.firebaseio.com/usuarios.json')
  }



  //Modificar usuario
  updateUsuario(id: number, usuario: Usuario) {
    let url: string = 'https://rappi-5d982-default-rtdb.firebaseio.com/usuarios/' + id + '.json'
    this._httpClient.put(url, usuario)
      .subscribe(
        response => console.log("Usuario modificado: " + response),
        error => console.log("Error al modificar: " + error)
      );
  }

  //Eliminar usuario
  deleteUsuario(id: number) {
    let url: string = 'https://rappi-5d982-default-rtdb.firebaseio.com/usuarios/' + id + '.json'
    this._httpClient.delete(url)
      .subscribe(
        response => console.log("Usuario eliminado: " + response),
        error => console.log("Error al eliminar usuario: " + error)
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../usuarios/usuarios';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url ="http://localhost:3000/usuarios";

  constructor(private _http: HttpClient) {}

  getUsuarios(){
    return this._http.get<Usuarios[]>(this.url);
  }

  insertarUsuario(usuario: Usuarios){
    return this._http.post(this.url, usuario);
  }

  eliminarUsuario(id:number){
    return this._http.delete(this.url + "/" + id);
  }

  updateUsuario(usuario: Usuarios){
    return this._http.put(this.url + "/"+ usuario.id, usuario);
  }
}

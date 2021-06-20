import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleados } from '../empleados/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  url ="http://localhost:3000/empleados";

  constructor(private _http: HttpClient) { }

  getFuncionarios(){
    return this._http.get<Empleados[]>(this.url);
  }

  insertarFuncionario(empleados: Empleados){
    return this._http.post(this.url, empleados);
  }

  eliminarFuncionario(id: number){
    return this._http.delete(this.url + "/" + id);
  }

  updateFuncionario(empleados: Empleados){
    return this._http.put(this.url + "/"+ empleados.id, empleados);
  } 
}

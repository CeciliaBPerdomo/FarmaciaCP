import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicamentos } from '../medicamentos/medicamentos';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {
  url ="http://localhost:3000/medicamentos";

  constructor(private _http: HttpClient) { }

  getMedicamentos(){
    return this._http.get<Medicamentos[]>(this.url);
  }

  insertarMedicamento(medicamento: Medicamentos){
    return this._http.post(this.url, medicamento);
  }

  eliminarMedicamento(id:number){
    return this._http.delete(this.url + "/" + id);
  }

  updateMedicamento(medicamento: Medicamentos){
    return this._http.put(this.url + "/"+ medicamento.id, medicamento);
  }

}

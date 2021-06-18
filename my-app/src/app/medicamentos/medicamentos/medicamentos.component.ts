import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import { Medicamentos } from '../medicamentos';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {
medicamentos: Medicamentos [] = [];   

/*@Input() medicamentos:Medicamentos = new Medicamentos();*/

  columnas = [
    '', /* Imagen*/
    'Nombre', 
    'Descripción',
    'Precio',
    'Cantidad',
    '', /* Modificar */
    '' /* Eliminar */
  ]

  nombreMedicamento = "";
  backup: Medicamentos[] = [];
  showTrash = false;

  constructor(private medicamentosServices: MedicamentosService, private _router: Router) {}

  ngOnInit(): void { /* Lista los médicamentos */
    this.medicamentosServices.getMedicamentos().subscribe(response =>{
      this.medicamentos = response;
      this.backup = this.medicamentos;
    })
  }

  /* Filtra por nombre de médicamento */
  filtrar(){
    let filteredMedicamentos = this.medicamentos.filter(medicamentos =>{
      return medicamentos.nombre.toLowerCase() === this.nombreMedicamento.toLowerCase();
    })
    this.medicamentos = filteredMedicamentos;
  }

  limpiar(){
    if(this.nombreMedicamento.length === 0){
      this.medicamentos = this.backup;
    }
  }

  borrar(){
    this.nombreMedicamento = "";
    this.showTrash = false;
    this.medicamentos = this.backup;
  }

  handle(){
    this.showTrash = true;
  }

  /* Borra medicamentos*/
  deleteMedicamento(id: number){
    this.medicamentosServices.eliminarMedicamento(id).subscribe((response: any)=>{
      console.log(response)
      const newItems = this.medicamentos.filter((item: any)=>{
        return item.id !== id
      });
      this.medicamentos = newItems;
    })    
  }

  /* Actualiza la información de un medicamento */
  updateMedicamento(medicamento: Medicamentos){
    this._router.navigate(["/nuevoMedicamento", medicamento.id])
  } 

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import { Medicamentos } from '../medicamentos';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit {
  medicamento: Medicamentos = new Medicamentos();

  constructor(private _medicamentosService: MedicamentosService, private _activedRoute: ActivatedRoute) { }

  id = 0; 

  ngOnInit(): void {
    this._activedRoute.paramMap.subscribe((item: any)=>{
      this.id = item.get('id'); 
      if(this.id > 0){
        this._medicamentosService.getMedicamentos().subscribe((response: Medicamentos[])=>{
          const item = response.filter((med: any)=>{
            return med.id == this.id;
          })[0];
          this.medicamento = item;
        })
      }
    })
  }

  save(event: any){
    if(this.id > 0){
      // Edito el medicamento. 
      this._medicamentosService.updateMedicamento(this.medicamento).subscribe((response: any)=>{
        console.log(response);
        /*this.cleanFormData();*/
      })
    } else {
      // Creo el nuevo medicamento
      this._medicamentosService.insertarMedicamento(this.medicamento).subscribe((response: any)=>{
        console.log(response);
        this.cleanFormData();
      })
    }
  }

  cleanFormData(){
    this.medicamento.id = 0;
    this.medicamento.nombre = "";
    this.medicamento.descripcion = "";
    this.medicamento.precio = 0;
    this.medicamento.cantidad = 0;
    this.medicamento.imagen = "";
  }
}

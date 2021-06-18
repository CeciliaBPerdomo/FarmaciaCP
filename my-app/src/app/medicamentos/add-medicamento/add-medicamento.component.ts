import { Component, OnInit } from '@angular/core';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import { Medicamentos } from '../medicamentos';

@Component({
  selector: 'app-add-medicamento',
  templateUrl: './add-medicamento.component.html',
  styleUrls: ['./add-medicamento.component.css']
})
export class AddMedicamentoComponent implements OnInit {
  medicamento: Medicamentos = new Medicamentos();

  constructor(private _medicamentosService: MedicamentosService) { }

  ngOnInit(): void {
  }

  save(event: any){
    this._medicamentosService.insertarMedicamento(this.medicamento).subscribe((response: any)=>{
      console.log(response);
      this.cleanFormData();
    })
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

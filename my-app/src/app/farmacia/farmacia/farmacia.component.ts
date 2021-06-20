import { Component, Input, OnInit } from '@angular/core';
import { MedicamentosService } from 'src/app/services/medicamentos.service';
import { Medicamentos } from 'src/app/medicamentos/medicamentos';

@Component({
  selector: 'app-farmacia',
  templateUrl: './farmacia.component.html',
  styleUrls: ['./farmacia.component.css']
})

export class FarmaciaComponent implements OnInit {
  medicamento: Medicamentos[] = [];
 
  constructor(private _medicamentoService: MedicamentosService) { }

  ngOnInit(): void {
    this._medicamentoService.getMedicamentos().subscribe(response=>{
      console.log("Response:", response);
      this.medicamento = response;
    })
  }

}

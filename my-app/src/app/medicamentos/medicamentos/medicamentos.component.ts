import { Component, Input, OnInit } from '@angular/core';
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
    'Id', 
    'Nombre', 
    'Descripción',
    'Precio',
    'Cantidad'
  ]

  constructor(private medicamentosServices: MedicamentosService) { }

  ngOnInit(): void {
    this.medicamentosServices.getMedicamentos().subscribe(response =>{
      console.log("Si este response: ", response)
      this.medicamentos = response;
    })
  }

}

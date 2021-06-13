import { Component, Input, OnInit } from '@angular/core';
import { Medicamentos } from '../medicamentos';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {

@Input() medicamentos:Medicamentos = new Medicamentos();

  columnas = [
    '', /* Imagen*/
    'Id', 
    'Nombre', 
    'Descripción',
    'Precio',
    'Cantidad'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

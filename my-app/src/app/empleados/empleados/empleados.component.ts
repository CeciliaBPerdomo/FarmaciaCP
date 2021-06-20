import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  columnas = [
    '', /* Imagen*/
    'Nombre completo', 
    'Dirección',
    'Telefono',
    'Correo electrónico',
    'Fecha de nacimiento',
    'Fecha de ingreso',
    '', /* Modificar */
    '' /* Eliminar */
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

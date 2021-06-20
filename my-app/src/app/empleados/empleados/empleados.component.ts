import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleados } from '../empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleados[] = [];

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

  backup: Empleados[] = [];
  nombreEmpleado = "";
  showTrash = false;

  constructor(private empleadosServices: EmpleadosService, private _router: Router) { }

  ngOnInit(): void { /* Lista los empleados */ 
    this.empleadosServices.getFuncionarios().subscribe(response => {
      this.empleados = response;
      this.backup = this.empleados;
    });
  }

  /* Filtra por nombre del funcionario */
  filtrar(){
    let filteredEmpleados = this.empleados.filter(empleados =>{
      return empleados.nombre.toLowerCase() === this.nombreEmpleado.toLowerCase();
    })
    this.empleados = filteredEmpleados;
  }

  limpiar(){
    if(this.nombreEmpleado.length === 0){
      this.empleados = this.backup;
    }
  }

  borrar(){
    this.nombreEmpleado = "";
    this.showTrash = false;
    this.empleados = this.backup;
  }

  handle(){
    this.showTrash = true;
  }

  /* Actualiza la información del empleado */
  updateEmpleado(empleado: Empleados){
    this._router.navigate(["/nuevoEmpleado", empleado.id])
  }

  /* Borra un empleado */
  deleteEmpleado(id: number){
    this.empleadosServices.eliminarFuncionario(id).subscribe((response: any)=>{
      console.log("Borra: ", response);
      const newItems = this.empleados.filter((item: any)=>{
        return item.id !== id
      });
      this.empleados = newItems;
    })
  }
  
}

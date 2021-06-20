import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { Empleados } from '../empleados';

@Component({
  selector: 'app-add-empleados',
  templateUrl: './add-empleados.component.html',
  styleUrls: ['./add-empleados.component.css']
})
export class AddEmpleadosComponent implements OnInit {
  empleado: Empleados = new Empleados();

  constructor(private _empleadosService: EmpleadosService, private _activedRoute: ActivatedRoute) { }

  id = 0; 
  formValid = true;

  ngOnInit(): void {
    /*this._activedRoute.paramMap.subscribe((item: any)=>{
      this.id = item.get('id'); 
      if(this.id > 0){
        this._medicamentosService.getMedicamentos().subscribe((response: Medicamentos[])=>{
          const item = response.filter((med: any)=>{
            return med.id == this.id;
          })[0];
          this.medicamento = item;
        })
      }
    }*/
    this._activedRoute.paramMap.subscribe((item: any)=>{
    this.id = item.get('id');
    if(this.id > 0){
      this._empleadosService.getFuncionarios().subscribe((response: Empleados[])=>{
        const item = response.filter((func: any)=>{
          return func.id == this.id;
        })[0];
        this.empleado = item;
      })
    }
    })
  }

  save(event: any){
    if(this.id > 0){
      // Edito el funcionario. 
      this._empleadosService.updateFuncionario(this.empleado).subscribe((response: any)=>{
        console.log("Edito: ", response);
        this.cleanFormData();
      })
    } else {
      // Creo el nuevo funcionario
      this._empleadosService.insertarFuncionario(this.empleado).subscribe((response: any)=>{
        console.log("Guardo: ", response);
        this.cleanFormData();
      })
    }
  }

  cleanFormData(){
    this.empleado.id = 0;
    this.empleado.direccion = "";
    this.empleado.fechaIng = "";
    this.empleado.fechaNac = "";
    this.empleado.imagen = "";
    this.empleado.mail = "";
    this.empleado.nombre = "";
    this.empleado.telefono = "";
  }

}

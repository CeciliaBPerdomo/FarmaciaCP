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
    this.isFormValid();
    this.formValid = this.validation.requeridoNombre.isValid && this.validation.requeridoDireccion.isValid && this.validation.requeridoFechaIng.isValid && this.validation.requeridoFechaNac.isValid && this.validation.imagen.isValid ? true: false;

    console.log("Valido: ", this.formValid);

    if(!this.formValid){  
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
  }

  /* Limpia el formulario */
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

  /* Validación del formulario */
  validation = {
    requeridoNombre: {
      isValid: false,
      eMessage: ""
    }, 
    requeridoDireccion: {
      isValid: false,
      eMessage: ""
    }, 
    requeridoFechaNac: {
      isValid: false,
      eMessage: ""
    }, 
    requeridoFechaIng: {
      isValid: false,
      eMessage: ""
    }, 
    imagen: {
      isValid: false,
      eMessage: ""
    }
  }


  isValid(campo: string):boolean{
    let result = true; 
    switch (campo) {
      case "nombre":
        /* Validacion del nombre*/
        this.validation.requeridoNombre.isValid = false;
        if(this.empleado.nombre.length === 0){
          this.validation.requeridoNombre.eMessage = "El nombre del funcionario es obligatorio."
          this.validation.requeridoNombre.isValid = true;
        }
        if(this.empleado.nombre.length < 5 || this.empleado.nombre.length > 75){
          this.validation.requeridoNombre.eMessage = "El nombre del funcionario debe contener entre 5 y 75 caracteres."
          this.validation.requeridoNombre.isValid = true;
        }
        break;

        case "direccion":
        /* Validacion de la dirección*/
        this.validation.requeridoDireccion.isValid = false;
        if(this.empleado.direccion.length === 0){
          this.validation.requeridoDireccion.eMessage = "La dirección del funcionario es obligatoria."
          this.validation.requeridoDireccion.isValid = true;
        }
        if(this.empleado.direccion.length < 5 || this.empleado.direccion.length > 100){
          this.validation.requeridoDireccion.eMessage = "El nombre del funcionario debe contener entre 5 y 100 caracteres."
          this.validation.requeridoDireccion.isValid = true;
        }
        break;

        case "imagen":
          /* Validacion de la imagen*/
          this.validation.imagen.isValid = false;
          if(this.empleado.imagen.length === 0){
            this.validation.imagen.eMessage = "La URL de la imagen del funcionario es obligatoria."
            this.validation.imagen.isValid = true;
          }
          break;

          case "fechaIng":
            this.validation.requeridoFechaIng.isValid = false;
            if(this.empleado.fechaIng.length === 0){
              this.validation.requeridoFechaIng.eMessage = "La fecha de ingreso es obligatoria."
              this.validation.requeridoFechaIng.isValid = true;
            }
          break;

          case "fechaNac":
            this.validation.requeridoFechaNac.isValid = false;
            if(this.empleado.fechaNac.length === 0){
              this.validation.requeridoFechaNac.eMessage = "La fecha de nacimiento es obligatoria."
              this.validation.requeridoFechaNac.isValid = true;
            }
          break;
      default:
        break;
    }
    return result;
  }

  isFormValid(){
    ['nombre', 'direccion', 'fechaNac', 'fechaIng', 'imagen'].forEach(el=>{
      this.isValid(el);
    });
  }
}

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
  formValid = true;

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

    this.isFormValid();
    this.formValid = this.validation.requeridoNombre.isValid && this.validation.cantidadMayoraCero.isValid && this.validation.descripcion.isValid && this.validation.imagen.isValid && this.validation.precioMayoraCero.isValid ? true: false;
    
    console.log(this.formValid);

    if(!this.formValid){
      if(this.id > 0){
        // Edito el medicamento. 
        this._medicamentosService.updateMedicamento(this.medicamento).subscribe((response: any)=>{
          console.log(response);
          this.cleanFormData();
        })
      } else {
        // Creo el nuevo medicamento
        this._medicamentosService.insertarMedicamento(this.medicamento).subscribe((response: any)=>{
          console.log(response);
          this.cleanFormData();
        })
      }
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

  /* Validación del formulario */
  validation = {
    requeridoNombre: {
      isValid: false,
      eMessage: ""
    }, 
    precioMayoraCero: {
      isValid: false,
      eMessage: ""
    }, 
    descripcion: {
      isValid: false,
      eMessage: ""
    }, 
    cantidadMayoraCero: {
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
        if(this.medicamento.nombre.length === 0){
          this.validation.requeridoNombre.eMessage = "El nombre del medicamento es obligatorio."
          this.validation.requeridoNombre.isValid = true;
        }
        if(this.medicamento.nombre.length < 3 || this.medicamento.nombre.length > 75){
          this.validation.requeridoNombre.eMessage = "El nombre del medicamento debe contener entre 3 y 75 caracteres."
          this.validation.requeridoNombre.isValid = true;
        }
        break;
      
      case "precio": 
        /* Validacion del precio*/
        this.validation.precioMayoraCero.isValid = false;
        if(this.medicamento.precio == 0){
        this.validation.precioMayoraCero.eMessage = "El precio del medicamento debe ser mayor a cero."
        this.validation.precioMayoraCero.isValid = true;
        }
        break; 

        case "cantidad":
          /* Validacion de la cantidad*/
          this.validation.cantidadMayoraCero.isValid = false;
          if(this.medicamento.cantidad == 0){
            this.validation.cantidadMayoraCero.eMessage = "La cantidad del medicamento debe ser mayor a cero."
            this.validation.cantidadMayoraCero.isValid = true;
          }
          break; 

        case "descripcion":
          /* Validacion de la descripción*/
          this.validation.descripcion.isValid = false;
          if(this.medicamento.descripcion.length === 0){
            this.validation.descripcion.eMessage = "La descripción del medicamento es obligatoria."
            this.validation.descripcion.isValid = true;
          }
          if(this.medicamento.descripcion.length < 3 || this.medicamento.descripcion.length > 150){
            this.validation.descripcion.eMessage = "La descripción del medicamento debe contener entre 3 y 150 caracteres"
            this.validation.descripcion.isValid = true;
          }
          break;

        case "imagen":
          /* Validacion de la imagen*/
          this.validation.imagen.isValid = false;
          if(this.medicamento.imagen.length === 0){
            this.validation.imagen.eMessage = "La URL de la imagen del medicamento es obligatoria."
            this.validation.imagen.isValid = true;
          }
          break;

      default:
        break;
    }   
    return result;
  }

  isFormValid(){
    ['nombre', 'descripcion', 'precio', 'cantidad', 'imagen'].forEach(el=>{
      this.isValid(el);
    });
  }
}

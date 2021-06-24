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
  backup: Medicamentos[] = [];

  showTrash = false;
  nombreMedicamento = "";
  desde = 0;
  hasta = 0;
  qty = 0;

  cartMed = {
    cantidad: 0,
    id: 0,
    nombre: "",
    precio: 0,
    imagen: ""
  }

  constructor(private _medicamentoService: MedicamentosService) { }

  ngOnInit(): void {
    this._medicamentoService.getMedicamentos().subscribe(response=>{
      console.log("Response:", response);
      this.medicamento = response;
      this.backup = this.medicamento;
    })
  }

  /* Filtra los médicamentos */
  filtrar(){
    if(this.nombreMedicamento.length > 0){ /*Filtra por el nombre*/
      let filteredMedicamentos = this.medicamento.filter(medicamento =>{
        return medicamento.nombre.toLowerCase() === this.nombreMedicamento.toLowerCase();
      })
      this.medicamento = filteredMedicamentos;
    };

    if(this.desde >= 1 && this.hasta >= 1){
      let filteredMedicamentos = this.medicamento.filter(medicamento =>{
        return medicamento.precio >= this.desde && medicamento.precio <= this.hasta;
      })
      this.medicamento = filteredMedicamentos;
    }
  }

  limpiar(){
    if(this.nombreMedicamento.length === 0){
      this.medicamento = this.backup;
    }
  }

  borrar(){
    this.nombreMedicamento = "";
    this.desde = 0;
    this.hasta = 0; 
    this.showTrash = false;
    this.medicamento = this.backup;
  }

  handle(){
    this.showTrash = true;
  }

  plus(){ /* Agrega uno */
    this.qty++;
  }

  less(){ /*Resta uno*/
    this.qty = this.qty > 0 ? this.qty -1: 0;
  }

  /*Agrega al carrito */
  addToCart(medicamento: Medicamentos){
    this.cartMed.id = medicamento.id;
    this.cartMed.nombre = medicamento.nombre;
    this.cartMed.precio = medicamento.precio;
    this.cartMed.imagen = medicamento.imagen;
    this.cartMed.cantidad = this.qty;

    sessionStorage.setItem("medicamento" + medicamento.id, JSON.stringify(this.cartMed))
  }
}

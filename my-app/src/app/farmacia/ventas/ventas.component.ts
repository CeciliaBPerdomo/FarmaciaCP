import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  medicamento: string [] = []; 
  cartMed: any = [];

  columnas = [
    '', /*Imagen*/
    'Nombre',
    'Cantidad',
    'Precio'
  ]

  constructor() { }

  ngOnInit(): void {
    this.medicamento = Object.keys(sessionStorage);
    this.medicamento.forEach((el: any) => {
      const item = sessionStorage.getItem(el);
      if(item != null){
        this.cartMed.push(JSON.parse(item));
      }
    });
  }

}

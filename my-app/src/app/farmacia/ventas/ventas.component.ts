import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  medicamento: string [] = []; 
  cartMed: any = [];
  total = 0;
  cambio = 0;
  recibido = 0;

  cambioDebe = 'cambio';

  columnas = [
    '', /*Imagen*/
    'Nombre',
    'Cantidad',
    'Precio',
    ''/* Eliminar */
  ]

  constructor() { }

  ngOnInit(): void {
    this.medicamento = Object.keys(sessionStorage);
    this.medicamento.forEach((el: any) => {
      const item = sessionStorage.getItem(el);
      if(item != null){
        let obj = JSON.parse(item);
        this.cartMed.push(JSON.parse(item));
        /*Calculo del total de la caja*/
        this.total += obj.cantidad * obj.precio
      }
    });
  }

  handleCambio(){
    this.cambio = this.recibido - this.total;
    this.cambioDebe = this.cambio >= 0 ? "cambio" : "debe"; 
  }

  plus(med: any){
    let temp = this.cartMed.map((element:any)=> {
      if (element.id === med.id){
        element.cantidad ++;
        this.total += element.precio;
        return element
      }else {
        return element;
      }
      this.cartMed = temp;
    });
  }

  less(med: any){
    if (med.cantidad === 1){
      let borrar = this.cartMed.filter((element: any)=> {
        return element.id !== med.id
      })
      this.total -= med.precio;
      this.cartMed = borrar;
    } else {
      let temp = this.cartMed.map((element:any)=> {
        if (element.id === med.id){
          element.cantidad --;
          this.total -= element.precio;
          return element;
        }else{
          return element;
        }
        this.cartMed = temp;
      });
    }
  }

  finalizarCompra(){
    this.total = 0;
    this.cambio = 0; 
    this.recibido = 0;
    this.cambioDebe = 'cambio';
    this.cartMed = []; 
    
    this.medicamento.forEach((el:any) => {
      const item = sessionStorage.removeItem(el);
    });
  }

}

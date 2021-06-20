import { Component, OnInit } from '@angular/core';
import { MedicamentosService } from './services/medicamentos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';

  menu = [
    {
      nombre: "Ventas",
      enlace: "/ventas",
      class: "nav-link"
    }, 
    {
      nombre: "Envíos",
      enlace: "/envios",
      class: "nav-link"
    }, 
    {
      nombre: "Medicamentos",
      enlace: "/medicamentos",
      class: "nav-link"
    },
    {
      nombre: "Funcionarios",
      enlace: "/empleados",
      class: "nav-link"
    },
    {
      nombre: "Usuarios",
      enlace: "/usuarios",
      class: "nav-link"
    }
  ]

  constructor( ){

  }
  ngOnInit(): void{
  }
}

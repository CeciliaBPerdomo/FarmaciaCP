import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from 'src/app/usuarios/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuarios[] = []

  columnas = [
    'User n°', 
    'Alias', 
    'Constraseña',
    'Role',
    '', /* Modificar */
    '' /* Eliminar */
  ]

  backup: Usuarios[] = []

  constructor(private usuariosServices: UsuariosService, private _router: Router) { }

  ngOnInit(): void {
    /* Lista los usuarios */ 
    this.usuariosServices.getUsuarios().subscribe(response => {
      this.usuarios = response;
      this.backup = this.usuarios;
    });
  }

updateUsuario(item: Usuarios){

}

deleteUsuario(id: number){/*
  this.usuariosServices.eliminarUsuario(id).subscribe((response: any)=>{
    console.log("Borra: ", response);
    const newItems = this.usuarios.filter((item: any)=>{
      return item.id !== id
    });
    this.usuarios = newItems;*/
}
}

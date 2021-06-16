import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados/empleados.component';
import { UsuariosComponent } from './empleados/usuarios/usuarios.component';
import { EnviosComponent } from './farmacia/envios/envios.component';
import { FarmaciaComponent } from './farmacia/farmacia/farmacia.component';
import { VentasComponent } from './farmacia/ventas/ventas.component';
import { LoginComponent } from './login/login.component';
import { MedicamentosComponent } from './medicamentos/medicamentos/medicamentos.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent}, 
  {path: 'medicamentos', component: MedicamentosComponent},
  {path: 'farmacia', component: FarmaciaComponent}, 
  {path: 'ventas', component: VentasComponent },
  {path: 'envios', component: EnviosComponent}, 
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'usuarios', component: UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

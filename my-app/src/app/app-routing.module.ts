import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpleadosComponent } from './empleados/add-empleados/add-empleados.component';
import { EmpleadosComponent } from './empleados/empleados/empleados.component';
import { UsuariosComponent } from './empleados/usuarios/usuarios.component';
import { EnviosComponent } from './farmacia/envios/envios.component';
import { FarmaciaComponent } from './farmacia/farmacia/farmacia.component';
import { VentasComponent } from './farmacia/ventas/ventas.component';
import { LoginComponent } from './login/login.component';
import { AddMedicamentoComponent } from './medicamentos/add-medicamento/add-medicamento.component';
import { MedicamentosComponent } from './medicamentos/medicamentos/medicamentos.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent}, 
  {path: 'medicamentos', component: MedicamentosComponent},
  {path: 'farmacia', component: FarmaciaComponent}, 
  {path: 'ventas', component: VentasComponent },
  {path: 'envios', component: EnviosComponent}, 
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'nuevoMedicamento/:id', component: AddMedicamentoComponent},
  {path: 'nuevoEmpleado/:id', component: AddEmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

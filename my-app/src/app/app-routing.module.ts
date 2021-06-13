import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MedicamentosComponent } from './medicamentos/medicamentos/medicamentos.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent}, 
  {path: 'medicamentos', component: MedicamentosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

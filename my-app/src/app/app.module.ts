import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MedicamentosComponent } from './medicamentos/medicamentos/medicamentos.component';
import { FarmaciaComponent } from './farmacia/farmacia/farmacia.component';
import { VentasComponent } from './farmacia/ventas/ventas.component';
import { EnviosComponent } from './farmacia/envios/envios.component';
import { EmpleadosComponent } from './empleados/empleados/empleados.component';
import { UsuariosComponent } from './empleados/usuarios/usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MedicamentosComponent,
    FarmaciaComponent,
    VentasComponent,
    EnviosComponent,
    EmpleadosComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

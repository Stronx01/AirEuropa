import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './componets/home/home.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { FlotaComponent } from './componets/flota/flota.component';
import { EquipoComponent } from './componets/equipo/equipo.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactoComponent } from './componets/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FlotaComponent,
    EquipoComponent,
    ContactoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

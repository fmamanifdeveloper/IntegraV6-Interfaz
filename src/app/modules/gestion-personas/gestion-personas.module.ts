import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionPersonasRoutingModule } from './gestion-personas-routing.module';
import { GestionPersonasComponent } from './gestion-personas.component';



@NgModule({
  declarations: [
    GestionPersonasComponent
  ],
  imports: [
    CommonModule,
    GestionPersonasRoutingModule,
    NgModule
  ]
})
export class GestionPersonasModule { }

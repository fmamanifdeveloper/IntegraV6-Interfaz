import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperacionesComponent } from './operaciones.component';
import { OperacionesRoutingModule } from './operaciones-routing.module';



@NgModule({
  declarations: [
    OperacionesComponent
  ],
  imports: [
    CommonModule,
    OperacionesRoutingModule,
    NgModule
  ]
})
export class OperacionesModule { }

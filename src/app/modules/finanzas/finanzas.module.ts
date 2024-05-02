import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanzasRoutingModule } from './finanzas-routing.module';
import { FinanzasComponent } from './finanzas.component';



@NgModule({
  declarations: [
    FinanzasComponent
  ],
  imports: [
    CommonModule,
    FinanzasRoutingModule,
    NgModule
  ]
})
export class FinanzasModule { }

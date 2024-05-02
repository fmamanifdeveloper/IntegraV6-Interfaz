import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComercialRoutingModule } from './comercial-routing.module';
import { ComercialComponent } from './comercial.component';
import { AgendaComponent } from './components/gestion-comercial/agenda/agenda.component';



@NgModule({
  declarations: [
    ComercialComponent,
    AgendaComponent
  ],
  imports: [
    CommonModule,
    ComercialRoutingModule,
    NgModule
  ]
})
export class ComercialModule { }

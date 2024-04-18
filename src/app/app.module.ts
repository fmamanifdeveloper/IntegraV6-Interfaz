import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComercialRoutingModule } from './modules/comercial/comercial-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComercialRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

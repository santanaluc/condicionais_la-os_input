import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TabuadaComponent } from './tabuada/tabuada.component';
import { VeriparimpaComponent } from './veriparimpa/veriparimpa.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, TabuadaComponent, VeriparimpaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

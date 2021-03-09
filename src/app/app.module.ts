import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { TabuadaComponent } from "./tabuada/tabuada.component";
import { VeriparimpaComponent } from "./veriparimpa/veriparimpa.component";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "tabuada", component: TabuadaComponent }, {
        path: "veriparimpa", component: VeriparimpaComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    TabuadaComponent,
    VeriparimpaComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

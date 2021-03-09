import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-veriparimpa",
  templateUrl: "./veriparimpa.component.html",
  styleUrls: ["./veriparimpa.component.css"]
})
export class VeriparimpaComponent implements OnInit {
  numero = 0;

  constructor() {
    this.numero;
  }

  getNumber() {
    return this.numero;
  }

  isPar() {
    // if (this.getNumber() % 2 == 0) {
    //   return "Par";
    // }
    return this.getNumber() % 2 == 0;
  }

  ngOnInit() {}
}

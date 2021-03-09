import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tabuada",
  templateUrl: "./tabuada.component.html",
  styleUrls: ["./tabuada.component.css"]
})
export class TabuadaComponent implements OnInit {
  n: number;

  constructor() {
    this.n = 1;
  }

  getTabuada() {
    let i: number = 0;
    while (i <= 10) {
      let conta: number = i * this.n;
      return conta;
    }
  }

  getTabuadaList() {
    let list: number[] = [];

    for (let i = 0; i <= 10; i++) list.push(this.getTabuada());

    return list;
  }

  ngOnInit() {}
}

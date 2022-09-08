import { Component, OnInit } from '@angular/core';
import {Avion} from "../../Aviones";
import {AVIONES} from "../../mockAviones";

@Component({
  selector: 'app-flota',
  templateUrl: './flota.component.html',
  styleUrls: ['./flota.component.css']
})
export class FlotaComponent implements OnInit {

  liAvion= AVIONES;
  av: String = ""
  selected?: Avion;

  mostrarPlane(){
    this.av="avion";
  }
  quitarPlane(){
    this.av="";
  }
  constructor() { }

  ngOnInit(): void {
  }

}

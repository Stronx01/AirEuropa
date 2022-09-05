import { Component, OnInit } from '@angular/core';
import {Staff} from "../../Staff";
import {EQUIPO} from "../../mockStaff";

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  equipo= EQUIPO;
  stf: String = "";
  selectedStaff?: Staff;

  mostrarStaff(){
    this.stf="equipo"
  }
  quitarStaff(){
    this.stf="";
  }

  constructor() {

  }

  ngOnInit(): void {
  }



}


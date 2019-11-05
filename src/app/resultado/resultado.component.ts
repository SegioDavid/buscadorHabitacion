import { PeticionControllerService } from './../shared/peticion-controller.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../core/model/categoria';
import { Camas } from '../core/model/camas';
import { Capacidad } from '../core/model/capacidad';
import { Extras } from '../core/model/extras';


@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {
  private _arrayCategoria = [];
  private _arrayCama = [];
  private _arrayCapacidad = [];
  private _arrayExtras = [];
  
  constructor(public resultadoService: PeticionControllerService) {
    for (let index = 0; index < Object.keys(Categoria).length / 2; index++) {
      this._arrayCategoria.push(Categoria[index].toString());
    }
    for (let index = 0; index < Object.keys(Camas).length / 2; index++) {
      this._arrayCama.push(Camas[index].toString());
    }
    for (let index = 0; index < Object.keys(Capacidad).length / 2; index++) {
      this._arrayCapacidad.push(Capacidad[index].toString());
    }
    for (let index = 0; index < Object.keys(Extras).length / 2; index++) {
      this._arrayExtras.push(Extras[index].toString());
    }
  }
  ngOnInit() {
  }

}

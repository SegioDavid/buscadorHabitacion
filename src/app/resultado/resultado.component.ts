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
  private _arrayExtras = [];
  
  constructor(public resultadoService: PeticionControllerService) {
    for (let index = 0; index < Object.keys(Extras).length / 2; index++) {
      this._arrayExtras.push(Extras[index].toString());
    }
  }
  ngOnInit() {
  }

}

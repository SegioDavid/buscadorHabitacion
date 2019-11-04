import { Capacidad } from './../core/model/capacidad';
import { Categoria } from './../core/model/categoria';
import { PeticionControllerService } from './../shared/peticion-controller.service';
import { Component, OnInit } from '@angular/core';
import { Camas } from '../core/model/camas';

@Component({
  selector: 'app-peticion',
  templateUrl: './peticion.component.html',
  styleUrls: ['./peticion.component.scss']
})

export class PeticionComponent implements OnInit {
  private _arrayCategoria = [];
  private _arrayCama = [];
  private _arrayCapacidad= [];
  private seleccionCategoria="";
  private seleccionCama="";
  private seleccionCapacidad="";
  
  constructor(public peticionService: PeticionControllerService) {
    for (let index = 0; index < Object.keys(Categoria).length / 2; index++) {
      this._arrayCategoria.push(Categoria[index].toString());
    }
    for (let index = 0; index < Object.keys(Camas).length / 2; index++) {
      this._arrayCama.push(Camas[index].toString());
    }
    for (let index = 0; index < Object.keys(Capacidad).length / 2; index++) {
      this._arrayCapacidad.push(Capacidad[index].toString());
    }
  }

  ngOnInit() {
    
  
  }
  public get arrayCategoria() {
    return this._arrayCategoria;
  }
  public get arrayCama() {
    return this._arrayCama;
  }
  public get arrayCapacidad() {
    return this._arrayCapacidad;
  }
 
  

}

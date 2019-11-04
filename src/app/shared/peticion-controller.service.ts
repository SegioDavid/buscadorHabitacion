import { GeneradorHoteles } from './../core/model/generador-hoteles';
import { Hotel } from './../core/model/hotel';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionControllerService {

  private hoteles: Hotel[];
  precioMin: number = 10;
  precioMax: number = 50;
  constructor() {
    this.hoteles = new GeneradorHoteles().getHoteles();
    console.log('hola');
  }
  updatePriceLabels() {
    console.log('Precio minimo ' + this.precioMin);
    console.log('Precio maximo ' + this.precioMax);
  }
}

import { GeneradorHoteles } from './../core/model/generador-hoteles';
import { Hotel } from './../core/model/hotel';
import { Injectable } from '@angular/core';
import { Habitacion } from '../core/model/habitacion';
import { Categoria } from '../core/model/categoria';

@Injectable({
     providedIn: 'root'
})
export class PeticionControllerService {
     private habitacionMin: Habitacion;
     private habitacionMax: Habitacion;
     private puntuacion: Categoria;
     private hoteles: Hotel[] = [];
     private ensenar: Hotel[] = [];
     constructor() {
          this.hoteles = new GeneradorHoteles().getHoteles();
     }

     mostrar() {
          this.$ensenar = [];
          this.hoteles.forEach(element => {
               let categoria = Categoria[element.categoria]
               // tslint:disable-next-line: triple-equals
               if (categoria === this.puntuacion.toString()) {
                    this.$ensenar.push(element)
               }
          });
          return this.$ensenar
     }

     /**
      * Getter $ensenar
      * @return {Hotel[]}
      */
     public get $ensenar(): Hotel[] {
          return this.ensenar;
     }

     /**
      * Setter $ensenar
      * @param {Hotel[]} value
      */
     public set $ensenar(value: Hotel[]) {
          this.ensenar = value;
     }

     /**
      * Getter $puntuacion
      * @return {Puntuacion}
      */
     public get $puntuacion(): Categoria {
          return this.puntuacion;
     }

     /**
      * Setter $puntuacion
      * @param {Puntuacion} value
      */
     public set $puntuacion(value: Categoria) {
          this.puntuacion = value;
     }

     /**
      * Getter $habitacionMin
      * @return {Habitacion}
      */
     public get $habitacionMin(): Habitacion {
          return this.habitacionMin;
     }

     /**
      * Getter $habitacionMax
      * @return {Habitacion}
      */
     public get $habitacionMax(): Habitacion {
          return this.habitacionMax;
     }

     /**
      * Getter $hoteles
      * @return {Hotel[]}
      */
     public get $hoteles(): Hotel[] {
          return this.hoteles;
     }

     /**
      * Setter $habitacionMin
      * @param {Habitacion} value
      */
     public set $habitacionMin(value: Habitacion) {
          this.habitacionMin = value;
     }

     /**
      * Setter $habitacionMax
      * @param {Habitacion} value
      */
     public set $habitacionMax(value: Habitacion) {
          this.habitacionMax = value;
     }

     /**
      * Setter $hoteles
      * @param {Hotel[]} value
      */
     public set $hoteles(value: Hotel[]) {
          this.hoteles = value;
     }

}

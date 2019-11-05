import { element } from 'protractor';
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
     private ensenar: Habitacion[] = [];
     constructor() {
          this.hoteles = new GeneradorHoteles().getHoteles();
     }

     comprobar() {
          this.$ensenar = [];
          this.hoteles.forEach(element => {
               const categoria = Categoria[element.categoria];
               this.comprobarCategoria(categoria, element);
          });
          return this.$ensenar
     }

     validaciones() {

     };
     comprobarCategoria(categoria, element) {
          if (categoria === this.puntuacion.toString()) {
               element.tiposHabitacion.forEach(habita => {
                    this.comprobarPrecio(habita);
               });
          }
     }
     comprobarPrecio(habitacion) {
          if (this.habitacionMax.precio > habitacion.precio && this.$habitacionMin.precio < habitacion.precio) {
               this.$ensenar.push(habitacion);
          }
     }

     /**
      * Getter $ensenar
      * @return {Hotel[]}
      */
     public get $ensenar(): Habitacion[] {
          return this.ensenar;
     }

     /**
      * Setter $ensenar
      * @param {Hotel[]} value
      */
     public set $ensenar(value: Habitacion[]) {
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

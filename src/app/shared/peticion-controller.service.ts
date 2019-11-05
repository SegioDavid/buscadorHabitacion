import { Camas } from './../core/model/camas';
import { element } from 'protractor';
import { GeneradorHoteles } from './../core/model/generador-hoteles';
import { Hotel } from './../core/model/hotel';
import { Injectable } from '@angular/core';
import { Habitacion } from '../core/model/habitacion';
import { Categoria } from '../core/model/categoria';
import { Capacidad } from '../core/model/capacidad';
import { Extras } from '../core/model/extras';

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
          console.log(this.hoteles);
     }

     comprobar() {
          this.$ensenar = [];
          this.comprobarCategoria();
          return this.$ensenar
     }

     comprobarCategoria() {
          this.hoteles.forEach(element => {
               if (this.puntuacion === undefined) {
                    element.tiposHabitacion.forEach(habita => {
                         this.comprobarPrecio(habita, element);

                    });
               } else if (this.puntuacion === element.categoria) {
                    element.tiposHabitacion.forEach(habita => {
                         this.comprobarPrecio(habita, element);
                    });
               }
          });
     }
     comprobarPrecio(habitacion: Habitacion, element) {
          if (this.habitacionMax.precio > habitacion.precio && this.$habitacionMin.precio < habitacion.precio) {
               this.comprobarCama(habitacion, element);
          }
     }
     comprobarCama(habitacion: Habitacion, element) {
          if (this.habitacionMax.tipoHabitacion.camas === undefined) {
               this.comprobarCapacidad(habitacion, element);
          } else if (this.habitacionMax.tipoHabitacion.camas === habitacion.tipoHabitacion.camas) {
               this.comprobarCapacidad(habitacion, element);
          }
     }
     comprobarCapacidad(habitacion: Habitacion, element) {

          if (this.habitacionMax.tipoHabitacion.capacidad === undefined) {
               this.comprobarExtras(habitacion, element);
          } else if (this.habitacionMax.tipoHabitacion.capacidad === habitacion.tipoHabitacion.capacidad) {
               this.comprobarExtras(habitacion, element);
          }
     }
     comprobarExtras(habitacion: Habitacion, element) {
          if (this.habitacionMax.tipoHabitacion.complementos.nombre.length === 0) {
               this.$ensenar.push(element);
          } else {
               let arrayExtras = habitacion.tipoHabitacion.complementos.nombre;
               let arrayPeticion = this.habitacionMax.tipoHabitacion.complementos.nombre;
               let contador = 0;
               for (let index = 0; index < arrayPeticion.length; index++) {
                    for (let indexDos = 0; indexDos < arrayExtras.length; indexDos++) {
                         if (arrayExtras[indexDos] === arrayPeticion[index]) {
                              contador++;
                         }
                    }
               }

               if (contador >= 1 && contador >= arrayPeticion.length) {
                    this.$ensenar.push(element)

               }
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
     public get $puntuacion():Categoria {
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

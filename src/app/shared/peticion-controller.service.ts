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
     private hotelesEnsenar: Hotel[] = [];
     private ensenarHabitacion: Habitacion[] = [];
     constructor() {
          this.hoteles = new GeneradorHoteles().getHoteles();
     }

     comprobar() {
          
          this.$hotelesEnsenar = []
          this.comprobarCategoria();
          console.log(this.$hotelesEnsenar[0].tiposHabitacion)
     }

     comprobarCategoria() {
          this.hoteles.forEach(element => {
               this.$ensenarHabitacion = [];
               if (this.puntuacion === undefined) {
                    element.tiposHabitacion.forEach(habita => {
                         this.comprobarPrecio(habita);
                    });
               } else if (this.puntuacion === element.categoria) {
                    element.tiposHabitacion.forEach(habita => {
                         this.comprobarPrecio(habita);
                    });
               }
               if(this.$ensenarHabitacion.length!=0){
                    this.$hotelesEnsenar.push(new Hotel(element.nombre,element.categoria,this.$ensenarHabitacion));
               }
              
          });
          console.log(this.$hotelesEnsenar)
     }
     comprobarPrecio(habitacion: Habitacion) {
          if (this.habitacionMax.precio > habitacion.precio && this.$habitacionMin.precio < habitacion.precio) {
               this.comprobarCama(habitacion);
          }
     }
     comprobarCama(habitacion: Habitacion) {
          if (this.habitacionMax.tipoHabitacion.camas === undefined) {
               this.comprobarCapacidad(habitacion);
          } else if (this.habitacionMax.tipoHabitacion.camas === habitacion.tipoHabitacion.camas) {
               this.comprobarCapacidad(habitacion);
          }
     }
     comprobarCapacidad(habitacion: Habitacion) {

          if (this.habitacionMax.tipoHabitacion.capacidad === undefined) {
               this.comprobarExtras(habitacion);
          } else if (this.habitacionMax.tipoHabitacion.capacidad === habitacion.tipoHabitacion.capacidad) {
               this.comprobarExtras(habitacion);
          }
     }
     comprobarExtras(habitacion: Habitacion) {
          if (this.habitacionMax.tipoHabitacion.complementos.nombre.length === 0) {
               this.$ensenarHabitacion.push(habitacion);
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
                    this.$ensenarHabitacion.push(habitacion)

               }
          }
     }


    /**
     * Getter $hotelesEnsenar
     * @return {Hotel[] }
     */
	public get $hotelesEnsenar(): Hotel[]  {
		return this.hotelesEnsenar;
	}

    /**
     * Setter $hotelesEnsenar
     * @param {Hotel[] } value
     */
	public set $hotelesEnsenar(value: Hotel[] ) {
		this.hotelesEnsenar = value;
	}

     /**
      * Getter $ensenarHabitacion
      * @return {Hotel[]}
      */
     public get $ensenarHabitacion(): Habitacion[] {
          return this.ensenarHabitacion;
     }

     /**
      * Setter $ensenarHabitacion
      * @param {Hotel[]} value
      */
     public set $ensenarHabitacion(value: Habitacion[]) {
          this.ensenarHabitacion = value;
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

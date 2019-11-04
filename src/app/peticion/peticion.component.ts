import { Extras } from './../core/model/extras';
import { Complemento } from './../core/model/complemento';
import { TipoHabitacion } from './../core/model/tipoHabitacion';
import { Habitacion } from './../core/model/habitacion';
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
  private _arrayCapacidad = [];
  private precioMax: number = 100;
  private precioMin: number = 50;
  private seleccionCategoria: string = "";
  private seleccionCama: string = "";
  private seleccionCapacidad: string = "";

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

  /**
   * Getter $seleccionCategoria
   * @return {string }
   */
  public get $seleccionCategoria(): string {
    return this.seleccionCategoria;
  }

  /**
   * Getter $seleccionCama
   * @return {string }
   */
  public get $seleccionCama(): string {
    return this.seleccionCama;
  }

  /**
   * Getter $seleccionCapacidad
   * @return {string }
   */
  public get $seleccionCapacidad(): string {
    return this.seleccionCapacidad;
  }

  /**
   * Setter $seleccionCategoria
   * @param {string } value
   */
  public set $seleccionCategoria(value: string) {
    this.seleccionCategoria = value;
  }

  /**
   * Setter $seleccionCama
   * @param {string } value
   */
  public set $seleccionCama(value: string) {
    this.seleccionCama = value;
  }

  /**
   * Setter $seleccionCapacidad
   * @param {string } value
   */
  public set $seleccionCapacidad(value: string) {
    this.seleccionCapacidad = value;
  }

  /**
   * Getter $precioMax
   * @return {number}
   */
  public get $precioMax(): number {
    return this.precioMax;
  }

  /**
   * Getter $precioMin
   * @return {number}
   */
  public get $precioMin(): number {
    return this.precioMin;
  }

  /**
   * Setter $precioMax
   * @param {number} value
   */
  public set $precioMax(value: number) {
    this.precioMax = value;
  }

  /**
   * Setter $precioMin
   * @param {number} value
   */
  public set $precioMin(value: number) {
    this.precioMin = value;
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

  public updatePriceLabels() {
    let extrame: Extras[] = [Extras.JACUZZI];
    this.peticionService.$habitacionMin = new Habitacion(new TipoHabitacion(Capacidad[this.$seleccionCapacidad], Camas[this.$seleccionCama], new Complemento(extrame)), this.precioMin);
    this.peticionService.$habitacionMax = new Habitacion(new TipoHabitacion(Capacidad[this.$seleccionCapacidad], Camas[this.$seleccionCama], new Complemento(extrame)), this.precioMax);
    this.peticionService.$puntuacion = Categoria[this.seleccionCategoria];
    this.peticionService.mostrar()
  }

}

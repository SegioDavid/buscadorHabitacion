import { Habitacion } from './habitacion';
import { TipoHabitacion } from './tipoHabitacion';
import { Extras } from './extras';
import { Complemento } from './complemento';
import { Camas } from './camas';
import { Capacidad } from './capacidad';

import { Categoria } from './categoria';
import { Hotel } from './hotel';
export class GeneradorHoteles {
    private _arrayNombreHoteles = [];


    private _habitacion1 = [new Habitacion(new TipoHabitacion(Capacidad.TRIPLE, Camas.KINGSIZE, new Complemento([Extras.AIRE])), this.getRandom(1, 1000), "")];
    private _habitacion2 = [new Habitacion(new TipoHabitacion(Capacidad.DOBLE, Camas.INDIVIDUAL, new Complemento([Extras.AIRE, Extras.MINIBAR, Extras.JACUZZI])), this.getRandom(1, 1000), "")];
    private _habitacion3 = [new Habitacion(new TipoHabitacion(Capacidad.TRIPLE, Camas.KINGSIZE, new Complemento([Extras.AIRE, Extras.MINIBAR, Extras.JACUZZI])), this.getRandom(1, 1000), "")];
    private _habitacion4 = [new Habitacion(new TipoHabitacion(Capacidad.SIMPLE, Camas.DOBLE, new Complemento([Extras.AIRE, Extras.MINIBAR, Extras.JACUZZI])), this.getRandom(1, 1000), "")];


    public getHoteles(): Hotel[] {
        //console.log(this.obtenerCategoria(this.getRandom(0, 4)));
        this._arrayNombreHoteles.push(new Hotel("Hotel Parissi", Categoria["⭐⭐"], this._habitacion1));
        this._arrayNombreHoteles.push(new Hotel("Hotel Realeza", Categoria["⭐⭐⭐⭐⭐"], this._habitacion1));
        this._arrayNombreHoteles.push(new Hotel("Hotel Mulan", Categoria["⭐⭐⭐⭐"], this._habitacion2));
        this._arrayNombreHoteles.push(new Hotel("Hotel Platinum", Categoria["⭐⭐⭐⭐"], this._habitacion2));
        this._arrayNombreHoteles.push(new Hotel("Hotel Bjusjine", Categoria["⭐⭐⭐"], this._habitacion3));
        this._arrayNombreHoteles.push(new Hotel("Hotel Wine", Categoria["⭐⭐⭐"], this._habitacion3));
        this._arrayNombreHoteles.push(new Hotel("Hotel Caravela", Categoria["⭐⭐"], this._habitacion4));
        this._arrayNombreHoteles.push(new Hotel("Hotel Sergio", Categoria["⭐⭐"], this._habitacion4));
        this._arrayNombreHoteles.push(new Hotel("Hotel Ashera", Categoria["⭐"], this._habitacion3));
        this._arrayNombreHoteles.push(new Hotel("Hotel Dominos", Categoria["⭐"], this._habitacion4));

        return this._arrayNombreHoteles;
    }
    public getRandom(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }

  /*  public obtenerCategoria(numeroEstrellas: number): Categoria {
       
        return Categoria[numeroEstrellas];

    }*/

}


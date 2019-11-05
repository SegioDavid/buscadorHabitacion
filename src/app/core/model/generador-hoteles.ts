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
   private _habitacion1 =[new Habitacion(new TipoHabitacion(Capacidad.TRIPLE,Camas.KINGSIZE, Complemento[Extras.AIRE,Extras.MINIBAR,Extras.JACUZZI]),100)];
   private _habitacion2 =[new Habitacion(new TipoHabitacion(Capacidad.TRIPLE,Camas.KINGSIZE, Complemento[Extras.AIRE,Extras.MINIBAR,Extras.JACUZZI]),300)];
   private _habitacion3 =[new Habitacion(new TipoHabitacion(Capacidad.TRIPLE,Camas.KINGSIZE, Complemento[Extras.AIRE,Extras.MINIBAR,Extras.JACUZZI]),600)];
   private _habitacion4 =[new Habitacion(new TipoHabitacion(Capacidad.TRIPLE,Camas.KINGSIZE, Complemento[Extras.AIRE,Extras.MINIBAR,Extras.JACUZZI]),900)];

    public getHoteles(): Hotel[] {
        this._arrayNombreHoteles.push(new Hotel ("Hotel Luciano",Categoria["⭐⭐⭐⭐⭐"], this._habitacion1));
        this._arrayNombreHoteles.push(new Hotel ("Hotel Jose",Categoria["⭐⭐⭐⭐"], this._habitacion2));
        this._arrayNombreHoteles.push(new Hotel ("Hotel Adelaida",Categoria["⭐"],this._habitacion3));
        this._arrayNombreHoteles.push(new Hotel ("Hotel Sergio",Categoria["⭐⭐⭐"],this._habitacion4));
        return this._arrayNombreHoteles;
    }
}
    
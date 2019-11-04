import { Categoria } from './categoria';
import { Hotel } from './hotel';
export class GeneradorHoteles {
   private _arrayNombreHoteles = []
   private _habitaciones =[]

    public getHoteles(): Hotel[] {
        this._arrayNombreHoteles.push(new Hotel ("HotelLuciano",Categoria["⭐⭐⭐⭐⭐"],this._habitaciones));
        this._arrayNombreHoteles.push(new Hotel ("HotelJose",Categoria["⭐⭐⭐⭐"],this._habitaciones));
        this._arrayNombreHoteles.push(new Hotel ("HotelAdelaida",Categoria["⭐"],this._habitaciones));
        return this._arrayNombreHoteles;
    }
}


import { Categoria } from './categoria';
import { Hotel } from './hotel';
export class GeneradorHoteles {
   private _arrayNombreHoteles = []
   private _habitaciones =[]

    public getHoteles(): Hotel[] {

        this._arrayNombreHoteles.push(new Hotel("Hotel Parissi",Categoria["⭐⭐⭐⭐⭐"],this._habitaciones));
        this._arrayNombreHoteles.push(new Hotel("Hotel Realeza",Categoria["⭐⭐⭐⭐⭐"],this._habitaciones));
        this._arrayNombreHoteles.push(new Hotel("Hotel Mulan",Categoria["⭐⭐⭐⭐"],this._habitaciones));
        this._arrayNombreHoteles.push(new Hotel("Hotel Platinum",Categoria["⭐⭐⭐⭐"],this._habitaciones));
        this._arrayNombreHoteles.push(new Hotel("Hotel Bjusjine",Categoria["⭐⭐⭐"],this._habitaciones));
        this._arrayNombreHoteles.push(new Hotel("Hotel Wine",Categoria["⭐⭐⭐"],this._habitaciones));
        this._arrayNombreHoteles.push(new Hotel("Hotel Caravela",Categoria["⭐⭐"],this._habitaciones));
        this._arrayNombreHoteles.push(new Hotel("Hotel Sergio",Categoria["⭐⭐"],this._habitaciones));
        this._arrayNombreHoteles.push(new Hotel("Hotel Ashera",Categoria["⭐"],this._habitaciones));
        this._arrayNombreHoteles.push(new Hotel("Hotel Dominos",Categoria["⭐"],this._habitaciones));

      
        return this._arrayNombreHoteles;
    }
}
    
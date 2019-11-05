import { Habitacion } from "./habitacion";
import { Categoria } from "./categoria";

export class Hotel {
        private _nombre:string;
        private _categoria: Categoria;
        private _tiposHabitacion: Habitacion[];
<<<<<<< HEAD

	constructor(nombre: string, categoria: Categoria, tiposHabitacion: Habitacion[]) {
=======
	constructor(nombre: string, categoria: Categoria, tiposHabitacion: Habitacion[]) {
		
>>>>>>> e57f06c55bec8262ae4c3c5ed55eaa81c9022ad2
		this._nombre = nombre;
		this._categoria = categoria;
		this._tiposHabitacion = tiposHabitacion;
	}

<<<<<<< HEAD
    /**
     * Getter nombre
     * @return {string}
     */
	public get nombre(): string {
		return this._nombre;
	}

    /**
     * Getter categoria
     * @return {Categoria}
     */
=======
	public get nombre(): string {
		return this._nombre;
	}
>>>>>>> e57f06c55bec8262ae4c3c5ed55eaa81c9022ad2
	public get categoria(): Categoria {
		return this._categoria;
	}

<<<<<<< HEAD
    /**
     * Getter tiposHabitacion
     * @return {Habitacion[]}
     */
=======
>>>>>>> e57f06c55bec8262ae4c3c5ed55eaa81c9022ad2
	public get tiposHabitacion(): Habitacion[] {
		return this._tiposHabitacion;
	}

    /**
     * Setter nombre
     * @param {string} value
     */
	public set nombre(value: string) {
		this._nombre = value;
	}

<<<<<<< HEAD
    /**
     * Setter categoria
     * @param {Categoria} value
     */
=======
>>>>>>> e57f06c55bec8262ae4c3c5ed55eaa81c9022ad2
	public set categoria(value: Categoria) {
		this._categoria = value;
	}

<<<<<<< HEAD
    /**
     * Setter tiposHabitacion
     * @param {Habitacion[]} value
     */
=======
>>>>>>> e57f06c55bec8262ae4c3c5ed55eaa81c9022ad2
	public set tiposHabitacion(value: Habitacion[]) {
		this._tiposHabitacion = value;
	}
        
}

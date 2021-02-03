import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class dbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 150000
        },
        {
          nombre: 'Vegeta',
          poder: 5000
        },
      ];
    
    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor(){
        console.log("Servicio inicializado");
    }

    agregarPersonaje( personaje: Personaje) {
        this._personajes.push(personaje);
    }
}
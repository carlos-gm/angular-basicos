import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  //@Input() personajes: Personaje[] = [];
  get personajes() {
    return this.dbzService.personajes;
  }
  
  constructor( private dbzService: dbzService){}

}

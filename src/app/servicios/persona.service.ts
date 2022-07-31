import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../models/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url: string = 'https://portfoliomrback.herokuapp.com/'
  estId: number;
  constructor(private http:HttpClient) {
  }
  getPersona():Observable<any>{
    return this.http.get(this.url+'ver/persona')
  }

  editPersona(persona:Persona):Observable<any>{
    return this.http.put(this.url+'editar/persona/'+persona.id, persona)
  }
}

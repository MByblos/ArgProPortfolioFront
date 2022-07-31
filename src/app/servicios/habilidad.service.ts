import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habilidad } from '../models/habilidad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url: string = 'http://localhost:8080/'
  habId: number;
  constructor(private http:HttpClient) {
  }

  getHabilidades():Observable<any>{
    return this.http.get(this.url+'ver/habilidades')
  }
  saveHabilidad(habilidad:Habilidad):Observable<any>{
    return this.http.post(this.url+'nuevo/habilidad', habilidad)
  }

  editHabilidad(habilidad:Habilidad):Observable<any>{
    return this.http.put(this.url+'editar/habilidad/'+habilidad.habId, habilidad)
  }

  deletHabilidad(habId: number):Observable<any>{
    return this.http.delete(this.url+'borrar/habilidad/'+habId)
  }
}

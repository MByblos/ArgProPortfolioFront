import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../models/experiencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  url: string = 'https://portfoliomrback.herokuapp.com/'
  expId: number;
  constructor(private http:HttpClient) {
  }

  getExperiencias():Observable<any>{
    return this.http.get(this.url+'ver/experiencias')
  }
  saveExperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.post(this.url+'nuevo/experiencia', experiencia)
  }

  editExperiencia(experiencia:Experiencia):Observable<any>{
    return this.http.put(this.url+'editar/experiencia/'+experiencia.expId, experiencia)
  }

  deletExperiencia(expId: number):Observable<any>{
    return this.http.delete(this.url+'borrar/experiencia/'+expId)
  }
}

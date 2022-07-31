import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from 'src/app/models/proyecto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  url: string = 'http://localhost:8080/'
  proyId: number;
  constructor(private http:HttpClient) {
  }

  getProyectos():Observable<any>{
    return this.http.get(this.url+'ver/proyectos')
  }
  saveProyecto(proyecto:Proyecto):Observable<any>{
    return this.http.post(this.url+'nuevo/proyecto', proyecto)
  }

  editProyecto(proyecto:Proyecto):Observable<any>{
    return this.http.put(this.url+'editar/proyecto/'+proyecto.proyId, proyecto)
  }

  deletProyecto(proyId: number):Observable<any>{
    return this.http.delete(this.url+'borrar/proyecto/'+proyId)
  }
}

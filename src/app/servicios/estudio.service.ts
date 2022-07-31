import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudio } from 'src/app/models/estudio';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class EstudioService {
  url: string = 'http://localhost:8080/'
  estId: number;
  constructor(private http:HttpClient) {
  }

  getEstudios():Observable<any>{
    return this.http.get(this.url+'ver/estudios')
  }
  saveEstudio(estudio:Estudio):Observable<any>{
    return this.http.post(this.url+'nuevo/estudio', estudio)
  }

  editEstudio(estudio:Estudio):Observable<any>{
    return this.http.put(this.url+'editar/estudio/'+estudio.estId, estudio)
  }

  deletEstudio(estId: number):Observable<any>{
    return this.http.delete(this.url+'borrar/estudio/'+estId)
  }
}

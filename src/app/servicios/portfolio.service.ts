import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url: string = 'https://portfoliomrback.herokuapp.com/'
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any> {
    return this.http.get<any>(this.url+"portfolio");
  }
  /*./assets/data/dataPortfolio.json*/
}

import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaData: any = [];
  constructor(private datosPortfolio: PortfolioService, private experienciaService: ExperienciaService, private router: Router) {}

  eliminar(expId: number){
    if(confirm('¿Estas seguro de querer eliminar este item?')){
      this.experienciaService.deletExperiencia(expId).subscribe((data)=>{
        this.datosPortfolio.obtenerDatos();
        window.location.reload();
      })
    }
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(datos => {
      this.experienciaData = datos.exp;
    });
  }

}

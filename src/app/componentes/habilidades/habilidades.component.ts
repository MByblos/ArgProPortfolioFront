import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidadData: any = [];
  constructor(private datosPortfolio: PortfolioService, private habilidadService: HabilidadService, private router: Router) { }

  eliminar(habId: number){
    if(confirm('¿Estas seguro de querer eliminar este item?')){
      this.habilidadService.deletHabilidad(habId).subscribe((data)=>{
        this.datosPortfolio.obtenerDatos();
        window.location.reload();
      })
    }
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(datos => {
      this.habilidadData = datos.hab;
    });
  }

}

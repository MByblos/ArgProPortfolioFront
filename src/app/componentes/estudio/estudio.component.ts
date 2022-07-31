import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-estudio',
  templateUrl: './estudio.component.html',
  styleUrls: ['./estudio.component.css']
})
export class EstudioComponent implements OnInit {
  estudioData:any = [];
  
  constructor(private datosPortfolio: PortfolioService, private estudioService: EstudioService, private router: Router, private tokenService: TokenService) {}

  eliminar(estId: number){
    if(confirm('¿Estas seguro de querer eliminar este item?')){
      this.estudioService.deletEstudio(estId).subscribe((data)=>{
        this.datosPortfolio.obtenerDatos();
        window.location.reload();
      })
    }
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(datos => {
      this.estudioData=datos.estu;
    });
  }

}

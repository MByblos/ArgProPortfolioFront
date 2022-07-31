import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectoService} from 'src/app/servicios/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectoData: any = [];
  constructor(private datosPortfolio: PortfolioService, private proyectoService: ProyectoService, private router: Router) { }

  eliminar(proyId: number){
    if(confirm('¿Estas seguro de querer eliminar este item?')){
      this.proyectoService.deletProyecto(proyId).subscribe((data)=>{
        this.datosPortfolio.obtenerDatos();
        window.location.reload();
      })
    }
  }

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(datos => {
      this.proyectoData = datos.proy;
    }
    );
  }

}

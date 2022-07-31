import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/models/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service'

@Component({
  selector: 'app-hab-form',
  templateUrl: './hab-form.component.html',
  styleUrls: ['./hab-form.component.css']
})
export class HabFormComponent implements OnInit {
  habilidad: Habilidad = {
    habilidad: '',
    habNivel: null,
  };
  id: any;
  edicion: boolean = false;
  habilidades: Habilidad[];

  constructor(private habilidadService: HabilidadService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.edicion=true;
      this.habilidadService.getHabilidades().subscribe((data:Habilidad[])=>{
        this.habilidades=data;
        this.habilidad=this.habilidades.find((m)=>{return m.habId==this.id})!;
      })
    }
    else{
      this.edicion=false;
    }
  }


  ngOnInit(): void {
    
  }

  guardarHabilidad() {
    if(this.edicion){
      this.habilidadService.editHabilidad(this.habilidad).subscribe((data) => {
        this.router.navigateByUrl('portfolio');
        alert('Habilidad actualizada');
      }, (error)=>{
        alert('Ha surgido un error y no se pudo actualizar')
      });
    }
    else{
      this.habilidadService.saveHabilidad(this.habilidad).subscribe((data) => {
        this.router.navigateByUrl('portfolio');
        alert('Habilidad Guardada');
      }, (error)=>{
        alert('Ha surgido un error y no se pudo guardar')
      });
    }

  }

  cancelar() {
    this.router.navigateByUrl('portfolio');
  }

}

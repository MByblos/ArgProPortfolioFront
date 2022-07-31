import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exp-form',
  templateUrl: './exp-form.component.html',
  styleUrls: ['./exp-form.component.css']
})
export class ExpFormComponent implements OnInit {
  experiencia: Experiencia = {
    expEmpresa: '',
    expDescripcion: '',
    expFechaIni: null,
    expFechaFin: null,
    expEstado: ''
  };
  id: any;
  edicion: boolean = false;
  experiencias: Experiencia[];

  constructor(private experienciaService: ExperienciaService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.edicion=true;
      this.experienciaService.getExperiencias().subscribe((data:Experiencia[])=>{
        this.experiencias=data;
        this.experiencia=this.experiencias.find((m)=>{return m.expId==this.id})!;
      })
    }
    else{
      this.edicion=false;
    }
  }


  ngOnInit(): void {
    
  }

  guardarExperiencia() {
    if(this.edicion){
      this.experienciaService.editExperiencia(this.experiencia).subscribe((data) => {
        this.router.navigateByUrl('portfolio');
        alert('Experiencia actualizada');
      }, (error)=>{
        alert('Ha surgido un error y no se pudo actualizar')
      });
    }
    else{
      this.experienciaService.saveExperiencia(this.experiencia).subscribe((data) => {
        this.router.navigateByUrl('portfolio');
        alert('Experiencia Guardada');
      }, (error)=>{
        alert('Ha surgido un error y no se pudo guardar')
      });
    }

  }

  cancelar() {
    this.router.navigateByUrl('portfolio');
  }

}

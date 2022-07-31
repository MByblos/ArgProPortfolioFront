import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/models/estudio';
import { EstudioService } from 'src/app/servicios/estudio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-est-form',
  templateUrl: './est-form.component.html',
  styleUrls: ['./est-form.component.css']
})
export class EstFormComponent implements OnInit {
  estudio: Estudio = {
    carrera: '',
    institucion: '',
    estFechaIni: null,
    estFechaFin: null,
    estInstLogo: ''
  };
  id: any;
  edicion: boolean = false;
  estudios: Estudio[];

  constructor(private estudioService: EstudioService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.edicion=true;
      this.estudioService.getEstudios().subscribe((data:Estudio[])=>{
        this.estudios=data;
        this.estudio=this.estudios.find((m)=>{return m.estId==this.id})!;
      })
    }
    else{
      this.edicion=false;
    }
  }


  ngOnInit(): void {
    
  }

  guardarEstudio() {
    if(this.edicion){
      this.estudioService.editEstudio(this.estudio).subscribe((data) => {
        this.router.navigateByUrl('portfolio');
        alert('Estudio actualizado');
      }, (error)=>{
        alert('Ha surgido un error y no se pudo actualizar')
      });
    }
    else{
      this.estudioService.saveEstudio(this.estudio).subscribe((data) => {
        this.router.navigateByUrl('portfolio');
        alert('Estudio Guardado');
      }, (error)=>{
        alert('Ha surgido un error y no se pudo guardar')
      });
    }

  }

  cancelar() {
    this.router.navigateByUrl('portfolio');
  }

}

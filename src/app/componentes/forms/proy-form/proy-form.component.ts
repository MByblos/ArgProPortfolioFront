import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto'
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proy-form',
  templateUrl: './proy-form.component.html',
  styleUrls: ['./proy-form.component.css']
})
export class ProyFormComponent implements OnInit {
  proyecto: Proyecto= {
    proyNombre: '',
    proyDescripcion: '',
    proyEstado: '',
  };
  id: any;
  edicion: boolean = false;
  proyectos: Proyecto[];

  constructor(private proyectoService: ProyectoService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.edicion=true;
      this.proyectoService.getProyectos().subscribe((data:Proyecto[])=>{
        this.proyectos=data;
        this.proyecto=this.proyectos.find((m)=>{return m.proyId==this.id})!;
      })
    }
    else{
      this.edicion=false;
    }
  }


  ngOnInit(): void {
    
  }

  guardarProyecto() {
    if(this.edicion){
      this.proyectoService.editProyecto(this.proyecto).subscribe((data) => {
        this.router.navigateByUrl('portfolio');
        alert('Proyecto actualizado');
      }, (error)=>{
        alert('Ha surgido un error y no se pudo actualizar')
      });
    }
    else{
      this.proyectoService.saveProyecto(this.proyecto).subscribe((data) => {
        this.router.navigateByUrl('portfolio');
        alert('Proyecto Guardado');
      }, (error)=>{
        alert('Ha surgido un error y no se pudo guardar')
      });
    }

  }

  cancelar() {
    this.router.navigateByUrl('portfolio');
  }
}

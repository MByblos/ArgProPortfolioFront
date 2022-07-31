import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pers-form',
  templateUrl: './pers-form.component.html',
  styleUrls: ['./pers-form.component.css']
})
export class PersFormComponent implements OnInit {
  persona: Persona = {
    nombre: '',
    cargo: '',
    ciudad: '',
    telefono: null,
    mail: '',
    descripcion: '',
    imgURL: '',
    background: '',
  };
  id: any;
  personas: Persona[];

  constructor(private personaService: PersonaService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.personaService.getPersona().subscribe((data:Persona[])=>{
      this.personas=data;
      this.persona=this.personas.find((m)=>{return m.id==this.id})!;
   })
  }

  ngOnInit(): void {
  }

  guardarPersona() {
    this.personaService.editPersona(this.persona).subscribe((data) => {
      this.router.navigateByUrl('portfolio');
        alert('Sus datos se han actualizado');
      }, (error)=>{
        alert('Ha surgido un error y no se pudo actualizar')
      });
  }

  cancelar() {
    this.router.navigateByUrl('portfolio');
  }
    

}

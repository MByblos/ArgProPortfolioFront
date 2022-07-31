import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { EstFormComponent } from './componentes/forms/est-form/est-form.component';
import { ExpFormComponent } from './componentes/forms/exp-form/exp-form.component';
import { HabFormComponent } from './componentes/forms/hab-form/hab-form.component';
import { ProyFormComponent } from './componentes/forms/proy-form/proy-form.component';
import { PersFormComponent } from './componentes/forms/pers-form/pers-form.component';
import { ProdGuardService as guard } from 'src/app/servicios/guards/prod-guard.service';

const routes: Routes  = [
  {path:'portfolio', component: PortfolioComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path:'login', component: LoginComponent},
  {path: 'portfolio/nuevo/estudio', component: EstFormComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'portfolio/editar/estudio/:id', component: EstFormComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'portfolio/nuevo/experiencia', component: ExpFormComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'portfolio/editar/experiencia/:id', component: ExpFormComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'portfolio/nuevo/habilidad', component: HabFormComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'portfolio/editar/habilidad/:id', component: HabFormComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'portfolio/nuevo/proyecto', component: ProyFormComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'portfolio/editar/proyecto/:id', component: ProyFormComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path: 'portfolio/editar/persona/:id', component: PersFormComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  {path:'', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

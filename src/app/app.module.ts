import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EstudioComponent } from './componentes/estudio/estudio.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './componentes/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptors/prod-interceptor.service';
import { LoginComponent } from './componentes/auth/login/login.component';
import { IndexComponent } from './componentes/index/index.component';
import { EstFormComponent } from './componentes/forms/est-form/est-form.component';
import { HabFormComponent } from './componentes/forms/hab-form/hab-form.component';
import { ProyFormComponent } from './componentes/forms/proy-form/proy-form.component';
import { PersFormComponent } from './componentes/forms/pers-form/pers-form.component';
import { ExpFormComponent } from './componentes/forms/exp-form/exp-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ExperienciaComponent,
    EstudioComponent,
    ProyectosComponent,
    HabilidadesComponent,
    LoginComponent,
    PortfolioComponent,
    MenuComponent,
    IndexComponent,
    EstFormComponent,
    HabFormComponent,
    ProyFormComponent,
    PersFormComponent,
    ExpFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }

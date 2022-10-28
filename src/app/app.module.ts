import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { PresentacionComponent } from './componentes/presentacion/presentacion.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HardskillsComponent } from './componentes/hardskills/hardskills.component';
import { SoftskillsComponent } from './componentes/softskills/softskills.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ExperiencialaboralComponent } from './componentes/experiencialaboral/experiencialaboral.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    CarruselComponent,
    PresentacionComponent,
    EducacionComponent,
    HardskillsComponent,
    SoftskillsComponent,
    ProyectosComponent,
    ExperiencialaboralComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

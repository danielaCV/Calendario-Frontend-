import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Componentes

import { AppComponent } from './app.component';
import { RegistroEspaciosComponent } from './componentes/RegistroEspacios/registro-espacios/registro-espacios.component';
import { ConsultaProyectosComponent } from './componentes/ConsultaProyectos/consulta-proyectos/consulta-proyectos.component';
import { ConsultaEvaluadoresComponent } from './componentes/ConsultaEvaluadores/consulta-evaluadores/consulta-evaluadores.component';
import { TabMenuComponent } from './componentes/tab-menu/tab-menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';

//Router
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

//Servicio
import { ServCalendarioService } from './datos/serv-calendario.service';

//Angular imports
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Primeng imports
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {TabMenuModule} from 'primeng/tabmenu';
import {PanelModule} from 'primeng/panel';




const appRoutes: Routes = [
  {path: '', component: TabMenuComponent},
  {path: 'menuprincipal', component: MenuPrincipalComponent}, 
  {path: 'registroespacio', component: RegistroEspaciosComponent}, 
  {path: 'consultaproyecto', component: ConsultaProyectosComponent},
  {path: 'consultaevaluador', component: ConsultaEvaluadoresComponent}      

];

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    RegistroEspaciosComponent,
    ConsultaProyectosComponent,
    ConsultaEvaluadoresComponent,
    TabMenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    HttpClientModule, 
    FormsModule,
    TabMenuModule,
    PanelModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServCalendarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }


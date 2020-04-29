import { Component, OnInit } from '@angular/core';
import { ServCalendarioService } from 'src/app/datos/serv-calendario.service';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  items1: MenuItem[];

  constructor(private Servicio: ServCalendarioService, private router: Router) { }


  ngOnInit() {
    this.items1 = [
      {label: 'Menú Principal', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/menuprincipal']},
      {label: 'Registro Espacios', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/registroespacio']},
      {label: 'Consulta Proyectos', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/consultaproyecto']},
      {label: 'Consulta Evaluadores', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/consultaevaluador']},
  ];  
  }


}

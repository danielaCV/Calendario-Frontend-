import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.css']
})

export class TabMenuComponent implements OnInit{
  constructor(/*private Servicio: ServCalendarioService,*/ private router: Router) { }

  items1: MenuItem[];

  ngOnInit() {
      this.items1 = [
          {label: 'Registro Espacios', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/registroespacio']},
          {label: 'Consulta Proyectos', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/consultaproyecto']},
          {label: 'Consulta Evaluadores', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/consultaevaluador']},
      ];  
  }
}
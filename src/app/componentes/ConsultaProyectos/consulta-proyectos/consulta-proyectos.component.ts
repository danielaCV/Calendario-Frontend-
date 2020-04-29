import { Component, OnInit } from '@angular/core';
import { RespuestaProyectos } from 'src/app/datos/Proyectos/respuesta-proyectos';
import { Router } from '@angular/router';
import { ServCalendarioService } from 'src/app/datos/serv-calendario.service';
import { Proyecto } from 'src/app/datos/Proyectos/proyecto';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-consulta-proyectos',
  templateUrl: './consulta-proyectos.component.html',
  styleUrls: ['./consulta-proyectos.component.css']
})
export class ConsultaProyectosComponent implements OnInit {
  proyectos: Proyecto[];
  cols: any[];
  mirespuesta: RespuestaProyectos;

  items1: MenuItem[];

  constructor(private Servicio: ServCalendarioService, private router: Router) { 
    this.cargarProyectos();
  }

  ngOnInit() {
    this.items1 = [
      {label: 'Menú Principal', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/menuprincipal']},
      {label: 'Registro Espacios', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/registroespacio']},
      {label: 'Consulta Proyectos', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/consultaproyecto']},
      {label: 'Consulta Evaluadores', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/consultaevaluador']},
  ];  

  this.cargarProyectos();
    this.cols = [
      {field: "nombre", header: "Nombre"},
      {field: "practica", header: "Practica de Ingeníeria"},
      {field: "estudiante1", header: "Estudiante 1"},
      {field: "estudiante2", header: "Estudiante 2"},
      {field: "estudiante3", header: "Estudiante 3"},
    ];
  }

  cargarProyectos(): void{
    const valor = this.Servicio.consultarproyectos();
    valor.then(
      (value: RespuestaProyectos) => {
        this.mirespuesta = value;
        if(this.mirespuesta.codigo === 1){
          this.proyectos = this.mirespuesta.proyectos;
        }else{
          alert('No se obtuvieron los datos de los proyectos registrados');
        }
      }
    );
  }
}

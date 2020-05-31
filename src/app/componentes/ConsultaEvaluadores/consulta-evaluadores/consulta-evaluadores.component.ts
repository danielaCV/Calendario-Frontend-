import { Component, OnInit } from '@angular/core';
import { ServCalendarioService } from 'src/app/datos/serv-calendario.service';
import { Router } from '@angular/router';
import { Evaluador } from 'src/app/datos/Evaluadores/evaluador';
import { RespuestaEvaluadores } from 'src/app/datos/Evaluadores/respuesta-evaluadores';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-consulta-evaluadores',
  templateUrl: './consulta-evaluadores.component.html',
  styleUrls: ['./consulta-evaluadores.component.css']
})
export class ConsultaEvaluadoresComponent implements OnInit {
  evaluadores: Evaluador[];
  cols: any[];
  mirespuesta: RespuestaEvaluadores;
  
  items1: MenuItem[];
 

  constructor(private Servicio: ServCalendarioService, private router: Router) { 
    this.cargarEvaluadores();
  }

  ngOnInit() {
    this.items1 = [
      {label: 'Menú Principal', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/menuprincipal']},
      {label: 'Registro Espacios', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/registroespacio']},
      {label: 'Consulta Proyectos', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/consultaproyecto']},
      {label: 'Consulta Evaluadores', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/consultaevaluador']},
      {label: 'Asignacion de fecha', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/asignacionfecha']},
  ];  

    this.cargarEvaluadores();
    this.cols = [
      {field: "identificacion", header: "Identificacion"},
      {field: "nombre", header: "Nombre"},
      {field: "apellidos", header: "Apellidos"},
      {field: "telefono", header: "Telefono"},
      {field: "correo", header: "Correo"},
    ];
  }

  cargarEvaluadores(): void{
    const valor = this.Servicio.consultarevaluadores();
    valor.then(
      (value: RespuestaEvaluadores) => {
        this.mirespuesta = value;
        if(this.mirespuesta.codigo === 2){
          this.evaluadores = this.mirespuesta.evaluadores;
        }else{
          alert('No se obtuvieron los datos de los evaluadores registrados');
        }
      }
    );
  }
}
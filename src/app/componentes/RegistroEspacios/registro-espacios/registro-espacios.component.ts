import { Component, OnInit } from '@angular/core';
import { ServCalendarioService } from 'src/app/datos/serv-calendario.service';
import { Router } from '@angular/router';
import { RespuestaEspacios } from 'src/app/datos/Espacios/respuesta-espacios';
import { MenuItem } from 'primeng/components/common/menuitem';

@Component({
  selector: 'app-registro-espacios',
  templateUrl: './registro-espacios.component.html',
  styleUrls: ['./registro-espacios.component.css'],
})

export class RegistroEspaciosComponent implements OnInit {
  nombre: string;
  practica: number;
  direccion : string; 
  capacidad : number;  
  mirespuesta: RespuestaEspacios;

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

  guardarespacio(): void{
    const obje = {
      "nombre": this.nombre,
      "practica": this.practica,
      "direccion": this.direccion,
      "capacidad": this.capacidad
    };
    
    const valor = this.Servicio.registrarespacio(obje);
    valor.then(
      (value: RespuestaEspacios) => {
        this.mirespuesta = value;
        if(this.mirespuesta.codigo === 0){
          alert('Guardo los datos del espacio fisico');  
        }else{
          alert('No obtuvo los datos de registro de espacios');
        }
      }
    );
    
  }

  
}
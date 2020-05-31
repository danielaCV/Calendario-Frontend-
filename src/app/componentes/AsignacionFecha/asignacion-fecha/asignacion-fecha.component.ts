import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Router } from '@angular/router';
import { ServCalendarioService } from 'src/app/datos/serv-calendario.service';

import { Time } from '@angular/common';
import { RespuestaCalendario } from 'src/app/datos/Calendarios/respuesta-calendario';

@Component({
  selector: 'app-asignacion-fecha',
  templateUrl: './asignacion-fecha.component.html',
  styleUrls: ['./asignacion-fecha.component.css']
})
export class AsignacionFechaComponent implements OnInit {
  fecha: Date;
  horainicio: string;
  horafinal : string; 
  proyecto : string;
  mirespuesta: RespuestaCalendario;

  items1: MenuItem[];
  es: any;
  constructor(private Servicio: ServCalendarioService, private router: Router) { 

  }

  ngOnInit() {
    this.items1 = [
      {label: 'Menú Principal', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/menuprincipal']},
      {label: 'Registro Espacios', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/registroespacio']},
      {label: 'Consulta Proyectos', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/consultaproyecto']},
      {label: 'Consulta Evaluadores', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/consultaevaluador']},
      {label: 'Asignacion fecha', icon: 'fa fa-fw fa-bar-chart', routerLink: ['/asignacionfecha']}
      
  ];  

  this.es = {
    firstDayOfWeek: 0,
    dayNames: [ "Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado" ],
    dayNamesShort: [ "Dom","Lun","Mar","Mié","Jue","Vie","Sáb" ],
    dayNamesMin: [ "D","L","M","X","J","V","S" ],
    monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
    monthNamesShort: [ "Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic" ],
    today: 'Hoy',
    clear: 'Borrar'

    } 
  }

  guardarfecha(): void{
    const obje = {
      "fecha": this.fecha,
      "horainicio": this.horainicio,
      "horafinal": this.horafinal,
      "proyecto": this.proyecto
    };
    
    const valor = this.Servicio.registrarfecha(obje);
    valor.then(
      (value: RespuestaCalendario) => {
        this.mirespuesta = value;
        if(this.mirespuesta.codigo === 3){
          alert('Guardo los datos de la fecha de presentación de proyectos');  
        }else{
          alert('No obtuvo los datos de las fechas de presentación de proyectos');
        }
      }
    );
  }

  ver(): void {
    this.router.navigate(['/asignacionfecha']);
  }

  onSelect($event) {
    let hour = new Date($event).getHours();
    let min = new Date($event).getMinutes();
    if(min < 10) { 
       this.horafinal= `${hour}:0${min}`;
    } else {
       this.horafinal= `${hour}:${min}`;
    } 
  }

  onSelect1($event) {
    let hour = new Date($event).getHours();
    let min = new Date($event).getMinutes();
    if(min < 10) { 
       this.horainicio= `${hour}:0${min}`;
    } else {
       this.horainicio= `${hour}:${min}`;
    } 
  }

  
}

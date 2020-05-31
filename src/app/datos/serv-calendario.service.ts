import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaProyectos } from './Proyectos/respuesta-proyectos';
import { RespuestaEspacios } from './Espacios/respuesta-espacios';
import { Espacio } from './Espacios/espacio';
import { RespuestaEvaluadores } from './Evaluadores/respuesta-evaluadores';
import { Calendario } from './Calendarios/calendario';
import { RespuestaCalendario } from './Calendarios/respuesta-calendario';

@Injectable({
  providedIn: 'root'
})
export class ServCalendarioService {

  rutaregistroespacio = 'http://localhost:8080/CalendarioProyectos/app/operaciones/registroespacio';
  rutaconsultaproyecto = 'http://localhost:8080/CalendarioProyectos/app/operaciones/consultaproyectos';
  rutaconsultaevaluador = 'http://localhost:8080/CalendarioProyectos/app/operaciones/consultaevaluadores';
  rutaregistrofechas = 'http://localhost:8080/CalendarioProyectos/app/operaciones/registrofechas';


  constructor(private http: HttpClient) { }

  registrarespacio(dato: Espacio): Promise<RespuestaEspacios>{
    return this.http.post<RespuestaEspacios>(`${this.rutaregistroespacio}`, dato).toPromise();  
  }

  consultarproyectos(): Promise<RespuestaProyectos>{
    return this.http.get<RespuestaProyectos>(`${this.rutaconsultaproyecto}`).toPromise();  
  }
  
  consultarevaluadores():Promise<RespuestaEvaluadores>{
    return this.http.get<RespuestaEvaluadores>(`${this.rutaconsultaevaluador}`).toPromise();  
  }

  registrarfecha(dato: Calendario): Promise<RespuestaCalendario>{
    return this.http.post<RespuestaCalendario>(`${this.rutaregistrofechas}`, dato).toPromise();  
  }
}

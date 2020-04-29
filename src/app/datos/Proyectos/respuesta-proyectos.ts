import { Proyecto } from './proyecto';

export interface RespuestaProyectos {
    codigo: number;
    mensaje: string;
    
    proyectos: Proyecto[];
}

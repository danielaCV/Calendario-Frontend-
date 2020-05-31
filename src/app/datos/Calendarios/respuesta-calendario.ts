import { Calendario } from './calendario';

export interface RespuestaCalendario {
    codigo: number;
    mensaje: string;

    calendarios: Calendario[];
}

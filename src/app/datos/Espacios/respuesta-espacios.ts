import { Espacio } from './espacio';

export interface RespuestaEspacios {
    codigo: number;
    mensaje: string;

    espacios: Espacio[];
}

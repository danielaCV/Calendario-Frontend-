import { Evaluador } from './evaluador';

export interface RespuestaEvaluadores {
    codigo: number;
    mensaje: string;
    
    evaluadores: Evaluador[];
}



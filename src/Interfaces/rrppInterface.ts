import { Types } from 'mongoose';

export interface rrppInterface {
    
    _id?: Types.ObjectId;
    nombre: string;
    apellido: string;
    instagram: string;
    institucion: string;
    horario: string;
    tipo: string;
    celular: string;
    correo: string;
    ciudad: string;
    coordinador: string;
    fecha_nacimiento: Date;
    estado: boolean;
    fiesta: string;
    
}
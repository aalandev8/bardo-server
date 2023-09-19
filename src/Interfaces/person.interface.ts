import { Types } from 'mongoose';

export interface IPerson {
    
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
    fecha_nacimiento: string;
    estado: boolean;
    fiesta: string;
    
}
import mongoose, { Schema, Document } from 'mongoose';
import { rrppInterface } from '../Interfaces/rrppInterface';

const RRPPSchema = new Schema<rrppInterface>(
    {
        nombre: {
            type: String,
            required: true,
        },
        apellido: {
            type: String,
            required: true,
        },
        instagram: {
            type: String,
            required: true,
        },
        institucion: {
            type: String,
            required: true,
        },
        horario: {
            type: String,
            required: true,
        },
        tipo: {
            type: String,
            required: true,
        },
        celular: {
            type: String,
            required: true,
        },
        correo: {
            type: String,
            required: true,
        },
        ciudad: {
            type: String,
            required: true,
        },
        coordinador: {
            type: String,
            required: true,
        },
        fecha_nacimiento: {
            type: Date,
            required: true,
        },
        estado: {
            type: Boolean,
            required: true,
        },
        fiesta: {
            type: String,
            required: true,
        },
    },
    { versionKey: false }
);
const RRPP = mongoose.model<rrppInterface & Document>('RRPP', RRPPSchema);

export default RRPP;
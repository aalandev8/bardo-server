import { Request, Response } from "express";
import Person from "../Models/Person";


export const getPeople = async (req: Request, res: Response) => {
    try {
        const { coordinador, fiesta, estado } = req.query;
        const queryObj = new Map();
        if (coordinador) queryObj.set('coordinador', coordinador);
        if (fiesta) queryObj.set('fiesta', fiesta);
        if (estado) queryObj.set('estado', estado.toString().toLowerCase() === 'true');
        const People = await Person.find(Object.fromEntries(queryObj));
        res.status(200).json({ People });
    } catch (error) {
        res.status(400).json(error);
    }
};

export const changePersonEstado = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;
        const PersonUpdated = await Person.findByIdAndUpdate(id, { estado }, { new: true });
        res.status(200).json({ PersonUpdated });
    } catch (error) {
        res.status(400).json(error);
    }
}
import { Request, Response } from "express";
import Person from "../Models/Person";

export const getPersons = async (req: Request, res: Response) => {
    try {
        const Persons = await Person.find({});
        res.status(200).json({ Person });
    } catch (error) {
        res.status(400).json(error);
    }
};

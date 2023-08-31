import { Request, Response } from "express";
import Person from "../Models/RRPP";

export const getRRPPs = async (req: Request, res: Response) => {
    try {
        const RRPPs = await Person.find({});
        res.status(200).json({ RRPPs });
    } catch (error) {
        res.status(400).json(error);
    }
};

import RRPP from "../Models/RRPP";
import { Request, Response } from "express";

export const getRRPPs = async (req: Request, res: Response) => {
    try {
        const RRPPs = await RRPP.find();
        res.status(200).json(RRPPs);
    } catch (error) {
        res.status(400).json(error);
    }
};

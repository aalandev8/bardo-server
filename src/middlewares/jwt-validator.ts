import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const validateJWT = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if (!token) {
        res.status(401);
        return;
    }

    try {
        const auth = jwt.verify(token, process.env.SECRETORPRIVATEKEY || '') as JwtPayload;


        const id: string = auth.uid;

        if(!id) {
            res.status(401);
            return;
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(401);
    }
};

export default validateJWT;
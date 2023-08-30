import { Router } from 'express'; 
import { get } from 'mongoose';
import { getRRPPs } from '../Controllers/RRPP.controller';

export const RRPPRouter = Router();

RRPPRouter.get('/RRPP', getRRPPs);
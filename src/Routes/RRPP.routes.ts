import { Router } from 'express'; 
import { getRRPPs } from '../Controllers/RRPP.controller';

export const RRPPRouter = Router();

RRPPRouter.get('/', getRRPPs);

export default RRPPRouter;
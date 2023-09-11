import { Router } from 'express'; 
import { getPersons } from '../Controllers/Person.controller';

export const PersonRouter = Router();

PersonRouter.get('/', getPersons);

export default PersonRouter;
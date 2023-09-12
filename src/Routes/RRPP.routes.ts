import { Router } from 'express'; 
import { getPeople } from '../Controllers/Person.controller';
import { changePersonEstado } from '../Controllers/Person.controller';

export const PersonRouter = Router();

PersonRouter.get('/people', getPeople);


PersonRouter.put('/:id', changePersonEstado);


export default PersonRouter;
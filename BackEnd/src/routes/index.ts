import { Router } from 'express';
import { ongRoutes } from './ong.routes';
import {animalRoutes} from './animal.routes'
import { publicRoutes } from './public.routes';
import { authenticateUser } from '../middleware/auth';


const routes = Router();

routes.use('/ong', ongRoutes);
routes.use('/animals', authenticateUser, animalRoutes);
routes.use('/public/animals',publicRoutes);
//routes.use('/ong'/* ,authenticateUser, anamneseRoutes */)
export {routes};

import express from 'express';
import {
  getAllAnimalsController,
  getAnimalByIdController,
} from '../controllers/AnimalController';

const publicRoutes = express.Router();

publicRoutes.get('/', getAllAnimalsController);
publicRoutes.get('/:animalId', getAnimalByIdController);

export { publicRoutes };

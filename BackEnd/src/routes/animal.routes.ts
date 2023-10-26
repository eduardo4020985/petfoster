import express from 'express';
import {
  addAnimalController,
  deleteAnimalController,
  updateAnimalController,
  getAnimalsByOngIdController,
  getAnimalByIdController,
} from '../controllers/AnimalController';

const animalRoutes = express.Router();

animalRoutes.post('/', addAnimalController);
animalRoutes.delete('/:animalId', deleteAnimalController);
animalRoutes.put('/:animalId', updateAnimalController);
animalRoutes.get('/', getAnimalsByOngIdController);
animalRoutes.get('/:animalId', getAnimalByIdController);

export { animalRoutes };

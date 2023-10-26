import { Request, Response } from 'express';
import * as animalUseCases from '../useCases/AnimalUseCase';

export async function getAllAnimalsController(req: Request, res: Response): Promise<void> {
  try {
    const animals = await animalUseCases.getAllAnimalsUseCase();
    res.json(animals);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAnimalByIdController(req: Request, res: Response): Promise<void> {
  const animalId = parseInt(req.params.animalId, 10);
  try {
    const animal = await animalUseCases.getAnimalByIdUseCase(animalId);
    if (animal) {
      res.json(animal);
    } else {
      res.status(404).json({ message: 'Animal not found.' });
    }
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}

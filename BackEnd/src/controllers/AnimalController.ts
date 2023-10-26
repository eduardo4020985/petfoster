import { Request, Response } from 'express';
import * as animalUseCases from '../useCases/AnimalUseCase';

export async function addAnimalController(req: Request, res: Response): Promise<void> {
  const ongId  = Number(req.ong!.id);
  const { name, age, description, photoUrl } = req.body;
  try {
    const animal = await animalUseCases.addAnimalUseCase(name, age, ongId, description, photoUrl);
    res.json(animal);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateAnimalController(req: Request, res: Response): Promise<void> {
  const animalId = parseInt(req.params.animalId, 10);
  const data = req.body;
  try {
    const updatedAnimal = await animalUseCases.updateAnimalUseCase(animalId, data);
    res.json(updatedAnimal);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteAnimalController(req: Request, res: Response): Promise<void> {
  const animalId = parseInt(req.params.animalId, 10);
  try {
    await animalUseCases.deleteAnimalUseCase(animalId);
    res.json({ message: 'Animal deleted successfully.' });
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllAnimalsController(req: Request, res: Response): Promise<void> {
  try {
    const animals = await animalUseCases.getAllAnimalsUseCase();
    res.json(animals);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
}
  
export async function getAnimalsByOngIdController(req: Request, res: Response): Promise<void> {
  const ongId = Number(req.ong!.id);

  try {
    const animals = await animalUseCases.getAnimalsByOngIdUseCase(ongId);
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

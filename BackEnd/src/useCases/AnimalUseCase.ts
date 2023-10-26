// src/useCases/animalUseCases.ts

import * as animalRepository from '../repositories/AnimalRepository';

export async function addAnimalUseCase(name: string, age: number, ongId: number, description:string, photoUrl: string, isAdopted?: boolean): Promise<any> {
  const data = {
    name,
    age,
    description,
    ongId,
    photoUrl,
    isAdopted
  };

  return animalRepository.createAnimal(data);
}

export async function updateAnimalUseCase(animalId: number, data: any): Promise<any> {
  return animalRepository.updateAnimal(animalId, data);
}

export async function deleteAnimalUseCase(animalId: number): Promise<void> {
  return animalRepository.deleteAnimalById(animalId);
}

export async function getAllAnimalsUseCase(): Promise<any[]> {
  return animalRepository.getAllAnimals();
}

export async function getAnimalsByOngIdUseCase(ongId: number): Promise<any[]> {
  return animalRepository.getAnimalsByOngId(ongId);
}


export async function getAnimalByIdUseCase(animalId: number): Promise<any> {
  return animalRepository.getAnimalById(animalId);
}

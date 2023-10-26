// src/repositories/animalRepository.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createAnimal(data: any): Promise<any> {
  try {
    const animal = await prisma.animal.create({
      data,
    });
    return animal;
  } catch (error) {
    throw new Error('Failed to create an animal.');
  }
}

export async function updateAnimal(animalId: number, data: any): Promise<any> {
  try {
    const updatedAnimal = await prisma.animal.update({
      where: { id: animalId },
      data,
    });
    return updatedAnimal;
  } catch (error:any) {
    console.log(error.message)
    throw new Error('Failed to update the animal.');
  }
}

export async function deleteAnimalById(animalId: number): Promise<void> {
  try {
    await prisma.animal.delete({
      where: { id: animalId },
    });
  } catch (error) {
    throw new Error('Failed to delete the animal.');
  }
}

export async function getAllAnimals(): Promise<any[]> {
  try {
    const animals = await prisma.animal.findMany();
    return animals;
  } catch (error) {
    throw new Error('Failed to retrieve animals.');
  }
}

export async function getAnimalsByOngId(ongId: number): Promise<any[]> {
  try {
    const animals = await prisma.animal.findMany({
      where: {
        ongId,
      },
    });
    return animals;
  } catch (error) {
    throw new Error('Failed to retrieve animals by ONG ID.');
  }
}


export async function getAnimalById(animalId: number): Promise<any> {
  try {
    const animal = await prisma.animal.findUnique({
      where: { id: animalId },
    });
    return animal;
  } catch (error) {
    throw new Error('Failed to retrieve animal by ID.');
  }
}

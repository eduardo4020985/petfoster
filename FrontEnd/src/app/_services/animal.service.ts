  import { Injectable } from '@angular/core';

  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';

  const API_URL = 'http://localhost:3000';
  @Injectable({
    providedIn: 'root'
  })
  export class AnimalService {

    private baseUrl = API_URL

    constructor(private http: HttpClient) {}
      // Função para adicionar um animal
      addAnimal(name: string, age: number, description: string, photoUrl: string, isAdopted: boolean): Observable<any> {
        const animalData = { name, age, description, photoUrl, isAdopted };
        return this.http.post(`${this.baseUrl}/animals`, animalData);
      }
    
      // Função para atualizar um animal
      updateAnimal(animalId: number, name: string, age: number, description: string, photoUrl: string, isAdopted: boolean): Observable<any> {
        const animalData = { name, age, description, photoUrl, isAdopted };
        return this.http.put(`${this.baseUrl}/animals/${animalId}`, animalData);
      }
    
      // Função para obter um animal por ID
      getAnimalById(animalId: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/animals/${animalId}`);
      }
    
      // Função para listar todos os animais da ONG
      getAllAnimals(): Observable<any> {
        return this.http.get(`${this.baseUrl}/animals`);
      }

      // Função para listar todos os animais
      getAllAnimalsPublic(): Observable<any> {
        return this.http.get(`${this.baseUrl}/public/animals/`);
      }
    
      // Função para excluir um animal por ID
      deleteAnimal(animalId: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/animals/${animalId}`);
      }
    }
    
    
    


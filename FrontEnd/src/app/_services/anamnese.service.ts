import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anamnese } from '../interfaces/Anamnese';
import { AnamneseDetails } from '../interfaces/AnamneseDetails';
const API_URL = 'http://localhost:3000/';





@Injectable({
  providedIn: 'root'
})
export class AnamneseService {

  constructor(private http: HttpClient) {}
  
  private pacient: string= ""

  getAnamneses(): Observable<any> {
    return this.http.get<Anamnese[]>(API_URL + 'anamnese/' , /* { responseType: 'json'  } */);
  }

  getAnamneseDetails(id: number): Observable<any> {
    return this.http.get<AnamneseDetails[]>(API_URL + `anamnese/anamnese/${id}` , /* { responseType: 'json'  } */);
  }

  setPacientAnamnese(pacient: string){
    this.pacient=""
    this.pacient= pacient
  }

  getPacientAnamnese(): string {
    return this.pacient;
  }
}

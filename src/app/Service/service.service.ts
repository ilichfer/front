import { Persona } from './../Modelo/Persona';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  persona: Persona[];

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8090/personas';


  // tslint:disable-next-line: typedef
  getPersonas() {
    return this.http.get<Persona[]>(this.Url);
  }

  // tslint:disable-next-line: typedef
  createPersona(persona: Persona) {
    return this.http.post<Persona[]>(this.Url, persona);

  }



}

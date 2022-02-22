import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from '../models/Cita';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  url: string = 'http://localhost:8080/citas-medicas';

  constructor(private http: HttpClient) { }

  getCitasAsignadas() {
    return this.http.get<Cita[]>(this.url);
  }

  asignarCita(cita: Cita) {
    return this.http.put<Cita>(this.url + '/add', cita);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Consultorio } from '../models/Consultorio';

@Injectable({
  providedIn: 'root'
})
export class ConsultorioService {

  url = "http://localhost:8080/consultorios";

  constructor(private http: HttpClient) { }

  getConsultorios() {
    return this.http.get<Consultorio[]>(this.url);
  }

  getConsultorioId(id: number) {
    return this.http.get<Consultorio>(this.url + '/consultorio/' + id)
  }

  addConsultorio(consultorio: Consultorio) {
    return this.http.post<Consultorio>(this.url + '/add', consultorio)
  }

  editConsultorio(consultorio: Consultorio) {
    return this.http.put<Consultorio>(this.url + '/edit/' + consultorio.id, consultorio)
  }

  deleteConsultorio(id: number) {
    return this.http.delete<Consultorio>(this.url + '/delete/' + id)
  }
}

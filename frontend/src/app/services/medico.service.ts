import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medico } from '../models/Medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  url = 'http://localhost:8080/medicos';

  constructor(private http: HttpClient) { }

  getMedicos() {
    return this.http.get<Medico[]>(this.url);
  }

  getMedicoId(id: number) {
    return this.http.get<Medico>(this.url + '/medico/' + id)
  }

  addMedico(medico: Medico) {
    return this.http.post<Medico>(this.url + '/add', medico)
  }

  editMedico(medico: Medico) {
    return this.http.put<Medico>(this.url + '/edit/' + medico.id, medico)
  }

  deleteMedico(id: number) {
    return this.http.delete<Medico>(this.url + '/delete/' + id)
  }
}

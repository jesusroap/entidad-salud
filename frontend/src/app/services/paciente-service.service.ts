import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../models/Paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteServiceService {

  constructor(private http: HttpClient) { }

  url='http://localhost:8080/pacientes'

  getPacientes() {
    return this.http.get<Paciente[]>(this.url);
  }

  getPacienteId(id: number) {
    return this.http.get<Paciente>(this.url + '/paciente/' + id);
  }

  createPaciente(paciente: Paciente) {
    return this.http.post<Paciente>(this.url + '/add', paciente);
  }

  editPaciente(paciente: Paciente) {
    return this.http.put<Paciente>(this.url + '/edit/' + paciente.id, paciente);
  }

  deletePaciente(id: number) {
    return this.http.delete<Paciente>(this.url + '/delete/' + id)
  }

  // const options = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   })
    // }
}

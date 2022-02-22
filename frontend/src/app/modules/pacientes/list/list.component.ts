import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteServiceService } from 'src/app/services/paciente-service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public pacientes: Paciente[] = [
    // new Paciente(1, "Nombre", "Apellido", "Email", )
  ];

  title = 'Pacientes';

  constructor(private pacienteService: PacienteServiceService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.pacienteService.getPacientes().subscribe(data => {
      this.pacientes = data
    })
  }

  Edit(id: number) {
    this.router.navigate(['pacientes/edit/' + id])
  }

  Delete(id: number) {
    this.pacienteService.deletePaciente(id).subscribe(data => {
      alert('Paciente Eliminado');
      this.listar();
    });
  }

}

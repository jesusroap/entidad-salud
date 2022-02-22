import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Consultorio } from 'src/app/models/Consultorio';
import { Medico } from 'src/app/models/Medico';
import { Paciente } from 'src/app/models/Paciente';
import { CitasService } from 'src/app/services/citas.service';
import { ConsultorioService } from 'src/app/services/consultorio.service';
import { MedicoService } from 'src/app/services/medico.service';
import { PacienteServiceService } from 'src/app/services/paciente-service.service';

@Component({
  selector: 'app-add-citas',
  templateUrl: './add-citas.component.html',
  styleUrls: ['./add-citas.component.css']
})
export class AddCitasComponent implements OnInit {

  title = "Asignar Cita";

  public pacientes: Paciente[] = [];
  public medicos: Medico[] = [];
  public consultorios: Consultorio[] = [];

  cita = new FormGroup({
    date: new FormControl(''),
    patient: new FormGroup({
      id: new FormControl(''),
    }),
    doctor: new FormGroup({
      id: new FormControl(''),
    }),
    clinic: new FormGroup({
      id: new FormControl(''),
    })
  })

  constructor(private citaService: CitasService, private pacienteService: PacienteServiceService, private medicoService: MedicoService, private consultorioService: ConsultorioService, private router: Router) { }

  ngOnInit(): void {
    this.listarPacientes();
    this.listarMedicos();
    this.listarConsultorios();
  }

  onSubmit() {
    this.citaService.asignarCita(this.cita.value).subscribe(data => {
      alert("La cita se asigno con éxito.");
      this.router.navigate(["citas/citas-asignadas"]);
    })
  }

  listarPacientes() {
    this.pacienteService.getPacientes().subscribe(data => {
      this.pacientes = data
    })
  }

  listarMedicos() {
    this.medicoService.getMedicos().subscribe(data => {
      this.medicos = data
    })
  }

  listarConsultorios() {
    this.consultorioService.getConsultorios().subscribe(data => {
      this.consultorios = data
    })
  }

  volver() {
    this.router.navigate(['/citas/citas-asignadas'])
  }

}

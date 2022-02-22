import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Paciente } from 'src/app/models/Paciente';
import { PacienteServiceService } from 'src/app/services/paciente-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  title = 'Agregar Paciente';

  paciente = new FormGroup({
    user: new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      role: new FormControl('')
    }),
    age: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private pacienteService: PacienteServiceService, private router: Router) { }

  ngOnInit(): void {
    this.paciente.setValue({
      age: "",
      phone: "",
      address: "",
      user: {
        name: "",
        lastname: "",
        email: "",
        role: "Paciente"
      }
    })
  }

  onSubmit() {
    this.pacienteService.createPaciente(this.paciente.value).subscribe(data => {
      alert("El paciente se agrego con éxito.");
      this.router.navigate(["pacientes/list"]);
    })
  }

  volver() {
    this.router.navigate(['/pacientes/list'])
  }

}

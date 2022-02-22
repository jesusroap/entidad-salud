import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteServiceService } from 'src/app/services/paciente-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  title = 'Actualizar Paciente';

  paciente = new FormGroup({
    id: new FormControl(''),
    age: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    user: new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      role: new FormControl('')
    }),
  })

  constructor(private pacienteService: PacienteServiceService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pacienteId();
  }

  pacienteId() {
    const id: number = this.activatedRoute.snapshot.params["id"];
    this.pacienteService.getPacienteId(id).subscribe(data => {
      // this.paciente.setValue(data);

      // this.paciente.controls["id"].setValue(data.id);
      // this.paciente.controls["age"].setValue(data.age);
      // this.paciente.controls["phone"].setValue(data.phone);

      this.paciente.setValue({
        id: data.id,
        age: data.age,
        phone: data.phone,
        address: data.address,
        user: {
          name: data.user.name,
          lastname: data.user.lastname,
          email: data.user.email,
          role: data.user.role
        }
      });
    })
  }

  onSubmit() {
    this.pacienteService.editPaciente(this.paciente.value).subscribe(data => {
      alert("El paciente se actualizo con éxito.");
      this.router.navigate(["pacientes/list"]);
    })
  }

  volver() {
    this.router.navigate(['/pacientes/list'])
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-add-medico',
  templateUrl: './add-medico.component.html',
  styleUrls: ['./add-medico.component.css']
})
export class AddMedicoComponent implements OnInit {

  title = "Agregar Médico"

  medico = new FormGroup({
    user: new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      role: new FormControl('')
    })
  })

  constructor(private medicoService: MedicoService, private router: Router) { }

  ngOnInit(): void {
    this.medico.setValue({
      user: {
        name: "",
        lastname: "",
        email: "",
        role: "Medico"
      }
    })
  }

  onSubmit() {
    this.medicoService.addMedico(this.medico.value).subscribe(data => {
      alert("El médico se ha creado con éxito.");
      this.router.navigate(['/medicos/list']);
    })
  }

  volver() {
    this.router.navigate(['/medicos/list']);
  }

}

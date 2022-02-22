import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-edit-medico',
  templateUrl: './edit-medico.component.html',
  styleUrls: ['./edit-medico.component.css']
})
export class EditMedicoComponent implements OnInit {

  title="Editar Médico";

  medico = new FormGroup({
    id: new FormControl(''),
    user: new FormGroup({
      name: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      role: new FormControl('')
    })
  })

  constructor(private medicoService: MedicoService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.medicoId()
  }

  onSubmit() {
    this.medicoService.editMedico(this.medico.value).subscribe(data => {
      alert("Médico actualizado con éxito.");
      this.router.navigate(['/medicos/list']);
    })
  }

  medicoId() {
    const id: number = this.activatedRoute.snapshot.params["id"];
    this.medicoService.getMedicoId(id).subscribe(data => {
      this.medico.setValue({
        id: data.id,
        user: {
          name: data.user.name,
          lastname: data.user.lastname,
          email: data.user.email,
          role: data.user.role
        }
      });
    })
  }

  volver() {
    this.router.navigate(['/medicos/list']);
  }

}

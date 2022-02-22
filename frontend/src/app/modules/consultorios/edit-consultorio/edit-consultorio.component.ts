import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultorioService } from 'src/app/services/consultorio.service';

@Component({
  selector: 'app-edit-consultorio',
  templateUrl: './edit-consultorio.component.html',
  styleUrls: ['./edit-consultorio.component.css']
})
export class EditConsultorioComponent implements OnInit {

  title = "Actualizar Consultorio";

  consultorio = new FormGroup({
    id: new FormControl(''),
    department: new FormControl(''),
    municipality: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private router: Router, private consultorioService: ConsultorioService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.consultorioId()
  }

  onSubmit() {
    this.consultorioService.editConsultorio(this.consultorio.value).subscribe(data => {
      alert("Consultorio actualizado con éxito.");
      this.router.navigate(['/consultorios/list'])
    })
  }

  consultorioId() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.consultorioService.getConsultorioId(id).subscribe(data => {
      this.consultorio.setValue({
        id: data.id,
        department: data.department,
        municipality: data.municipality,
        address: data.address
      })
    })
  }

  volver() {
    this.router.navigate(['/consultorios/list'])
  }

}

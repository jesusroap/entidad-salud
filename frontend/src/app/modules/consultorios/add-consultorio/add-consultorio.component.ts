import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultorioService } from 'src/app/services/consultorio.service';

@Component({
  selector: 'app-add-consultorio',
  templateUrl: './add-consultorio.component.html',
  styleUrls: ['./add-consultorio.component.css']
})
export class AddConsultorioComponent implements OnInit {

  title = "Agregar Consultorio";

  consultorio = new FormGroup({
    department: new FormControl(''),
    municipality: new FormControl(''),
    address: new FormControl('')
  })

  constructor(private router: Router, private consultorioService: ConsultorioService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.consultorioService.addConsultorio(this.consultorio.value).subscribe(data => {
      alert("Consultorio creado con éxito.");
      this.router.navigate(['/consultorios/list'])
    })
  }

  volver() {
    this.router.navigate(['/consultorios/list'])
  }

}

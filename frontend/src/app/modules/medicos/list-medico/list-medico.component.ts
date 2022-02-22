import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/models/Medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-list-medico',
  templateUrl: './list-medico.component.html',
  styleUrls: ['./list-medico.component.css']
})
export class ListMedicoComponent implements OnInit {

  title = "Médicos"

  public medicos: Medico[] = [];

  constructor(private medicosService:MedicoService, private router: Router ) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.medicosService.getMedicos().subscribe(data => {
      this.medicos = data;
    })
  }

  edit(id: number) {
    this.router.navigate(['/medicos/edit/' + id])
  }

  delete(id: number) {
    this.medicosService.deleteMedico(id).subscribe(data => {
      alert("Médico eliminado con éxito.");
      this.listar();
    })
  }

}

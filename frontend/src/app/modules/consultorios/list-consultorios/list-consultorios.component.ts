import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consultorio } from 'src/app/models/Consultorio';
import { ConsultorioService } from 'src/app/services/consultorio.service';

@Component({
  selector: 'app-list-consultorios',
  templateUrl: './list-consultorios.component.html',
  styleUrls: ['./list-consultorios.component.css']
})
export class ListConsultoriosComponent implements OnInit {

  title = "Consultorios";

  public consultorios: Consultorio[] = [];

  constructor(private consultorioService: ConsultorioService, private router: Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.consultorioService.getConsultorios().subscribe(data => {
      this.consultorios = data
    })
  }

  edit(id: number) {
    this.router.navigate(['/consultorios/edit/' + id])
  }

  delete(id:number) {
    this.consultorioService.deleteConsultorio(id).subscribe(data => {
      alert("Consultorio eliminado con éxito.");
      this.listar();
    })
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCitasComponent } from './add-citas/add-citas.component';
import { CitasAsignadasComponent } from './citas-asignadas/citas-asignadas.component';

const routes: Routes = [
  {
    path: "citas-asignadas",
    component: CitasAsignadasComponent
  },
  {
    path: "add",
    component: AddCitasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitasRoutingModule { }

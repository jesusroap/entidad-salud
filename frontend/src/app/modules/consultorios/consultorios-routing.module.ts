import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddConsultorioComponent } from './add-consultorio/add-consultorio.component';
import { EditConsultorioComponent } from './edit-consultorio/edit-consultorio.component';
import { ListConsultoriosComponent } from './list-consultorios/list-consultorios.component';

const routes: Routes = [
  {
    path: "list",
    component: ListConsultoriosComponent
  },
  {
    path: "add",
    component: AddConsultorioComponent
  },
  {
    path: "edit/:id",
    component: EditConsultorioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultoriosRoutingModule { }

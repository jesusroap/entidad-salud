import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from '../pacientes/edit/edit.component';
import { AddMedicoComponent } from './add-medico/add-medico.component';
import { EditMedicoComponent } from './edit-medico/edit-medico.component';
import { ListMedicoComponent } from './list-medico/list-medico.component';

const routes: Routes = [
  {
    path: "list",
    component: ListMedicoComponent
  },
  {
    path: "add",
    component: AddMedicoComponent
  },
  {
    path: "edit/:id",
    component: EditMedicoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }

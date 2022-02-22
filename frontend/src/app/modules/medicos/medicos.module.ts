import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { AddMedicoComponent } from './add-medico/add-medico.component';
import { ListMedicoComponent } from './list-medico/list-medico.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMedicoComponent } from './edit-medico/edit-medico.component';

@NgModule({
  declarations: [
    AddMedicoComponent,
    ListMedicoComponent,
    EditMedicoComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MedicosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultoriosRoutingModule } from './consultorios-routing.module';
import { AddConsultorioComponent } from './add-consultorio/add-consultorio.component';
import { ListConsultoriosComponent } from './list-consultorios/list-consultorios.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditConsultorioComponent } from './edit-consultorio/edit-consultorio.component';


@NgModule({
  declarations: [
    AddConsultorioComponent,
    ListConsultoriosComponent,
    EditConsultorioComponent
  ],
  imports: [
    CommonModule,
    ConsultoriosRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ConsultoriosModule { }

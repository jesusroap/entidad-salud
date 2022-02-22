import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitasRoutingModule } from './citas-routing.module';
import { CitasAsignadasComponent } from './citas-asignadas/citas-asignadas.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import listPlugin from '@fullcalendar/list';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCitasComponent } from './add-citas/add-citas.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  listPlugin
]);

@NgModule({
  declarations: [
    CitasAsignadasComponent,
    AddCitasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    CitasRoutingModule,
    FullCalendarModule,
    SharedModule,

    FormsModule,
    ReactiveFormsModule
  ]
})
export class CitasModule { }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular';
import { Cita } from 'src/app/models/Cita';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-citas-asignadas',
  templateUrl: './citas-asignadas.component.html',
  styleUrls: ['./citas-asignadas.component.css']
})
export class CitasAsignadasComponent implements OnInit {

  title = "Citas Asignadas";
  events = [
    { title: 'event 1', date: '2022-02-10' },
    { title: 'event 2', date: '2022-02-11' }
  ];
  calendarOptions: CalendarOptions = {
    initialView: 'listDay',
  };

  constructor(private router: Router, private citasService: CitasService) { }

  ngOnInit(): void {
    this.citasAsignadas();
  }

  handleDateClick(arg: any) {
    alert('date click! ' + arg.dateStr)
  }

  citasAsignadas() {
    this.citasService.getCitasAsignadas().subscribe(data => {

      this.events = data.map(({id, date, patient})=>({title: String(patient.user.name + " " + patient.user.lastname), date: String(date)}));

      this.calendarOptions = {
        dateClick: this.handleDateClick.bind(this),
        events: this.events,
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'listDay,dayGridMonth'
        }
      }
    })
  }

}

import { Consultorio } from "./Consultorio";
import { Medico } from "./Medico";
import { Paciente } from "./Paciente";

export class Cita {
  constructor(
    public id: number,
    public date: Date,
    public patient: Paciente,
    public doctor: Medico,
    public clinics: Consultorio
  ) {}
}

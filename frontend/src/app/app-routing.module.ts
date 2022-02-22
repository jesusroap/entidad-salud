import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "pacientes",
    loadChildren: () => import("./modules/pacientes/pacientes.module").then(x => x.PacientesModule)
  },
  {
    path: "medicos",
    loadChildren: () => import("./modules/medicos/medicos.module").then(x => x.MedicosModule)
  },
  {
    path: "citas",
    loadChildren: () => import("./modules/citas/citas.module").then(x => x.CitasModule)
  },
  {
    path: "consultorios",
    loadChildren: () => import("./modules/consultorios/consultorios.module").then(x => x.ConsultoriosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

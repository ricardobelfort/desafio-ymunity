import { Routes } from '@angular/router';
import { PatientFormComponent } from './pages/patient-form/patient-form.component';
import { ListPatientComponent } from './pages/list-patient/list-patient.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'novo-paciente', component: PatientFormComponent },
  { path: 'pacientes', component: ListPatientComponent },
];

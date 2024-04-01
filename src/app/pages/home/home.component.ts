import { Component, OnInit, inject } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PatientService } from '../../services/patient.service';

interface Option {
  name: string;
  code: string;
}

export interface Patient {
  paciente: string;
  status: boolean;
  diagnostico: string;
  medicamento: string;
  planoSaude: string;
  lastUpdate: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SidebarComponent,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    TableModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  search!: string;
  options: Option[] | undefined;
  selectedPatient: Option | undefined = {
    name: 'PACIENTES ATIVOS',
    code: 'PA',
  };

  patients: Patient[] = [];
  patientService = inject(PatientService);
  currentPage: number = 1;

  ngOnInit() {
    this.options = [
      { name: 'TODOS OS PACIENTES', code: 'ALL' },
      { name: 'PACIENTES ATIVOS', code: 'PA' },
      { name: 'PACIENTES INATIVOS', code: 'PI' },
    ];

    this.patientService
      .getPatientList(this.currentPage)
      .subscribe((data) => (this.patients = data));
  }
}

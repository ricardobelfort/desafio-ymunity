import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';
import { PatientService } from '../../services/patient.service';
import { Table } from 'primeng/table';
import { DatePipe } from '@angular/common';

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
    TooltipModule,
    TagModule,
    DatePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  options!: any[];
  selectedPatient = {
    label: 'TODOS OS PACIENTES',
    value: 'todos',
  };

  patients: Patient[] = [];
  patientService = inject(PatientService);
  currentPage: number = 1;

  ngOnInit() {
    this.options = [
      { label: 'TODOS OS PACIENTES', value: 'todos' },
      { label: 'PACIENTES ATIVOS', value: 'ativos' },
      { label: 'PACIENTES INATIVOS', value: 'inativos' },
    ];

    this.patientService
      .getPatientList(this.currentPage)
      .subscribe((data) => (this.patients = data));
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  getSeverity(status: string) {
    switch (status) {
      case 'todos':
        return 'info';

      case 'ativos':
        return 'success';

      case 'inativos':
        return 'danger';
    }
  }
}

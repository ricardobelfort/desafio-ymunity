import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { TagModule } from 'primeng/tag';
import { DatePipe } from '@angular/common';
import { SplitButtonModule } from 'primeng/splitbutton';
import { Patient } from '../../components/models/patient';
import { MenuItem } from 'primeng/api/menuitem';
import { Table } from 'primeng/table/table';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-list-patient',
  standalone: true,
  imports: [
    ButtonModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    TableModule,
    TooltipModule,
    TagModule,
    SplitButtonModule,
    DatePipe,
  ],
  templateUrl: './list-patient.component.html',
  styleUrl: './list-patient.component.css',
})
export class ListPatientComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  statuses!: any[];
  patients!: Patient[];
  currentPage: number = 1;
  items: MenuItem[] | undefined;
  loading: boolean = true;
  visible: boolean = false;

  patientService = inject(PatientService);

  ngOnInit() {
    this.statuses = [
      { label: 'Pacientes ativos', value: 'ativo' },
      { label: 'Pacientes inativos', value: 'inativo' },
    ];

    this.items = [{ label: 'Ativo' }, { label: 'Inativo' }];

    this.patientService.getPatientList(this.currentPage).subscribe((data) => {
      this.patients = data;
      this.loading = false;
    });
  }

  applyFilterGlobal($event: any, stringVal: any) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  getSeverity(status: string) {
    switch (status.toLowerCase()) {
      case 'ativo':
        return 'success';

      case 'inativo':
        return 'danger';
    }
  }

  createPatient() {
    console.log('criar...');
  }
}

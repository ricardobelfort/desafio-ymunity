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
import { SplitButtonModule } from 'primeng/splitbutton';
import { Patient } from '../../components/models/patient';
import { MenuItem } from 'primeng/api/menuitem';

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
    SplitButtonModule,
    DatePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  statuses!: any[];
  patients!: Patient[];
  patientService = inject(PatientService);
  currentPage: number = 1;
  items: MenuItem[] | undefined;
  loading: boolean = true;

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
}

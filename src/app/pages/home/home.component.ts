import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';

interface Patient {
  name: string;
  code: string;
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
  patients: Patient[] | undefined;
  selectedPatient: Patient | undefined = {
    name: 'PACIENTES ATIVOS',
    code: 'PA',
  };

  ngOnInit() {
    this.patients = [
      { name: 'TODOS OS PACIENTES', code: 'ALL' },
      { name: 'PACIENTES ATIVOS', code: 'PA' },
      { name: 'PACIENTES INATIVOS', code: 'PI' },
    ];
  }
}

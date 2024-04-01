import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Patient } from '../pages/home/home.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private readonly API = 'http://localhost:3000/patients';

  http = inject(HttpClient);

  getPatientList(pagina: number): Observable<Patient[]> {
    const itemsPerPage = 20;

    return this.http.get<Patient[]>(
      `${this.API}?_start=${pagina}&_limit=${itemsPerPage}`
    );
  }
}

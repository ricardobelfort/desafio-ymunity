import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../components/models/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private readonly API = 'http://localhost:3000/patients';

  http = inject(HttpClient);

  getPatientList(paga: number): Observable<Patient[]> {
    const itemsPerPage = 20;

    let params = new HttpParams()
      .set('_page', paga)
      .set('_limit', itemsPerPage);

    return this.http.get<Patient[]>(this.API, { params });
  }
}

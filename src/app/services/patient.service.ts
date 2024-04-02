import { HttpClient, HttpParams } from '@angular/common/http';
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

    let params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itemsPerPage);

    return this.http.get<Patient[]>(this.API, { params });
  }
}

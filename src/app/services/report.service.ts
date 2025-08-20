
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  studentId: number;
  firstName: string;
  lastName: string;
  dob: string;
  className: string;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiUrl = 'http://localhost:8080/api/report';

  constructor(private http: HttpClient) {}

  getStudents(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/students?page=${page}&size=${size}`);
  }

  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/students/${id}`);
  }

  getStudentsByClass(className: string, page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/students/filter?className=${className}&page=${page}&size=${size}`);
  }

  exportCsv() {
    window.open(`${this.apiUrl}/export/csv`, '_blank');
  }

  exportExcel() {
    window.open(`${this.apiUrl}/export/excel`, '_blank');
  }

  exportPdf() {
    window.open(`${this.apiUrl}/export/pdf`, '_blank');
  }
}

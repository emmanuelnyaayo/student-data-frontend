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
export class SummaryService {

  // Point to summary API instead of report
  private apiUrl = 'http://localhost:8080/api/summary';

  constructor(private http: HttpClient) {}

  // Get only students with score > 50
  getPassingStudents(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/students?page=${page}&size=${size}`);
  }
}

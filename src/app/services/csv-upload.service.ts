import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvUploadService {
  private apiUrl = 'http://localhost:8080/api/upload';

  constructor(private http: HttpClient) {}

  uploadCsv(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/csv-to-db`, formData, { responseType: 'text' });
  }
}

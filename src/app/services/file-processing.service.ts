
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileProcessingService {

  private apiUrl = 'http://localhost:8080/api/process';

  constructor(private http: HttpClient) {}

  convertExcelToCsv(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}/excel-to-csv`, formData, { responseType: 'text' });
  }
}

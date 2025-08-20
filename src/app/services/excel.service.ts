import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  private apiUrl = 'http://localhost:8080/api/excel';

  constructor(private http: HttpClient) {}

  generateExcel(records: number): Observable<string> {
    return this.http.post(
      `${this.apiUrl}/generate?records=${records}`,
      {},
      { responseType: 'text' } 
    );
  }
  
}

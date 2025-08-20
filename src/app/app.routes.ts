
import { Routes } from '@angular/router';
import { ExcelGeneratorComponent } from './components/excel-generator/excel-generator.component';
import { ExcelToCsvComponent } from './components/excel-to-csv/excel-to-csv.component';
import { CsvUploadComponent } from './components/csv-upload/csv-upload.component';
import { ReportComponent } from './components/report/report.component';

export const routes: Routes = [
  { path: '', redirectTo: 'generate', pathMatch: 'full' },

  { path: 'generate', component: ExcelGeneratorComponent },   
  { path: 'process', component: ExcelToCsvComponent },   
  { path: 'upload', component: CsvUploadComponent },      
  { path: 'report', component: ReportComponent }             
];

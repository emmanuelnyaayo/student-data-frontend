import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'generate', pathMatch: 'full' },

  { path: 'generate', loadComponent: () => import('./components/excel-generator/excel-generator.component').then(m => m.ExcelGeneratorComponent) },
  { path: 'process', loadComponent: () => import('./components/excel-to-csv/excel-to-csv.component').then(m => m.ExcelToCsvComponent) },
  { path: 'upload', loadComponent: () => import('./components/csv-upload/csv-upload.component').then(m => m.CsvUploadComponent) },
  { path: 'report', loadComponent: () => import('./components/report/report.component').then(m => m.ReportComponent) },
  { path: 'summary', loadComponent: () => import('./components/summary/summary.component').then(m => m.SummaryComponent) }
];

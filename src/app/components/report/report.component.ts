
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReportService, Student } from '@services/report.service';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  students: Student[] = [];
  page: number = 0;
  size: number = 5;
  totalElements: number = 0;

  searchId: number | null = null;
  filterClass: string = '';

  classes = ['Class1', 'Class2', 'Class3', 'Class4', 'Class5'];

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    if (this.filterClass) {
      this.reportService.getStudentsByClass(this.filterClass, this.page, this.size).subscribe(data => {
        this.students = data.content;
        this.totalElements = data.totalElements;
      });
    } else {
      this.reportService.getStudents(this.page, this.size).subscribe(data => {
        this.students = data.content;
        this.totalElements = data.totalElements;
      });
    }
  }

  searchStudent() {
    if (this.searchId) {
      this.reportService.getStudentById(this.searchId).subscribe(student => {
        this.students = student ? [student] : [];
        this.totalElements = this.students.length;
      });
    } else {
      this.loadStudents();
    }
  }

  onPageChange(event: any) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.loadStudents();
  }

  exportCsv() { this.reportService.exportCsv(); }
  exportExcel() { this.reportService.exportExcel(); }
  exportPdf() { this.reportService.exportPdf(); }
}


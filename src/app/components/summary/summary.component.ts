import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SummaryService, Student } from '@services/summary.service';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  students: Student[] = [];
  page: number = 0;
  size: number = 5;
  totalElements: number = 0;

  constructor(private summaryService: SummaryService) {}

  ngOnInit(): void {
    this.loadPassingStudents();
  }

  loadPassingStudents() {
    this.summaryService.getPassingStudents(this.page, this.size).subscribe(data => {
      this.students = data.content;
      this.totalElements = data.totalElements;
    });
  }

  onPageChange(event: any) {
    this.page = event.pageIndex;
    this.size = event.pageSize;
    this.loadPassingStudents();
  }
}

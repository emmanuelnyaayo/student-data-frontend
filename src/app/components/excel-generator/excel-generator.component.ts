import { Component } from '@angular/core';
import { ExcelService } from '@services/excel.service';
import { FormsModule } from '@angular/forms';   
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-excel-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './excel-generator.component.html',
  styleUrl: './excel-generator.component.css'
})
export class ExcelGeneratorComponent {
  records: number = 1000;
  message: string = '';

  constructor(private excelService: ExcelService) {}

  generateFile() {
    this.message = 'Processing... please wait ⏳';
    this.excelService.generateExcel(this.records).subscribe({
      next: (response) => {
        this.message = response;
      },
      error: (err) => {
        console.error(err);
        this.message = '❌ Error generating Excel file';
      }
    });
  }
}



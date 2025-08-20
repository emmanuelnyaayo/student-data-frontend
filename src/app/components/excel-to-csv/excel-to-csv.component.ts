
import { Component } from '@angular/core';
import { FileProcessingService } from '@services/file-processing.service';

@Component({
  selector: 'app-excel-to-csv',
  standalone: true,
  imports: [],
  templateUrl: './excel-to-csv.component.html',
  styleUrl: './excel-to-csv.component.css'
})
export class ExcelToCsvComponent {

  selectedFile: File | null = null;
  message: string = '';

  constructor(private fileService: FileProcessingService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  convertFile() {
    if (!this.selectedFile) {
      this.message = "⚠️ Please select an Excel file first.";
      return;
    }
    this.message = "Processing... ⏳";

    this.fileService.convertExcelToCsv(this.selectedFile).subscribe({
      next: (response) => {
        this.message = response;
      },
      error: (err) => {
        console.error(err);
        this.message = "❌ Error converting Excel to CSV.";
      }
    });
  }
}


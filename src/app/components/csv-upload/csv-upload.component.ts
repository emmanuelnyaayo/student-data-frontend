
import { Component } from '@angular/core';
import { CsvUploadService } from '@services/csv-upload.service';

@Component({
  selector: 'app-csv-upload',
  standalone: true,
  imports: [],
  templateUrl: './csv-upload.component.html',
  styleUrls: ['./csv-upload.component.css']
})
export class CsvUploadComponent {
  selectedFile: File | null = null;
  message: string = '';

  constructor(private csvService: CsvUploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadFile() {
    if (!this.selectedFile) {
      this.message = "⚠️ Please select a CSV file.";
      return;
    }

    this.message = "Uploading... ⏳";

    this.csvService.uploadCsv(this.selectedFile).subscribe({
      next: (response) => {
        this.message = response;
      },
      error: (err) => {
        console.error(err);
        this.message = "❌ Error uploading CSV file.";
      }
    });
  }
}

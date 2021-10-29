import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/common-services/api/api.service';

@Injectable({
  providedIn: 'root',
})
export class UploadCsvService {
  constructor(private apiService: ApiService) {}
  async uploadCsv(file): Promise<{
    fileName: string;
    originalName: string;
  }> {
    return (await this.apiService.postFile('csvtovcf/uploadCsv', file)) as {
      fileName: string;
      originalName: string;
    };
  }
}

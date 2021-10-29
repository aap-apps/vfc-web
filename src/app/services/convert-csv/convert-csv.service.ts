import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/common-services/api/api.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConvertCsvService {
  constructor(private apiService: ApiService) {}
  convertTheCsvToVcard(fileName: string, key: string) {
    console.log(fileName, key);

    this.apiService.getData(`csvtovcf/getJson/${fileName}/${key}`);
  }
}

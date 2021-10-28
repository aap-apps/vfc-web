import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-csf-upload',
  templateUrl: './csf-upload.page.html',
  styleUrls: ['./csf-upload.page.scss'],
})
export class CsfUploadPage implements OnInit {
  filePath = '';
  constructor(private apiService: ApiService) {}
  getFilePath(value) {
    debugger;
    console.log(value.target.files[0]);
    this.apiService.postFile(
      'https://fournotone.com/csvtovcf/uploadCsv',
      value.target.files[0]
    );
  }
  ngOnInit() {}
}

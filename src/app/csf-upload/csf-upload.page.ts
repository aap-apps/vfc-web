import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../common-services/api/api.service';
import { ConvertCsvService } from '../services/convert-csv/convert-csv.service';
import { UploadCsvService } from '../services/upload-csv/upload-csv.service';

@Component({
  selector: 'app-csf-upload',
  templateUrl: './csf-upload.page.html',
  styleUrls: ['./csf-upload.page.scss'],
})
export class CsfUploadPage implements OnInit {
  filePath = '';
  convertorForm = new FormGroup({
    apiFileName: new FormControl('', Validators.required),
    key: new FormControl('', Validators.required),
  });
  constructor(
    private uploadCsvService: UploadCsvService,
    private convertCsvService: ConvertCsvService
  ) {}
  async getFilePath(value) {
    console.log(value.target.files[0]);
    let file = await this.uploadCsvService.uploadCsv(value.target.files[0]);
    console.log(file);
    this.convertorForm.patchValue({ apiFileName: file.fileName });
  }
  ngOnInit() {}

  async sumbit(form: FormGroup) {
    this.convertCsvService.convertTheCsvToVcard(
      form.value.apiFileName,
      form.value.key
    );
    this.convertorForm.reset();
  }
}

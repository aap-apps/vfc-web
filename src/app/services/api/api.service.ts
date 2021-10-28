import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  postFile(url: string, file: string) {
    let myformData: FormData = new FormData();
    myformData.append('file', file);
    this.http.post(url, myformData).subscribe((res) => {
      console.log(res);
    });
  }
}

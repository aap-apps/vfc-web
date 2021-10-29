import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular/providers/loading-controller';

import { throwError } from 'rxjs';
import { LoaderService } from 'src/app/native-services/loader/loader.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private loaderService: LoaderService) {}
  postFile(endPoint: string, file: string) {
    return new Promise(async (resolve, reject) => {
      let myformData: FormData = new FormData();
      this.loaderService.showLoader();
      myformData.append('file', file);
      this.http.post(`${environment.url}/${endPoint}`, myformData).subscribe(
        (res) => {
          console.log(res);
          this.loaderService.hideLoader();
          resolve(res);
        },
        (err) => {
          debugger;
          this.loaderService.hideLoader();
          this.handleError(err);
          reject(err);
        }
      );
    });
  }
  getData(endPoint) {
    return new Promise(async (resolve, reject) => {
      let httpOptions = {
        headers: new HttpHeaders({}),
        responseType: 'text',
      };
      window.open(`${environment.url}/${endPoint}`);
      // this.http.get(`${environment.url}/${endPoint}`, ).subscribe(
      //   async (res: string) => {
      //     debugger;
      //     this.loaderService.hideLoader();
      //     // window.open(res);
      //     resolve(res);
      //   },
      //   (err) => {
      //     debugger;
      //     this.loaderService.hideLoader();
      //     this.handleError(err);
      //     reject(err);
      //   }
      // );
    });
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}

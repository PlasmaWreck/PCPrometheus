import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root'
})
export class PrometheusapiService {
  public data: any;

  private url: string = environment.api;

  constructor(private http: HttpClient, private router: Router) { }


  public get(): Observable<any> {

    //We are returning the result that we get from the api.
    // After the return we have our Method which is a GET.
    // A GET has two parameters, The Full URl + Key as well as our options Which is our ContentType.
    // EX URL:  https://csa2020studentapi.azurewebsites.net/ + userinfo
    return this.http.get(this.url, httpOptions)

      // THE PIPE LETS YOU COMBIME MULTIPLE FUNTIONS INTO ONE FUNCTION 
      .pipe(

        // Map is going through all items returned and stored in this.data variable.
        map(res => this.data = res),

        // ALLOW US TO TAP INTO THE OBSERVABLE TO BE ABLE CHECK FOR SUCCESS / FAILED ATTEMPT THEN DETERMINES HOW TO HANDLE IT. 
        tap((res: any) => this.handleSuccess(res, null)),
        catchError(err => this.handleError(err)),
      );
  }




  private handleSuccess(res: any, optionalMsg?: any) {
    if (optionalMsg) {
      //this.toastService.showSuccess('Success', optionalMsg);
    }
  }

  private handleError(err: HttpErrorResponse, isLogin?: boolean) {
    let message: string = "";
    let route = '';
    if (err.status === 401) {
      message = !isLogin ? 'Unauthorized' : '';
      route = !isLogin ? 'sign-in' : '';
    } else if (err.status === 403) {
      message = 'Forbidden';
      route = 'login';
    } else if (err.status === 404) {
      route = 'notfound';
    } else {
      message = (err.error && typeof err.error === 'string') ? err.error : err.error.Message ? err.error.Message
        : err.message ? err.message : 'Ooops! Something went wrong!';
    }
    if (route) {
      this.router.navigate([route]);
    }
    if (message) {
      // this.toastService.showError('Error!', message);
    }
    return of(message);
  }
}

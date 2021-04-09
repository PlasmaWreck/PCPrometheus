import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
// All the imports we will be needing are up top. You could add them now or you can add them as you need them.

// Below is our httpOptions, our options could have several properties. 
// As of now we are attatching our headers. The headers are making sure the correct data type is being sent over to the database.
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTg0Mzk0MzMsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCIsImF1ZCI6Imh0dHA6Ly9sb2NhbGhvc3Q6NTAwMCJ9.Iny0yeDnEEeEmBJUDJKaF9ClmjKDhV1ZAe1kROGYMFo' }),
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // All of our data that is being sent back from the api will be stored in Data thats why its a type of any.
  public data: any;

  // Old way of setting our our ULR
  // private url:string="https://csa2020studentapi.azurewebsites.net/"

  // New way  of setting up url
  // See environment.ts for url above.
  private url: string = environment.api;

  constructor(private http: HttpClient, private router: Router) { }

  //SYNTAX
  // public functionName(Variable: VariableType):What this Function is returning{
  //    return this.http.METHODTYPE(URL to target, HTTP OPTIONS) 
  //      .pipe(
  //         map(results => assignedVariable = results),
  //         tap((result:any) => this.handleSuccess(res, null)),
  //         catchError(err => this.handleErorr(err))
  //      );
  // }
  // ALL THE METHODS BELOW ARE RXJS THINGS LIKE THE OBSERVABLES. 

  // This our get Function.
  // Every GET thats gets called will use this function to call the api.
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

  // This our delete Function.
  // Every Delete thats gets called will use this function to call the api.
  public delete(key: string): Observable<any> {

    //We are returning the result that we get from the api.
    // After the return we have our Method which is a DELETE.
    // A DELETE has two parameters, The Full URl + Key as well as our options Which is our ContentType.
    // EX URL:  https://csa2020studentapi.azurewebsites.net/ + userinfo/19;
    return this.http.delete(this.url + key, httpOptions)
      // THE PIPE LETS YOU COMBIME MULTIPLE FUNTIONS INTO ONE FUNCTION 
      .pipe(

        // Map is going through all items returned and stored in this.data variable.
        map(res => this.data = res),

        // ALLOW US TO TAP INTO THE OBSERVABLE TO BE ABLE CHECK FOR SUCCESS / FAILED ATTEMPT THEN DETERMINES HOW TO HANDLE IT. 
        tap((res: any) => this.handleSuccess(res, null)),
        catchError(err => this.handleError(err)),
      );
  }

  // This our POST Function.
  // Every POST thats gets called will use this function to call the api.
  public post(key: string, item: any, optionalMsg?: string): any {

    //We are returning the result that we get from the api.
    // After the return we have our Method which is a POST.
    // A POST has two parameters, The Full URl + Key as well as our item Which is our the Object we want to add to the API.
    // EX URL:  https://csa2020studentapi.azurewebsites.net/ + userinfo/add;

    return this.http.post(this.url, item)
      // THE PIPE LETS YOU COMBINE MULTIPLE FUNCTIONS INTO ONE FUNCTION 
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

  hide(hide: boolean): boolean {
    return hide = true;
  }

  public postFile(url: string, data: any, opt?: any): Observable<any> {
    return this.http.post<any>(this.url + url, data, { headers: { 'enctype': 'multipart/form-data' } });
  }
}

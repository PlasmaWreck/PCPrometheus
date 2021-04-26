import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json',
  Authorization: "my-auth-token"
})

}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://api.bestbuy.com/v1/products(search=Motherboard)?format=json&apiKey=90U4QxBoKuQXAjHofYijTIR3";

  public data: any;

  private loginUrl: string = environment.api

  constructor(private http: HttpClient, private router: Router) { }
  public GetData(): Observable<any>{
    return this.http.get(this.url);
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

    }
    return of(message);
  }
  hide(hide: boolean): boolean {
    return hide = true;
  }

  public postFile(url: string, data: any, opt?: any): Observable<any> {
    return this.http.post<any>(this.url + url, data, { headers: { 'enctype': 'multipart/form-data' } });
  }
  //--------------------------------------------------------------

  public get(key:string): Observable<any>
  {
    let tokenInfo:string = "bearer "+localStorage.getItem("token"); 
    httpOptions.headers = httpOptions.headers.set("Authorization",tokenInfo);

    return this.http.get(this.loginUrl+key,httpOptions).pipe(
      map(res => this.data = res),
      tap((res: any) => this.handleSuccess(res, null)),
      catchError(err => this.handleError(err)),
    )
  }


  public post(route: string, item: any, optionalMsg?: string): any {
    return this.http.post(this.loginUrl + route, item)
      .pipe(
        map(res => this.data = res),
        tap((res: any) => this.handleSuccess(res, null)),
        catchError(err => this.handleError(err)),
      );
  }
  
}

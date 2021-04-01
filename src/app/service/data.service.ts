import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = "https://api.bestbuy.com/v1/products(search=Motherboard)?format=json&apiKey=90U4QxBoKuQXAjHofYijTIR3";
  constructor(private http: HttpClient) { }
  public GetData(): Observable<any>{
    return this.http.get(this.url);
  }

  
}

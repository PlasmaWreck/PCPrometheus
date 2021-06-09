import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProPathService {

  constructor() { }

  budget = 10;
  responses = {
    "q1" : 0,
    "q2" : 0,
    "q3" : 0,
    "q4" : 0,
    "q5" : 0,
    "q6" : 0 
  }

 getBudget(){
  return this.budget
 }
}

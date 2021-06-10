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
  partsCut = {
    gpu: 0,
    cpu: 0,
    case: 0,
    psu: 0,
    motherboard: 0,
    ram: 0,
    storage: 0}

    partsChosen = {
      gpu: 0,
      cpu: 0,
      case: 0,
      psu: 0,
      motherboard: 0,
      ram: 0,
      storage: 0}
  


 getBudget(){
  return this.budget
 }
}

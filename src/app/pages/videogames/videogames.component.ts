import { Component, OnInit } from '@angular/core';
import { ProPathService } from 'src/app/service/ProPath/pro-path.service';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {

  constructor(private DataService: ProPathService) {}
budget = 0;
responses = {
  "q1" : 0,
  "q2" : 0,
  "q3" : 0,
  "q4" : 0,
  "q5" : 0,
  "q6" : 0 
}


  ngOnInit(): void {
    this.budget=this.DataService.getBudget();
    this.DataService.partsCut.gpu = this.budget *.25;
    this.DataService.partsCut.cpu = this.budget *.20;
    this.DataService.partsCut.case = this.budget *.10;
    this.DataService.partsCut.psu = this.budget *.10;
    this.DataService.partsCut.motherboard = this.budget *.15;
    this.DataService.partsCut.ram = this.budget *.10;
    this.DataService.partsCut.storage = this.budget *.10;
    console.log(this.budget)
    console.log(this.DataService.partsCut);
  }

  recordResponse(qNum, ansNum){
  this.DataService.responses[qNum] = ansNum;
   console.log(this.DataService.responses);
  }

calculateCuts(){
  switch(this.DataService.responses.q1){
    case 1 : 
      this.DataService.partsCut.cpu = this.DataService.partsCut.cpu - (this.DataService.partsCut.cpu*.1);
      
    case 3:
      this.DataService.partsCut.cpu = this.DataService.partsCut.cpu + (this.DataService.partsCut.cpu*.1);
       
  }

  switch(this.DataService.responses.q2){
    case 1 : 
      this.DataService.partsCut.gpu = this.DataService.partsCut.gpu - (this.DataService.partsCut.gpu*.1);
      
    case 3:
      this.DataService.partsCut.gpu = this.DataService.partsCut.gpu + (this.DataService.partsCut.gpu*.1);
       
  }

  switch(this.DataService.responses.q3){
    case 1 : 
      this.DataService.partsCut.gpu = this.DataService.partsCut.gpu - (this.DataService.partsCut.gpu*.1);
      
    case 3:
      this.DataService.partsCut.gpu = this.DataService.partsCut.gpu + (this.DataService.partsCut.gpu*.1);
       
  }

  switch(this.DataService.responses.q4){
    case 1 : 
      this.DataService.partsCut.motherboard = this.DataService.partsCut.motherboard - (this.DataService.partsCut.motherboard*.1);
      
    case 2:
      this.DataService.partsCut.motherboard = this.DataService.partsCut.motherboard + (this.DataService.partsCut.motherboard*.1);
       
  }

  switch(this.DataService.responses.q5){
    case 1 : 
      this.DataService.partsCut.storage = this.DataService.partsCut.storage - (this.DataService.partsCut.storage*.1);
      
    case 3:
      this.DataService.partsCut.storage = this.DataService.partsCut.storage + (this.DataService.partsCut.storage*.1);
       
  }

  switch(this.DataService.responses.q6){
    case 1 : 
      this.DataService.partsCut.ram = this.DataService.partsCut.ram - (this.DataService.partsCut.ram*.1);
      break;
    case 3:
      this.DataService.partsCut.ram = this.DataService.partsCut.ram + (this.DataService.partsCut.ram*.1);
      break; 
  }
  
}
//  question 4: 1 is minus, 2 is plus, 3 is neutral
//  {
//   gpu:          q2,q3,
//   cpu:          q1,
//   case:         NONE,
//   psu:          NONE,
//   motherboard:  q4,
//   ram:          q6,
//   memory:       q5
//  }

}

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
    console.log(this.budget);
  }

  recordResponse(qNum, ansNum){
    this.responses[qNum] = ansNum;
   console.log(this.responses);
   
  }

  // getBudget(){
  //   this.budget = this.DataService.budget;
  //   console.log(this.budget)
  // }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent implements OnInit {

  constructor() { }

responses = {
  "q1" : 0,
  "q2" : 0,
  "q3" : 0,
  "q4" : 0,
  "q5" : 0,
  "q6" : 0 
}



  ngOnInit(): void {
  }

  recordResponse(qNum, ansNum){
    this.responses[qNum] = ansNum;
   console.log(this.responses);
  }
}

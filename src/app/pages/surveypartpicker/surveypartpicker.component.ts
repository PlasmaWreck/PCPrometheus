import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surveypartpicker',
  templateUrl: './surveypartpicker.component.html',
  styleUrls: ['./surveypartpicker.component.css']
})
export class SurveypartpickerComponent implements OnInit {
  
  constructor() {}

  ngOnInit(): void {
  }
    toggleBorder(selectedInput, deInput1, deInput2){
      let selected = document.getElementById(selectedInput);
      let deselect1 = document.getElementById(deInput1);
      let deselect2 = document.getElementById(deInput2);
      selected.className = "card cardColor2 cardBorder";
      deselect1.className = "card cardColor2";
      deselect2.className = "card cardColor2";

    }


}

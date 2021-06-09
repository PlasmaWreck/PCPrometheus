import { Component, OnInit } from '@angular/core';
import { ProPathService } from 'src/app/service/ProPath/pro-path.service';

@Component({
  selector: 'app-surveypartpicker',
  templateUrl: './surveypartpicker.component.html',
  styleUrls: ['./surveypartpicker.component.css']
})
export class SurveypartpickerComponent implements OnInit {

  constructor(private DataService: ProPathService) {}

  ngOnInit(): void {
    console.log(this.DataService.budget/2)
  }

}

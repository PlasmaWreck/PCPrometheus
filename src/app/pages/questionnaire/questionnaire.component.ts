import { Component, OnInit } from '@angular/core';
import { ProPathService } from 'src/app/service/ProPath/pro-path.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  constructor(private DataService: ProPathService) { }
budget = 0;
  ngOnInit(): void {
  }

  saveBudget(budgetInputVal){
    this.DataService.budget = budgetInputVal;
  }
}

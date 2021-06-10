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
    this.calculateCuts();
    console.log(this.DataService.partsCut)
  }
 
  test(){
    console.log(this.DataService.partsCut)
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
  
}

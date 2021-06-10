import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';
import { ProPathService } from 'src/app/service/ProPath/pro-path.service';

@Component({
  selector: 'app-surveypartpicker',
  templateUrl: './surveypartpicker.component.html',
  styleUrls: ['./surveypartpicker.component.css']
})
export class SurveypartpickerComponent implements OnInit {

  constructor(private DataService: ProPathService, private APIService: DataService) {}

  gpuCall;
  cpuCall;
  caseCall;
  psuCall;
  motherboardCall;
  ramCall;
  storageCall;

  ngOnInit(): void {
   console.log(this.DataService.partsCut)
   
   this.APIService.GetList(`graphicscard/getrange/${this.DataService.partsCut.gpu}`).toPromise().then(item => {
    this.gpuCall = item;
    console.log(this.gpuCall)
  })

  this.APIService.GetList(`processor/getrange/${this.DataService.partsCut.cpu}`).toPromise().then(item => {
    this.cpuCall = item;
    console.log(this.cpuCall)
  })

  this.APIService.GetList(`case/getrange/${this.DataService.partsCut.case}`).toPromise().then(item => {
    this.caseCall = item;
    console.log(this.caseCall)
  })

  this.APIService.GetList(`powersupply/getrange/${this.DataService.partsCut.psu}`).toPromise().then(item => {
    this.psuCall = item;
    console.log(this.psuCall)
  })

  this.APIService.GetList(`motherboard/getrange/${this.DataService.partsCut.motherboard}`).toPromise().then(item => {
    this.motherboardCall = item;
    console.log(this.motherboardCall)
  })

  this.APIService.GetList(`memory/getrange/${this.DataService.partsCut.ram}`).toPromise().then(item => {
    this.ramCall = item;
    console.log(this.ramCall)
  })

  this.APIService.GetList(`harddrive/getrange/${this.DataService.partsCut.storage}`).toPromise().then(item => {
    this.storageCall = item;
    console.log(this.storageCall)
  })

  }

  sendToAmazon(input){
    let test = new RegExp("\\s", "g");
    input = input.replace(test, "+")
    window.open(`https://www.amazon.com/s?k=${input}&i=computers`);
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

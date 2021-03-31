import { Component,Input, Output, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resourcetabs',
  templateUrl: './resourcetabs.component.html',
  styleUrls: ['./resourcetabs.component.css']
})
export class ResourcetabsComponent implements OnInit {

  constructor() { }
  arrayIndex: number = 0;
  
  @Input() descriptionArray = []

  changeText(input){
    this.arrayIndex = input;
    for(let i = 0; i < this.descriptionArray.length; i++){
      this.descriptionArray[i].selected = false;
    }
    this.descriptionArray[input].selected = true;
  }

  ngOnInit(): void {
  }

}

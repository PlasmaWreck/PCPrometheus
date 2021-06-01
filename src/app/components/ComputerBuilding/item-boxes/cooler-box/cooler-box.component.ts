import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooler-box',
  templateUrl: './cooler-box.component.html',
  styleUrls: ['./cooler-box.component.css']
})
export class CoolerBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input () name: string;
  @Input () Manuf: string;
  @Input () Liquid: string;
  @Input () numOfFans: string;
  @Input () Price: string;
  @Input () index: string;
  @Input () thumbnail: string;
  GetColor(indx){
    if(indx % 2 == 0){
      return "even-bg"
    }else{
      return "Odd-bg"
    }
  }

}

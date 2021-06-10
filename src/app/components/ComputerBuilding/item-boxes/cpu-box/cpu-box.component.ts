import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpu-box',
  templateUrl: './cpu-box.component.html',
  styleUrls: ['./cpu-box.component.css']
})
export class CpuBoxComponent implements OnInit {

  constructor() { }
  ngOnInit(){
    
  }
  @Input () name: string;
  @Input () Manuf: string;
  @Input () Cores: string;
  @Input () GHz: string;
  @Input () Threads: string;
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
  sendToAmazon(input){
    let test = new RegExp("\\s", "g");
    input = input.replace(test, "+")
    window.open(`https://www.amazon.com/s?k=${input}&i=computers`);
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-box',
  templateUrl: './memory-box.component.html',
  styleUrls: ['./memory-box.component.css']
})
export class MemoryBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input () name: string;
  @Input () Manuf: string;
  @Input () Capacity: string;
  @Input () Clock: string;
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

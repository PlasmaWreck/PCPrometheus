import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pow-sup-box',
  templateUrl: './pow-sup-box.component.html',
  styleUrls: ['./pow-sup-box.component.css']
})
export class PowSupBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input () name: string;
  @Input () Manuf: string;
  @Input () Watts: string;
  @Input () Modular: string;
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

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-opt-drive-box',
  templateUrl: './opt-drive-box.component.html',
  styleUrls: ['./opt-drive-box.component.css']
})
export class OptDriveBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input () name: string;
  @Input () Manuf: string;
  @Input () BlueRay: string;
  @Input () ConType: string;
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

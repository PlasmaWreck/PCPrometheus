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
}

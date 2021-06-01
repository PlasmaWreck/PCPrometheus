import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-op-sys-box',
  templateUrl: './op-sys-box.component.html',
  styleUrls: ['./op-sys-box.component.css']
})
export class OpSysBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input () name: string;
  @Input () Manuf: string;
  @Input () BD: string;
  @Input () DVD: string;
  @Input () CD: string;
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

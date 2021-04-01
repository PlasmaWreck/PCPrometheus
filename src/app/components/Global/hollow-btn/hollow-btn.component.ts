import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hollow-btn',
  templateUrl: './hollow-btn.component.html',
  styleUrls: ['./hollow-btn.component.css']
})
export class HollowBtnComponent implements OnInit {
  @Input () BtnText:string;
  constructor() { }

  ngOnInit(): void {
  }
  TextCheck(Text){
    if(Text){
      return Text
    }else{
      return "{{BtnText}}"
    }
  }
}

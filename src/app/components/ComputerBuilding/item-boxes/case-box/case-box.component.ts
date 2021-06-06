import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-box',
  templateUrl: './case-box.component.html',
  styleUrls: ['./case-box.component.css']
})
export class CaseBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input () name: string;
  @Input () Manuf: string;
  @Input () Form_Factor: string;
  @Input () RGB: string;
  @Input () Size: string;
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

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

}

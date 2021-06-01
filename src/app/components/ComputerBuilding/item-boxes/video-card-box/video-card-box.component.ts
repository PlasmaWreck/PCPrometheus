import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-card-box',
  templateUrl: './video-card-box.component.html',
  styleUrls: ['./video-card-box.component.css']
})
export class VideoCardBoxComponent implements OnInit {
  newPrice;
  constructor() { }
  
  ngOnInit(): void {
    this.newPrice = this.Price.match(/\d+/)
  }
  @Input () name: string;
  @Input () Manuf: string;
  @Input () MemorySize: string;
  @Input () CoreClock: string;
  @Input () Type: string;
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

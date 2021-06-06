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

}

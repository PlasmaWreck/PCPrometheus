import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage-box',
  templateUrl: './storage-box.component.html',
  styleUrls: ['./storage-box.component.css']
})
export class StorageBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input () name: string;
  @Input () Manuf: string;
  @Input () capacity: string;
  @Input () Type: string;
  @Input () RPM: string;
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

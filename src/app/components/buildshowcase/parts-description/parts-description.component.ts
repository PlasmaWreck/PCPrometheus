import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parts-description',
  templateUrl: './parts-description.component.html',
  styleUrls: ['./parts-description.component.css']
})
export class PartsDescriptionComponent implements OnInit {
  @Input() OrderNum:string;
  @Input() Title:string;
  @Input() Desc:string;
  @Input() Img:string;
  constructor() { }

  ngOnInit(): void {
  }
  CardBG(){
    if(this.OrderNum === '1'){
      console.log('hit')
      return "OddBG";
    }else{
      return "EvenBG";
    }
  }
}

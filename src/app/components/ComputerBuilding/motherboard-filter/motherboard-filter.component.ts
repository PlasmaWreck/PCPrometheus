import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-motherboard-filter',
  templateUrl: './motherboard-filter.component.html',
  styleUrls: ['./motherboard-filter.component.css']
})
export class MotherboardFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  minValue: number = 0;
  maxValue: number = 500;
  options: Options = {
    floor: 0,
    ceil: this.maxValue,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "$" + value;
        case LabelType.High:
          return "$" + value;
        default:
          return "$" + value;
      }
    }
  };
}

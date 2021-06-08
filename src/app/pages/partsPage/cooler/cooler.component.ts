import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';

@Component({
  selector: 'app-cooler',
  templateUrl: './cooler.component.html',
  styleUrls: ['./cooler.component.css']
})
export class CoolerComponent implements OnInit {
  Price_minValue: number = 0;
  Price_maxValue: number = 500;
  Price_options: Options = {
    floor: 0,
    ceil: this.Price_maxValue,
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
  Fans_minValue: number = 0;
  Fans_maxValue: number = 16;
  Fans_options: Options = {
    floor: 0,
    ceil: this.Fans_maxValue,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "" + value;
        case LabelType.High:
          return "" + value;
        default:
          return "" + value;
      }
    }
  };
  PriceHigh = this.Price_options.ceil;
  PriceLow = 0;
  FansHigh = this.Fans_options.ceil;
  FansLow = 0;

  CoolerMasterIsChecked = false;
  CorsairIsChecked = false;
  ASUSIsChecked = false;
  WJCoolIsChecked = false;
  AresgameIsChecked = false;
  NoctuaIsChecked = false;
  BeQuietIsChecked = false;
  VetrooIsChecked = false;
  NzxtIsChecked = false;
  //Liquid Cooling
  YesIsChecked = false;
  NoIsChecked = false;

  array;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.CoolerList()
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  CoolerList(){
    this.dService.GetList("Cooler").toPromise().then(
      (List)=>{
        this.array = List
        console.log(this.array)
      }
    )
  }
  
  
  noiseLevel_minValue: number = 0;
  noiseLevel_maxValue: number = 16;
  noiseLevel_options: Options = {
    floor: 0,
    ceil: this.noiseLevel_maxValue,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "" + value;
        case LabelType.High:
          return "" + value;
        default:
          return "" + value;
      }
    }
  };
//Speed
speed_minValue: number = 0;
  speed_maxValue: number = 16;
  speed_options: Options = {
    floor: 0,
    ceil: this.speed_maxValue,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "" + value;
        case LabelType.High:
          return "" + value;
        default:
          return "" + value;
      }
    }
  };

}

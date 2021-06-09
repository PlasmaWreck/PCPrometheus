import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';


@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {
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
  Memory_minValue: number = 0;
  Memory_maxValue: number = 500;
  Memory_options: Options = {
    floor: 0,
    ceil: this.Memory_maxValue,
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
  Clock_minValue: number = 0;
  Clock_maxValue: number = 500;
  Clock_options: Options = {
    floor: 0,
    ceil: this.Clock_maxValue,
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
  PriceHigh = this.Price_options.ceil;
  PriceLow = 0;
  MemoryHigh = this.Memory_options.ceil;
  MemoryLow = 0;
  ClockHigh = this.Clock_options.ceil;
  ClockLow = 0;
  NividaIsChecked = false;
  AMDIsChecked = false;
  //Type
  Gddr5IsChecked = false;
  Gddr5XIsChecked = false;
  Gddr6IsChecked = false;
  Gddr6XIsChecked = false;
  Hbm2IsChecked = false;

  array;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.GraphicsCardList()
  }
  GraphicsCardList(){
    this.dService.GetList("GraphicsCard").toPromise().then(
      (List)=>{
        this.array = List
        console.log(this.array)
      }
    )
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  ConvertToMoney(val){
    val = parseFloat(val.replace(/[^0-9.]/g, ''))
    return val
  }
  PriceRange(val){
    console.log(val)
    this.PriceHigh = val.highValue;
    this.PriceLow = val.value;
    console.log(this.PriceLow, this.PriceHigh)
    this.FilterList()
  }
  FilterList(){
    
  }
}

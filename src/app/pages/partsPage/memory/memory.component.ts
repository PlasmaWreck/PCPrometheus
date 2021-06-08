import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
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
  Capacity_minValue: number = 0;
  Capacity_maxValue: number = 500;
  Capacity_options: Options = {
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
  Clock_minValue: number = 0;
  Clock_maxValue: number = 500;
  Clock_options: Options = {
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
  ClockHigh = this.Clock_options.ceil;
  ClockLow = 0;
  CapacityHigh = this.Capacity_options.ceil;
  CapacityLow = 0;
  PriceHigh = this.Price_options.ceil;
  PriceLow = 0;
  HpIsChecked = false;
  NemixIsChecked = false;
  CorsairIsChecked = false;
  TeamGroupIsChecked = false;
  LevenIsChecked = false;
  CruicialIsChecked = false;

  array;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.MemoryList();
  }
  
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
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  MemoryList(){
    this.dService.GetList("Memory").toPromise().then(
      (List)=>{
        this.array = List
        console.log(this.array)
      }
    )
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

  FilterList()
  {

  }

}

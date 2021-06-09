import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {
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
  RPM_minValue: number = 0;
  RPM_maxValue: number = 500;
  RPM_options: Options = {
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
  RPMHigh = this.RPM_options.ceil;
  RPMLow = 0;
  CapacityHigh = this.Capacity_options.ceil;
  CapacityLow = 0;
  PriceHigh = this.Price_options.ceil;
  PriceLow = 0;
  ToshibaIsChecked = false;
  WesternIsChecked = false;
  SeagateIsChecked = false;

  array;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dService.GetList("harddrive").toPromise().then(
      (List)=>{
        console.log(List)
        this.array = List
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

  FilterList()
  {

  }
 
}

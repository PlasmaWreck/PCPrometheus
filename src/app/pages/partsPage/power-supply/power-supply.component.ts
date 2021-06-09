import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';

@Component({
  selector: 'app-power-supply',
  templateUrl: './power-supply.component.html',
  styleUrls: ['./power-supply.component.css']
})
export class PowerSupplyComponent implements OnInit {
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
  Wattage_minValue: number = 0;
  Wattage_maxValue: number = 500;
  Wattage_options: Options = {
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
  
  WattageHigh = this.Wattage_options.ceil;
  WattageLow = 0;
  PriceHigh = this.Price_options.ceil;
  PriceLow = 0;
  GamemaxIsChecked = false;
  AresGameIsChecked = false;
  CorsairIsChecked = false;
  AsusIsChecked = false;
  PoinwerIsChecked = false;
  HiearlcoolIsChecked = false;
  BeQuietIsChecked = false;
  //Modular
  YesIsChecked = false;
  NoIsChecked = false;

  

  array;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.PowerSupplyList()
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  PowerSupplyList(){
    this.dService.GetList("PowerSupply").toPromise().then(
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

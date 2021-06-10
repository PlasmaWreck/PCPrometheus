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
  Price_minValue: number = 11;
  Price_maxValue: number = 170;
  Price_options: Options = {
    floor: 11,
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
  Capacity_minValue: number = 2;
  Capacity_maxValue: number = 16;
  Capacity_options: Options = {
    floor: 2,
    ceil: this.Capacity_maxValue,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value+"GB";
        case LabelType.High:
          return value+"GB";
        default:
          return value+"GB";
      }
    }
  };
  Clock_minValue: number = 0;
  Clock_maxValue: number = 3200;
  Clock_options: Options = {
    step: 100,
    floor: 0,
    ceil: this.Clock_maxValue,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value+"MHz";
        case LabelType.High:
          return value+"MHz";
        default:
          return value+"MHz";
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
  CrucialIsChecked = false;

  array;
  filteredList;
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
        this.filteredList = List
        console.log(this.array)
      }
    )
  }
  ConvertToNumbers(val){
    if(val !== "N/A"){
      val = parseFloat(val.replace(/[^0-9.]/g, ''))
    }else{
      val = 0
    }
    return val
  }
  
  PriceRange(val){
    console.log(val)
    this.PriceHigh = val.highValue;
    this.PriceLow = val.value;
    this.FilterList()
  }
  CapacityRange(val){
    console.log(val)
    this.CapacityHigh = val.highValue;
    this.CapacityLow = val.value;
    this.FilterList()
  }
  ClockRange(val){
    console.log(val)
    this.ClockHigh = val.highValue;
    this.ClockLow = val.value;
    this.FilterList()
  }

  HpCheck(val){
    this.HpIsChecked = val;
    this.FilterList();
  }
  NemixCheck(val){
    this.NemixIsChecked = val;
    this.FilterList();
  }
  CorsairCheck(val){
    this.CorsairIsChecked = val;
    this.FilterList();
  }
  TeamGroupCheck(val){
    this.TeamGroupIsChecked = val;
    this.FilterList();
  }
  LevenCheck(val){
    this.LevenIsChecked = val;
    this.FilterList();
  }
  CrucialCheck(val){
    this.CrucialIsChecked = val;
    this.FilterList();
  }
  

  FilterList()
  {
    console.log("hit")
    let ManufactureArray = [];
    if(this.HpIsChecked)
    {
      ManufactureArray.push("HP");
    }
    if(this.NemixIsChecked)
    {
      ManufactureArray.push("Nemix Ram");
    }
    if(this.CorsairIsChecked)
    {
      ManufactureArray.push("Corsair");
    }
    if(this.TeamGroupIsChecked)
    {
      ManufactureArray.push("TEAMGROUP");
    }
    if(this.LevenIsChecked)
    {
      ManufactureArray.push("LEVEN");
    }
    if(this.CrucialIsChecked)
    {
      ManufactureArray.push("Crucial");
    }

    this.filteredList = this.array.filter(item =>{
      return (ManufactureArray.length > 0 ? ManufactureArray.includes(item.brand) : true)&& this.ConvertToNumbers(item.price) >= this.PriceLow && this.ConvertToNumbers(item.price) <= this.PriceHigh && this.ConvertToNumbers(item.capacity) >= this.CapacityLow && this.ConvertToNumbers(item.capacity) <= this.CapacityHigh && this.ConvertToNumbers(item.clockFrequency) >= this.ClockLow && this.ConvertToNumbers(item.clockFrequency) <= this.ClockHigh
    })
  }

}

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
  Price_minValue: number = 328;
  Price_maxValue: number = 499;
  Price_options: Options = {
    floor: 328,
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
  Memory_minValue: number = 8;
  Memory_maxValue: number = 12;
  Memory_options: Options = {
    floor: 8,
    ceil: this.Memory_maxValue,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return  value + "GB";
        case LabelType.High:
          return  value + "GB";
        default:
          return  value + "GB";
      }
    }
  };
  Clock_minValue: number = 1320;
  Clock_maxValue: number = 2321;
  Clock_options: Options = {
    floor: 1320,
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

  fitlerArray;
  array;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.GraphicsCardList()
  }
  GraphicsCardList(){
    this.dService.GetList("GraphicsCard").toPromise().then(
      (List)=>{
        this.array = List
        this.fitlerArray = List
        console.log(this.array)
      }
    )
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  ConvertToNumbers(val){
    val = parseFloat(val.replace(/[^0-9.]/g, ''))
    console.log(val)
    return val
  }
  PriceRange(val){
    console.log(val)
    this.PriceHigh = val.highValue;
    this.PriceLow = val.value;
    console.log(this.PriceLow, this.PriceHigh)
    this.FilterList()
  }
  MemoryRange(val){
    console.log(val)
    this.MemoryHigh = val.highValue;
    this.MemoryLow = val.value;
    this.FilterList()
  }
  ClockRange(val){
    console.log(val)
    this.ClockHigh = val.highValue;
    this.ClockLow = val.value;
    this.FilterList()
  }
  //---------------------------------
  NividaCheck(val){
    this.NividaIsChecked = val;
    this.FilterList();
  }
  AMDCheck(val){
    this.AMDIsChecked = val;
    this.FilterList();
  }
  //-----------------------------------
  Gddr5Check(val){
    this.Gddr5IsChecked = val;
    this.FilterList();
  }
  Gddr5XCheck(val){
    this.Gddr5XIsChecked = val;
    this.FilterList();
  }
  Gddr6Check(val){
    this.Gddr6IsChecked = val;
    this.FilterList();
  }
  Gddr6XCheck(val){
    this.Gddr6XIsChecked = val;
    this.FilterList();
  }
  Hbm2Check(val){
    this.Hbm2IsChecked = val;
    this.FilterList();
    
  }
  FilterList(){
    console.log("hit")
    let ManufactureArray = [];
    let TypeArray = [];
    if(this.NividaIsChecked)
    {
      ManufactureArray.push("NVIDIA");
    }
    if(this.AMDIsChecked)
    {
      ManufactureArray.push("AMD");
    }

    if(this.Gddr5IsChecked)
    {
      TypeArray.push("GDDR5");
    }
    if(this.Gddr5XIsChecked)
    {
      TypeArray.push("GDDR5X");
    }
    if(this.Gddr6IsChecked)
    {
      TypeArray.push("GDDR6");
    }
    if(this.Gddr6XIsChecked)
    {
      TypeArray.push("GDDR6X");
    }
    if(this.Hbm2IsChecked)
    {
      TypeArray.push("HBM2");
    }
    this.fitlerArray = this.array.filter(item=>{
      return (ManufactureArray.length > 0 ? ManufactureArray.includes(item.gpu) : true) && (TypeArray.length > 0 ? TypeArray.includes(item.memoryType) : true)
      && this.ConvertToNumbers(item.price) >= this.PriceLow && this.ConvertToNumbers(item.price) <= this.PriceHigh && this.ConvertToNumbers(item.memorySize) >= this.MemoryLow && this.ConvertToNumbers(item.memorySize) <= this.MemoryHigh && this.ConvertToNumbers(item.coreClockSpeed) >= this.ClockLow && this.ConvertToNumbers(item.coreClockSpeed) <= this.ClockHigh;
    })
    console.log(this.fitlerArray)
  }
}



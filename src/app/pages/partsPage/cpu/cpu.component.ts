import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CPUComponent implements OnInit {
  Price_minValue: number = 0;
  Price_maxValue: number = 583;
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
  Cores_minValue: number = 0;
  Cores_maxValue: number = 8;
  Cores_options: Options = {
    floor: 0,
    ceil: this.Cores_maxValue,
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
  GHz_minValue: number = 0;
  GHz_maxValue: number = 4;
  GHz_options: Options = {
    step: 0.1,
    floor: 0,
    ceil: this.GHz_maxValue,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value +" GHz";
        case LabelType.High:
          return value+" GHz";
        default:
          return value+" GHz";
      }
    }
  };
  

  GhzHigh = this.GHz_options.ceil;
  GhzLow = 0
  CoreHigh = this.Cores_options.ceil;
  CoreLow = 0
  PriceHigh = this.Price_options.ceil;
  PriceLow = 0;
  AMDIsChecked = false;
  intelIsChecked = false;
  filteredArray;
  array;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.ProcessorList();
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  ProcessorList(){
    this.dService.GetList("Processor").toPromise().then(
      (List)=>{
        this.array = List
        this.filteredArray = this.array;
        console.log(this.array[0])
        console.log(parseFloat(this.array[0].price.replace(/[^0-9.]/g, '')))
        console.log(parseFloat(this.array[0].frequency.replace(/[^0-9.]/g, '')))
        console.log(parseFloat(this.array[8].frequency.replace(/[^0-9.]/g, ''))/1000)
      }
    )
  }
  
  ConvertToGHZ(val){
    if(val.includes("GHz"))
    {
      val = parseFloat(val.replace(/[^0-9.]/g, ''))
    }else{
      val = parseFloat(val.replace(/[^0-9.]/g, ''))/1000
    }
    return val
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
  CoresRange(val){
    console.log(val)
    this.CoreHigh = val.highValue;
    this.CoreLow = val.value;
    console.log(this.CoreLow, this.CoreHigh)
    this.FilterList()
  }
  GhzRange(val){
    console.log(val)
    this.GhzHigh = val.highValue;
    this.GhzLow = val.value;
    console.log(this.GhzLow, this.GhzHigh)
    this.FilterList()
  }
  IntelCheck(val)
  {
    this.intelIsChecked = val
    
    this.FilterList()
  }
  AMDCheck(val)
  {
    this.AMDIsChecked = val
    
    this.FilterList()
  }
  FilterList(){
    console.log("Now Filtering")
    let ManfactArray = []
      if(this.intelIsChecked)
      {
        ManfactArray.push("Intel")
      }
      if(this.AMDIsChecked)
      {
        ManfactArray.push("AMD")
      }
  
    this.filteredArray = this.array.filter(item=>{
        console.log(ManfactArray.includes(item.brand) ? item : "")
        if(ManfactArray.length > 0)
        {
          return ManfactArray.includes(item.brand) && this.ConvertToMoney(item.price) >= this.PriceLow && this.ConvertToMoney(item.price) <= this.PriceHigh && item.coreCount >= this.CoreLow && item.coreCount <= this.CoreHigh && this.ConvertToGHZ(item.frequency) >= this.GhzLow && this.ConvertToGHZ(item.frequency) <= this.GhzHigh
        }else{
          return this.ConvertToMoney(item.price) >= this.PriceLow && this.ConvertToMoney(item.price) <= this.PriceHigh && item.coreCount >= this.CoreLow && item.coreCount <= this.CoreHigh && this.ConvertToGHZ(item.frequency) >= this.GhzLow && this.ConvertToGHZ(item.frequency) <= this.GhzHigh
        }
      })
      console.log(this.filteredArray);
  }
}

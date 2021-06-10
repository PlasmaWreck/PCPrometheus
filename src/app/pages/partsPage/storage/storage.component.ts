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
  Price_maxValue: number = 617;
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
  Capacity_maxValue: number = 16;
  Capacity_options: Options = {
    
    floor: 0,
    ceil: this.Capacity_maxValue,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value+" TB";
        case LabelType.High:
          return value+" TB";
        default:
          return value+" TB";
      }
    }
  };
  RPM_minValue: number = 0;
  RPM_maxValue: number = 7200;
  RPM_options: Options = {
    step: 100,
    floor: 0,
    ceil: this.RPM_maxValue,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value +" PRM";
        case LabelType.High:
          return value +" PRM";
        default:
          return value +" PRM";
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
  filterArray;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dService.GetList("harddrive").toPromise().then(
      (List)=>{
        console.log(List)
        this.array = List
        this.filterArray = List;
      }
    )
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
   
  }
  ConvertToNumbers(val){
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
  CapacityRange(val){
    console.log(val)
    this.CapacityHigh = val.highValue;
    this.CapacityLow = val.value;
    console.log(this.PriceLow, this.PriceHigh)
    this.FilterList()
  }
  RPMRange(val){
    console.log(val)
    this.RPMHigh = val.highValue;
    this.RPMLow = val.value;
    console.log(this.PriceLow, this.PriceHigh)
    this.FilterList()
  }

  ToshibaCheck(val){
    this.ToshibaIsChecked = val;
    this.FilterList();
  }
  WesternCheck(val){
    this.WesternIsChecked = val;
    this.FilterList();
  }
  SeagateCheck(val){
    this.SeagateIsChecked = val;
    this.FilterList();
  }

  FilterList()
  {
    console.log("hit")

    let ManufactureArray = [];
    if(this.ToshibaIsChecked)
    {
      ManufactureArray.push("Toshiba");
    }
    if(this.WesternIsChecked)
    {
      ManufactureArray.push("Western Digital");
    }
    if(this.SeagateIsChecked)
    {
      ManufactureArray.push("Seagate");
    }
    
    this.filterArray = this.array.filter(item=>{
      console.log(this.ConvertToNumbers(item.diskSize))
      return (ManufactureArray.length > 0 ? ManufactureArray.includes(item.brand) : true) && this.ConvertToNumbers(item.price) >= this.PriceLow && this.ConvertToNumbers(item.diskSize) <= this.PriceHigh && this.ConvertToNumbers(item.diskSize) >= this.CapacityLow && this.ConvertToNumbers(item.diskSize) <= this.CapacityHigh && this.ConvertToNumbers(item.rpm) >= this.RPMLow && this.ConvertToNumbers(item.rpm) <= this.RPMHigh
    })
  }
 
}

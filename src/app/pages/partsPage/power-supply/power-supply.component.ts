import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs/operators';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';

@Component({
  selector: 'app-power-supply',
  templateUrl: './power-supply.component.html',
  styleUrls: ['./power-supply.component.css']
})
export class PowerSupplyComponent implements OnInit {
  Price_minValue: number = 40;
  Price_maxValue: number = 400;
  Price_options: Options = {
    floor: 40,
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
  Wattage_minValue: number = 650;
  Wattage_maxValue: number = 1200;
  Wattage_options: Options = {
    step: 50,
    floor: 650,
    ceil: this.Wattage_maxValue,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value+"W";
        case LabelType.High:
          return value+"W";
        default:
          return value+"W";
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
  EVGAIsChecked = false;
  //Modular
  YesIsChecked = false;
  NoIsChecked = false;

  

  array;
  filteredArray;
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
        this.filteredArray = List
        console.log(this.array)
      }
    )
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
  WattageRange(val){
    console.log(val)
    this.WattageHigh = val.highValue;
    this.WattageLow = val.value;
    console.log(this.PriceLow, this.PriceHigh)
    this.FilterList()
  }

  GamemaxCheck(val)
  {
    this.GamemaxIsChecked = val
    
    this.FilterList()
  }
  AresGameCheck(val)
  {
    this.AresGameIsChecked = val
    
    this.FilterList()
  }
  CorsairCheck(val)
  {
    this.CorsairIsChecked = val
    
    this.FilterList()
  }
  AsusCheck(val)
  {
    this.AsusIsChecked = val
    
    this.FilterList()
  }
  PoinwerCheck(val)
  {
    this.PoinwerIsChecked = val
    
    this.FilterList()
  }
  HiearCoolCheck(val)
  {
    this.HiearlcoolIsChecked = val
    
    this.FilterList()
  }
  BeQuietCheck(val)
  {
    this.BeQuietIsChecked = val
    
    this.FilterList()
  }
  EVGACheck(val)
  {
    this.EVGAIsChecked = val
    
    this.FilterList()
  }

  YesCheck(val)
  {
    this.YesIsChecked = val;
    this.NoIsChecked = false;
    console.log(this.NoIsChecked)
    this.FilterList()
  }
  NoCheck(val)
  {
    console.log(val)
    this.NoIsChecked = val;
    this.YesIsChecked = false;
    this.FilterList()
  }

  FilterList()
  {
    let ManufactureArray = [];
    console.log("hit")
    if(this.GamemaxIsChecked)
    {
      ManufactureArray.push("GAMEMAX");
    }
    if(this.AresGameIsChecked)
    {
      ManufactureArray.push("ARESGAME");
    }
    if(this.CorsairIsChecked)
    {
      ManufactureArray.push("CORSAIR");
    }
    if(this.AsusIsChecked)
    {
      ManufactureArray.push("ASUS");
    }
    if(this.PoinwerIsChecked)
    {
      ManufactureArray.push("POINWER");
    }
    if(this.HiearlcoolIsChecked)
    {
      ManufactureArray.push("Hiearcool");
    }
    if(this.BeQuietIsChecked)
    {
      ManufactureArray.push("be quiet!");
    }
    if(this.EVGAIsChecked)
    {
      ManufactureArray.push("EVGA");
    }



    //(this.YesIsChecked || this.NoIsChecked ? item.liquidCooling === this.YesIsChecked : true)

    this.filteredArray = this.array.filter(item =>{
      return (this.YesIsChecked || this.NoIsChecked ? item.modular === this.YesIsChecked : true) && this.ConvertToNumbers(item.price) >= this.PriceLow && this.ConvertToNumbers(item.price) <= this.PriceHigh && this.ConvertToNumbers(item.power) >= this.WattageLow && this.ConvertToNumbers(item.power) <= this.WattageHigh && (ManufactureArray.length > 0 ? ManufactureArray.includes(item.brand)  : true)
    })
  }

}

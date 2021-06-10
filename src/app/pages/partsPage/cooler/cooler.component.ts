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
  Price_minValue: number = 34;
  Price_maxValue: number = 240;
  Price_options: Options = {
    floor: 34,
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
  Fans_minValue: number = 1;
  Fans_maxValue: number = 3;
  Fans_options: Options = {
    floor: 1,
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
  SearchbarText;

  filteredArray;
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
        this.filteredArray = List
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
  FanRange(val){
    console.log(val)
    this.FansHigh = val.highValue;
    this.FansLow = val.value;
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

  CoolerMasterCheck(val){
    this.CoolerMasterIsChecked = val;
    this.FilterList();
  }
  CorsairCheck(val){
    this.CorsairIsChecked = val;
    this.FilterList();
  }
  ASUSCheck(val){
    this.ASUSIsChecked = val;
    this.FilterList();
  }
  WJCoolCheck(val){
    this.WJCoolIsChecked = val;
    this.FilterList();
  }
  AresgameCheck(val){
    this.AresgameIsChecked = val;
    this.FilterList();
  }
  NoctuaCheck(val){
    this.NoctuaIsChecked = val;
    this.FilterList();
  }
  BeQuietCheck(val){
    this.BeQuietIsChecked = val;
    this.FilterList();
  }
  VetrooCheck(val){
    this.VetrooIsChecked = val;
    this.FilterList();
  }
  NzxtCheck(val){
    this.NzxtIsChecked = val;
    this.FilterList();
  }

  
GetSearchBar(text)
{
  console.log(text)
  this.SearchbarText = text;
  this.FilterList();
}


  FilterList(){
    console.log("hit")
    let ManufactureArray = [];
    if(this.CoolerMasterIsChecked)
    {
      ManufactureArray.push("Cooler Master");
    }
    if(this.CorsairIsChecked)
    {
      ManufactureArray.push("Corsair");
    }
    if(this.ASUSIsChecked)
    {
      ManufactureArray.push("ASUS");
    }
    if(this.WJCoolIsChecked)
    {
      ManufactureArray.push("WJCOOLMAN");
    }
    if(this.AresgameIsChecked)
    {
      ManufactureArray.push("ARESGAME");
    }
    if(this.NoctuaIsChecked)
    {
      ManufactureArray.push("Noctua");
    }
    if(this.BeQuietIsChecked)
    {
      ManufactureArray.push("be quiet!");
    }
    if(this.VetrooIsChecked)
    {
      ManufactureArray.push("Vetroo");
    }
    if(this.NzxtIsChecked)
    {
      ManufactureArray.push("NZXT");
    }
    console.log(ManufactureArray)

    this.filteredArray = this.array.filter(item =>{
      return (ManufactureArray.length > 0 ? ManufactureArray.includes(item.brand) : true) && (this.YesIsChecked || this.NoIsChecked ? item.liquidCooling === this.YesIsChecked : true) && this.ConvertToNumbers(item.price) >= this.PriceLow && this.ConvertToNumbers(item.price) <= this.PriceHigh && item.numOfFans >= this.FansLow && item.numOfFans <= this.FansHigh && (this.SearchbarText !== "" ? item.name.toLowerCase().includes(this.SearchbarText.toLowerCase()) : true)
    })
  }
  

}

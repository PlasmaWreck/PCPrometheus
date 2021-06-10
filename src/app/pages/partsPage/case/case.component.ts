import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';


@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {

  Price_minValue: number = 52;
  Price_maxValue: number = 300;
  Price_options: Options = {
    floor: 52,
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

  PriceHigh = this.Price_options.ceil;
  PriceLow = 0;
  ///Manufacture
  LianIsChecked = false;
  FractalIsChecked = false;
  CorsairIsChecked = false;
  CoolerMasterIsChecked = false;
  SSUPDIsChecked = false;
  ThermaltakeIsChecked = false;
  AntecIsChecked = false;
  NZXTIsChecked = false;
  //RGB?
  YesIsChecked = false;
  NoIsChecked = false;
  //Size
  MiniIsChecked = false;
  MidIsChecked = false;
  FullIsChecked = false;

  SearchbarText;

  array;
  filteredArray;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.CaseList()
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  CaseList(){
    this.dService.GetList("Case").toPromise().then(
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

  
  LianCheck(val){
    this.LianIsChecked = val;
    this.FilterList();
  }
  FractalCheck(val){
    this.FractalIsChecked = val;
    this.FilterList();
  }
  CorsairCheck(val){
    this.CorsairIsChecked = val;
    this.FilterList();
  }
  CoolerMasterCheck(val){
    this.CoolerMasterIsChecked = val;
    this.FilterList();
  }
  SSUPDCheck(val){
    this.SSUPDIsChecked = val;
    this.FilterList();
  }
  ThermaltakeCheck(val){
    this.ThermaltakeIsChecked = val;
    this.FilterList();
  }
  AntecCheck(val){
    this.AntecIsChecked = val;
    this.FilterList();
  }
  NZXTCheck(val){
    this.NZXTIsChecked = val;
    this.FilterList();
  }
//-----------------------
  
  MiniCheck(val){
    this.MiniIsChecked = val;
    this.FilterList();
  }
  MidCheck(val){
    this.MidIsChecked = val;
    this.FilterList();
  }
  FullCheck(val){
    this.FullIsChecked = val;
    this.FilterList();
  }

  GetSearchBar(text)
  {
    console.log(text)
    this.SearchbarText = text;
    this.FilterList();
  }

  FilterList()
  {
    console.log("hit");
    let ManufactureArray = [];
    let SizeArray = [];
    if(this.LianIsChecked)
    {
      ManufactureArray.push("LIAN");
    }
    if(this.FractalIsChecked)
    {
      ManufactureArray.push("Fractal");
    }
    if(this.CorsairIsChecked)
    {
      ManufactureArray.push("Corsair");
    }
    if(this.CoolerMasterIsChecked)
    {
      ManufactureArray.push("Cooler Master");
    }
    if(this.SSUPDIsChecked)
    {
      ManufactureArray.push("SSUPD");
    }
    if(this.ThermaltakeIsChecked)
    {
      ManufactureArray.push("Thermaltake");
    }
    if(this.AntecIsChecked)
    {
      ManufactureArray.push("Antec");
    }
    if(this.NZXTIsChecked)
    {
      ManufactureArray.push("Antec");
    }

    if(this.MiniIsChecked)
    {
      SizeArray.push("Mini-Tower");
    }
    if(this.MidIsChecked)
    {
      SizeArray.push("Mid-Tower");
    }
    if(this.FullIsChecked)
    {
      SizeArray.push("Full-Tower");
    }

    this.filteredArray = this.array.filter(item =>{
      return (ManufactureArray.length > 0 ? ManufactureArray.includes(item.brand)  : true) && (SizeArray.length > 0 ? SizeArray.includes(item.size)  : true) && this.ConvertToNumbers(item.price) >= this.PriceLow && this.ConvertToNumbers(item.price) <= this.PriceHigh && (this.YesIsChecked || this.NoIsChecked ? item.rgb === this.YesIsChecked : true) && (this.SearchbarText !== "" ? item.name.toLowerCase().includes(this.SearchbarText.toLowerCase()) : true)
    })
  }


}

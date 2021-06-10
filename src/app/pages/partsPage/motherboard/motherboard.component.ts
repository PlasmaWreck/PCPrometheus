import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs/operators';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';

@Component({
  selector: 'app-motherboard',
  templateUrl: './motherboard.component.html',
  styleUrls: ['./motherboard.component.css']
})
export class MotherboardComponent implements OnInit {
  Price_minValue: number = 89;
  Price_maxValue: number = 600;
  Price_options: Options = {
    floor: 89,
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
  AsusIsChecked = false;
  GigabyteIsChecked = false;
  BiostarIsChecked = false;
  MsiIsChecked = false;
  //Socket
  AmdIsChecked = false;
  Lga1151IsChecked = false;
  SocketAm4IsChecked = false;
  Lga1200IsChecked = false;
  //Form Factor
  ATXIsChecked = false;
  Micro_AtaxIsChecked = false;
  MiniITXIsChecked = false;
  filteredArray;

  array;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.MotherboardList();

  }
  
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  MotherboardList(){
    this.dService.GetList("motherboard").toPromise().then(
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

  AsusCheck(val){
    this.AsusIsChecked = val;
    this.FilterList();
  }
  GigabyteCheck(val){
    this.GigabyteIsChecked = val;
    this.FilterList();
  }
  BiostarCheck(val){
    this.BiostarIsChecked = val;
    this.FilterList();
  }
  MsiCheck(val){
    this.MsiIsChecked = val;
    this.FilterList();
  }
//
  AmdCheck(val){
    this.AmdIsChecked = val;
    this.FilterList();
  }
  Lga1151Check(val){
    this.Lga1151IsChecked = val;
    this.FilterList();
  }
  SocketAm4Check(val){
    this.SocketAm4IsChecked = val;
    this.FilterList();
  }
  Lga1200Check(val){
    this.Lga1200IsChecked = val;
    this.FilterList();
  }
//
  ATXCheck(val){
    this.ATXIsChecked = val;
    this.FilterList();
  }
  Micro_AtaxCheck(val){
    this.Micro_AtaxIsChecked = val;
    this.FilterList();
  }
  MiniITXCheck(val){
    this.MiniITXIsChecked = val;
    this.FilterList();
  }



  FilterList()
  {
    let ManufactureArray = [];
    let SocketArray = [];
    let FactorArray = [];

    if(this.AsusIsChecked)
    {
      ManufactureArray.push("ASUS");
    }
    if(this.GigabyteIsChecked)
    {
      ManufactureArray.push("GIGABYTE");
    }
    if(this.BiostarIsChecked)
    {
      ManufactureArray.push("Biostar");
    }
    if(this.MsiIsChecked)
    {
      ManufactureArray.push("GIGABYTE");
    }
///---------------
    if(this.AmdIsChecked)
    {
      SocketArray.push("AMD");
    }
    if(this.Lga1151IsChecked)
    {
      SocketArray.push("LGA1151");
    }
    if(this.SocketAm4IsChecked)
    {
      SocketArray.push("Socket AM4");
    }
    if(this.Lga1200IsChecked)
    {
      SocketArray.push("LGA 1200");
    }
//-------------------
    if(this.ATXIsChecked)
    {
      FactorArray.push("ATX");
    }
    if(this.Micro_AtaxIsChecked)
    {
      FactorArray.push("Micro-ATX");
    }
    if(this.MiniITXIsChecked)
    {
      FactorArray.push("MiniITX");
    }

    this.filteredArray = this.array.filter(item=>{
      return (ManufactureArray.length > 0 ? ManufactureArray.includes(item.brand)  : true) && (SocketArray.length > 0 ? SocketArray.includes(item.cpuSocket)  : true) && (FactorArray.length > 0 ? FactorArray.includes(item.formFactor)  : true) && this.ConvertToNumbers(item.price) >= this.PriceLow && this.ConvertToNumbers(item.price) <= this.PriceHigh
    })
    console.log(this.filteredArray)
  }


}

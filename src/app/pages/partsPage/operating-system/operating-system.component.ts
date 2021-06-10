import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';

@Component({
  selector: 'app-operating-system',
  templateUrl: './operating-system.component.html',
  styleUrls: ['./operating-system.component.css']
})
export class OperatingSystemComponent implements OnInit {
     
  Price_minValue: number = 19;
  Price_maxValue: number = 120;
  Price_options: Options = {
    floor: 19,
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
  BDIsChecked = false;
  DVDIsChecked = false;
  CDIsChecked = false;
  PriceHigh = this.Price_options.ceil;
  PriceLow = 0;
  filteredArray;
  array;
  SearchbarText;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.OperatingSystemList()
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  OperatingSystemList(){
    this.dService.GetList("OperatingSystem").toPromise().then(
      (List)=>{
        this.array = List
        this.filteredArray = this.array
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
  BdCheck(val)
  {
    this.BDIsChecked = val
    
    this.FilterList()
  }
  DvdCheck(val)
  {
    this.DVDIsChecked = val
    
    this.FilterList()
  }
  CdCheck(val)
  {
    this.CDIsChecked = val
    
    this.FilterList()
  }
  GetSearchBar(text)
  {
    console.log(text)
    this.SearchbarText = text;
    this.FilterList();
  }

  FilterList()
  {
    this.filteredArray = this.array.filter(item =>{
      return this.ConvertToMoney(item.price) >= this.PriceLow && this.ConvertToMoney(item.price) <= this.PriceHigh && (this.BDIsChecked ? item.installMethod.split("/").includes("BD") : true) && (this.DVDIsChecked ? item.installMethod.split("/").includes("DVD") : true) && (this.CDIsChecked ? item.installMethod.split("/").includes("CD") : true) && (this.SearchbarText !== undefined ? item.name.toLowerCase().includes(this.SearchbarText.toLowerCase()) : true)
    })
    console.log(this.filteredArray)
  }
 

}

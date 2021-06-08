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

  Price_minValue: number = 0;
  Price_maxValue: number = 130;
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
  se;
  YesIsChecked = false;
  NoIsChecked = false;
  //Size
  MiniIsChecked = false;
  MidIsChecked = false;
  FullIsChecked = false;

  array;
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

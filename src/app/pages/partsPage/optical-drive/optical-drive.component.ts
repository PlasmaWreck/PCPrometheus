import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs/operators';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';

@Component({
  selector: 'app-optical-drive',
  templateUrl: './optical-drive.component.html',
  styleUrls: ['./optical-drive.component.css']
})
export class OpticalDriveComponent implements OnInit {
  Price_minValue: number = 0;
  Price_maxValue: number = 1320;
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

  DellIsChecked = false;
  ASUSIsChecked = false;
  OSGEARIsChecked = false;
  LGIsChecked = false;
  LiteIsChecked = false;
  PioneerIsChecked = false;

  array;
  filteredArray;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.OpticalDriveList()
  }
  OpticalDriveList(){
    this.dService.GetList("OpticalDrive").toPromise().then(
      (List)=>{
        this.array = List
        this.filteredArray = List;
        console.log(this.array)
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

  DellCheck(val){
    this.DellIsChecked = val;
    this.FilterList();
  }
  ASUSCheck(val){
    this.ASUSIsChecked = val;
    this.FilterList();
  }
  OSGEARCheck(val){
    this.OSGEARIsChecked = val;
    this.FilterList();
  }
  LGCheck(val){
    this.LGIsChecked = val;
    this.FilterList();
  }
  LiteCheck(val){
    this.LiteIsChecked = val;
    this.FilterList();
  }
  PioneerCheck(val){
    this.PioneerIsChecked = val;
    this.FilterList();
  }

  FilterList()
  {
    console.log("hit")
    let ManufactureArray = [];
    if(this.DellIsChecked)
    {
      ManufactureArray.push("Dell");
    }
    if(this.ASUSIsChecked)
    {
      ManufactureArray.push("ASUS");
    }
    if(this.OSGEARIsChecked)
    {
      ManufactureArray.push("OSGEAR");
    }
    if(this.LGIsChecked)
    {
      ManufactureArray.push("LG");
    }
    if(this.LiteIsChecked)
    {
      ManufactureArray.push("Lite-On");
    }
    if(this.PioneerIsChecked)
    {
      ManufactureArray.push("Pioneer");
    }

    this.filteredArray = this.array.filter(item=>{
      return (ManufactureArray.length > 0 ? ManufactureArray.includes(item.brand)  : true) && this.ConvertToNumbers(item.price) >= this.PriceLow && this.ConvertToNumbers(item.price) <= this.PriceHigh
    })
  }
}

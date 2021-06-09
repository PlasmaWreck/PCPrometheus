import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';

@Component({
  selector: 'app-motherboard',
  templateUrl: './motherboard.component.html',
  styleUrls: ['./motherboard.component.css']
})
export class MotherboardComponent implements OnInit {
  Price_minValue: number = 0;
  Price_maxValue: number = 500;
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
  AsusIsChecked = false;
  GigabyteIsChecked = false;
  BiostarIsChecked = false;
  MsiIsChecked = false;
  //Socket
  AmdIsChecked = false;
  Lga1151IsChecked = false;
  IsChecked = false;
  //Form Factor
  ATXIsChecked = false;
  Micro_AtaxIsChecked = false;
  Lga1200IsChecked = false;

  array;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.array = this.MotherboardList();
  }
  
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  MotherboardList(){
    this.dService.GetList("motherboard").toPromise().then(
      (List)=>{
        this.array = List
        console.log(this.array)
      }
    )
  }
  CaseLi
}

import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';

@Component({
  selector: 'app-power-supply',
  templateUrl: './power-supply.component.html',
  styleUrls: ['./power-supply.component.css']
})
export class PowerSupplyComponent implements OnInit {
  array;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }

  PowerSupplyList(){
    this.dService.GetList("PowerSupply").toPromise().then(
      (List)=>{
        this.array = List
        console.log(this.array)
      }
    )
  }
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

}

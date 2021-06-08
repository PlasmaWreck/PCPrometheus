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
  array;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.dService.GetList("harddrive").toPromise().then(
      (List)=>{
        console.log(List)
        this.array = List
      }
    )
  }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
   
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

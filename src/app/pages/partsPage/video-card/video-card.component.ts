import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/service/prometheusapi/Data/data.service';


@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {
  array;
  constructor(private dService: DataService,private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  GraphicsCardList(){
    this.dService.GetList("GraphicsCard").toPromise().then(
      (List)=>{
        this.array = List
        console.log(this.array)
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
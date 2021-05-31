
import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/service/Data/data.service';


@Component({
  selector: 'app-computer-building',
  templateUrl: './computer-building.component.html',
  styleUrls: ['./computer-building.component.css']
})
export class ComputerBuildingComponent implements OnInit {

  partType: string;
  constructor(private dService: DataService, private route: ActivatedRoute, private modalService: NgbModal) { }
  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }
  array = []
  ngOnInit(): void {
    this.dService.GetData().subscribe(data => this.array = data.products);
    this.dService.GetData().subscribe(data => console.log(data.products));
    this.partType = this.route.snapshot.paramMap.get("partType");
    console.log(this.partType)
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
  //Motherboard
  memorySlots_minValue: number = 0;
  memorySlots_maxValue: number = 16;
  memorySlots_options: Options = {
    floor: 0,
    ceil: this.memorySlots_maxValue,
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
//CPUs
Cores_minValue: number = 0;
  Cores_maxValue: number = 16;
  Cores_options: Options = {
    floor: 0,
    ceil: this.Cores_maxValue,
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
  GHz_minValue: number = 0;
  GHz_maxValue: number = 16;
  GHz_options: Options = {
    floor: 0,
    ceil: this.GHz_maxValue,
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
//CPU Coolers
fanRpm_minValue: number = 0;
  fanRpm_maxValue: number = 16;
  fanRpm_options: Options = {
    floor: 0,
    ceil: this.fanRpm_maxValue,
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
//Storage
Cache_minValue: number = 0;
  Cache_maxValue: number = 16;
  Cache_options: Options = {
    floor: 0,
    ceil: this.Cache_maxValue,
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
//Video Card
capacity_minValue: number = 0;
  capacity_maxValue: number = 16;
  capacity_options: Options = {
    floor: 0,
    ceil: this.capacity_maxValue,
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
coreClock_minValue: number = 0;
  coreClock_maxValue: number = 16;
  coreClock_options: Options = {
    floor: 0,
    ceil: this.coreClock_maxValue,
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
boostClock_minValue: number = 0;
  boostClock_maxValue: number = 16;
  boostClock_options: Options = {
    floor: 0,
    ceil: this.boostClock_maxValue,
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

  itemArray = [
    {
      "name": "Fart",
      "Manufacturer": "Ryzen",
      "Cores": 12,
      "GHz": 5,
      "Threads": 55,
      "Price": 349.99
    },
    {
      "name": "Per Mega Shit",
      "Manufacturer": "I don't know",
      "Cores": 1,
      "GHz": 43,
      "Threads": 14,
      "Price": 123.99
    },
    {
      "name": "Snake Kills dumble dor",
      "Manufacturer": "yeah",
      "Cores": 8,
      "GHz": 5,
      "Threads": 14,
      "Price": 123123.99
    },
    {
      "name": "ahjksdhf",
      "Manufacturer": "kicking",
      "Cores": 8,
      "GHz": 31,
      "Threads": 14,
      "Price": 3429.99
    },
  ]

}

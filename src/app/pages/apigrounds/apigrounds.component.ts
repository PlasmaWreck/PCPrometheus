import { Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { IGraphicsCard } from 'src/app/Interfaces/Igraphicscard';
import { AddService } from 'src/app/service/prometheusapi/Add/add.service';
import { DeleteService } from 'src/app/service/prometheusapi/Delete/delete.service';
import { GetService } from 'src/app/service/prometheusapi/Get/get.service';
import { UpdateService } from 'src/app/service/prometheusapi/Update/update.service';

@Component({
  selector: 'app-apigrounds',
  templateUrl: './apigrounds.component.html',
  styleUrls: ['./apigrounds.component.css']
})
export class ApigroundsComponent implements OnInit {


  public data: any;
  public cardToAdd: IGraphicsCard = {
    Id:1,
    Name:"Cool Card",
    GPU:"Store Brand",
    CoreCount:12,
    CoreClockSpeed:12,
    MemoryType:"Good",
    MemorySize:12,
    MemoryBandwidth:12,
    MotherBoardInterface:12,
    ThermalDesignPower:120,
    PowerConnectors:["String","Of many Kinds"],
    VideoOutputPorts:["String","Of many Kinds"],
    APISupport:"None",
    ComputePerformance:1
  };
  

  constructor(private aService:AddService,
    private gService:GetService,
    private uService:UpdateService, 
    private dService:DeleteService,
    private http: HttpClient) { }


  ngOnInit(): void {
  }

  addGraphicsCard(){
    this.aService.addGraphicsCard(this.cardToAdd).then(
      (res : any) => {
          console.log(res);
      }
    )
  }

}

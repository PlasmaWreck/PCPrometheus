import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
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

  constructor(private aService:AddService,
    private gService:GetService,
    private uService:UpdateService, 
    private dService:DeleteService,
    private http: HttpClient) { }

  ngOnInit(): void {
  }
  stringifyInfo:string = JSON.stringify(this.http.get("https://spreadsheets.google.com/feeds/list/16XwMdcD_nzFyO5igT43Z0372CPQ3NUk7aMGdp-E1_oU/3/public/full?alt=json")

  // THE PIPE LETS YOU COMBIME MULTIPLE FUNTIONS INTO ONE FUNCTION 
  .pipe(

    
    // Map is going through all items returned and stored in this.data variable.
    map(res => this.data = res)

    // ALLOW US TO TAP INTO THE OBSERVABLE TO BE ABLE CHECK FOR SUCCESS / FAILED ATTEMPT THEN DETERMINES HOW TO HANDLE IT. 
  ));

  getGraphicsCards(){
    this.gService.getGraphicsCards().then(
      (res : any ) => {
        console.log(res);
      }
    )
  }

}

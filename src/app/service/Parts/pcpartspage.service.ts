import { Injectable } from '@angular/core';
import { DataService } from '../prometheusapi/Data/data.service';

@Injectable({
  providedIn: 'root'
})
export class PcpartspageService {

  constructor(private dService: DataService) { }

  public getGrahpicsCards(){
    return this.dService.GetList("GraphicsCard").toPromise()
  }
}

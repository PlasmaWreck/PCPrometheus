import { Injectable } from '@angular/core';
import { IGraphicsCard } from 'src/app/Interfaces/Igraphicscard';
import { DataService } from '../Data/data.service';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private dService: DataService) { }

  addGraphicsCard(cardToAdd: IGraphicsCard){
    return this.dService.post("GraphicsCard/add", cardToAdd).toPromise();
  }
}

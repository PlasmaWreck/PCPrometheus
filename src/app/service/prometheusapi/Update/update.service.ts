import { Injectable } from '@angular/core';
import { IGraphicsCard } from 'src/app/Interfaces/Igraphicscard';
import { DataService } from '../Data/data.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private dService: DataService) { }

  Update(userToUpdate: IGraphicsCard){
    return this.dService.post("GraphicsCard/update", userToUpdate).toPromise();
  }
}

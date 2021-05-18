import { Injectable } from '@angular/core';
import { DataService } from '../Data/data.service';

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(private dService: DataService) { }

  Delete(){
    return this.dService.delete("userinfo/24").toPromise();
  }
}

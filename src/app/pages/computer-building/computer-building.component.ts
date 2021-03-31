
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-computer-building',
  templateUrl: './computer-building.component.html',
  styleUrls: ['./computer-building.component.css']
})
export class ComputerBuildingComponent implements OnInit {

  constructor(private dService: DataService) { }

  ngOnInit(): void {
    this.dService.GetData().subscribe(data=>console.log(data));
  }

  
}

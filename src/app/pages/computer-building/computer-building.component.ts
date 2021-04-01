
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-computer-building',
  templateUrl: './computer-building.component.html',
  styleUrls: ['./computer-building.component.css']
})
export class ComputerBuildingComponent implements OnInit {

  constructor(private dService: DataService) { }
  array = []
  ngOnInit(): void {
    this.dService.GetData().subscribe(data=>this.array = data.products);
    this.dService.GetData().subscribe(data=>console.log(data.products));
    
    
  }
  
  
  itemArray = [
    {
      "name": "Fart",
      "Manufacturer": "Ryzen",
      "Cores":12,
      "GHz":5,
      "Threads":55,
      "Price":349.99
    },
    {
      "name": "Per Mega Shit",
      "Manufacturer": "I don't know",
      "Cores":1,
      "GHz":43,
      "Threads":14,
      "Price":123.99
    },
    {
      "name": "Snake Kills dumble dor",
      "Manufacturer": "yeah",
      "Cores":8,
      "GHz":5,
      "Threads":14,
      "Price":123123.99
    },
    {
      "name": "ahjksdhf",
      "Manufacturer": "kicking",
      "Cores":8,
      "GHz":31,
      "Threads":14,
      "Price":3429.99
    },
  ]

}

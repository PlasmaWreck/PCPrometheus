import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-build',
  templateUrl: './office-build.component.html',
  styleUrls: ['./office-build.component.css']
})
export class OfficeBuildComponent implements OnInit {
  //The only way I could get the description to work
  CaseDesc=`The Cooler Master MasterBox E300L is a budget friendly, quiet case that can fit all of our components. While it doesn't offer much in the way of cable management, there is room for plenty of storage in the hard drive cages. The case also has front panel USB 3.0 and a 5.25" bay for our optical drive. Cases tend to be highly personal choices, so make sure you browse our listed cases to see what suits you.`

  constructor() { }

  ngOnInit(): void {
  }

}

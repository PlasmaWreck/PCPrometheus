import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PcPrometheus';
  //Routing
  partsPage_Route="/ComputerBuilding/cpu"
  questionnaire_Route="/questionnaire"
  partDesc_Route="/partdescription"
  partsInstall_Route="/partinstallation"
  recBuild_Route="/recbuild"
  //Routing for parts
  cpu_Route = "/ComputerBuilding/cpu"
  cpuCooler_Route = "/ComputerBuilding/cooler"
  motherboard_Route = "/ComputerBuilding/motherboard"
  memory_Route = "/ComputerBuilding/memory"
  storage_Route = "/ComputerBuilding/storage"
  videoCard_Route = "/ComputerBuilding/videoCard"
  powerSupply_Route = "/ComputerBuilding/powersupply"
  opticalDrive_Route = "/ComputerBuilding/opticaldrive"
  operatingSystem_Route = "/ComputerBuilding/operatingsystem"
  case_Route = "/ComputerBuilding/case"
  partTypesArray=[this.cpu_Route, this.cpuCooler_Route, this.motherboard_Route, ]
  public isMenuCollapsed = true;


  public isComputerBuildsCollapsed = true;
  public isPCResourcesCollapsed = true;
  public isProductsCollapsed = true;




}

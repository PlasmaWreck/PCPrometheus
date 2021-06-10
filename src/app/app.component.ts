import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PcPrometheus';
  //Routing
  partsPage_Route="/CPU"
  questionnaire_Route="/questionnaire"
  partDesc_Route="/partdescription"
  partsInstall_Route="/partinstallation"
  recBuild_Route="/recbuild"
  //Routing for parts
  cpu_Route = "/CPU"
  cpuCooler_Route = "/Cooler"
  motherboard_Route = "/Motherboard"
  memory_Route = "/Memory"
  storage_Route = "/Storage"
  videoCard_Route = "/VideoCard"
  powerSupply_Route = "/PowerSupply"
  opticalDrive_Route = "/OpticalDrive"
  operatingSystem_Route = "/OperatingSystem"
  case_Route = "/Case"
  partTypesArray=[this.cpu_Route, this.cpuCooler_Route, this.motherboard_Route, ]
  public isMenuCollapsed = true;


  public isComputerBuildsCollapsed = true;
  public isPCResourcesCollapsed = true;
  public isProductsCollapsed = true;




}

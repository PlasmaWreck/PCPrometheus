import { Component, } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PcPrometheus';
  public isMenuCollapsed = false;


  public isComputerBuildsCollapsed = true;
  public isPCResourcesCollapsed = true;
  public isProductsCollapsed = true;


}

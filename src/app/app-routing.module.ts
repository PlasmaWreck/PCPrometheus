import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerBuildingComponent } from './pages/computer-building/computer-building.component';

import { PartsdescriptionComponent } from './pages/partsdescription/partsdescription.component'

const routes: Routes = [
  {path: 'partdescription', component :PartsdescriptionComponent}, 
  {path: 'ComputerBuilding', component :ComputerBuildingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

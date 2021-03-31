import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerBuildingComponent } from './pages/computer-building/computer-building.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';



import { PartsdescriptionComponent } from './pages/partsdescription/partsdescription.component'
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PartinstallationComponent } from './pages/partinstallation/partinstallation.component';

const routes: Routes = [
  {path: 'partdescription', component :PartsdescriptionComponent}, 
  {path: 'ComputerBuilding', component :ComputerBuildingComponent},
  {path: 'questionnaire', component :QuestionnaireComponent},
  {path: 'partinstallation', component: PartinstallationComponent},
  {path: '', component :HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerBuildingComponent } from './pages/computer-building/computer-building.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';



import { PartsdescriptionComponent } from './pages/partsdescription/partsdescription.component'
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PartinstallationComponent } from './pages/partinstallation/partinstallation.component';
import { RecbuildComponent } from './pages/recbuild/recbuild.component';
import { GamingBuildComponent } from './pages/gaming-build/gaming-build.component';


const routes: Routes = [
  {path: 'partdescription', component :PartsdescriptionComponent}, 
  {path: 'ComputerBuilding', component :ComputerBuildingComponent},
  {path: 'questionnaire', component :QuestionnaireComponent},

  {path: 'partinstallation', component: PartinstallationComponent},
  {path: 'recbuild', component:RecbuildComponent},
  {path: '', component :HomepageComponent},
  {path: 'GamingBuild', component :GamingBuildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerBuildingComponent } from './pages/computer-building/computer-building.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { PartsdescriptionComponent } from './pages/partsdescription/partsdescription.component'
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PartinstallationComponent } from './pages/partinstallation/partinstallation.component';
import { RecbuildComponent } from './pages/recbuild/recbuild.component';
import { GamingBuildComponent } from './pages/gaming-build/gaming-build.component';
import { VideogamesComponent } from './pages/videogames/videogames.component';
import { SurveypartpickerComponent } from './pages/surveypartpicker/surveypartpicker.component';
import { ApigroundsComponent } from './pages/apigrounds/apigrounds.component';
import { LoginComponent } from './pages/login/login.component';
import { OfficeBuildComponent } from './pages/office-build/office-build.component';


const routes: Routes = [
  {path: 'surveyparts', component :SurveypartpickerComponent},
  {path: 'partdescription', component :PartsdescriptionComponent}, 
  {path: 'ComputerBuilding/:partType', component :ComputerBuildingComponent},
  {path: 'questionnaire', component :QuestionnaireComponent},
  {path: 'partinstallation', component: PartinstallationComponent},
  {path: 'recbuild', component:RecbuildComponent},
  {path: 'apiworking', component:ApigroundsComponent},
  {path: '', component :HomepageComponent},
  {path: 'GamingBuild', component :GamingBuildComponent},
  {path: 'OfficeBuild', component :OfficeBuildComponent},
  {path: 'videogames', component : VideogamesComponent},
  {path: 'LoginPage', component :LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

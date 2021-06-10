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
import { ShoppingcartComponent } from './pages/shoppingcart/shoppingcart.component';
import { ApigroundsComponent } from './pages/apigrounds/apigrounds.component';
import { LoginComponent } from './pages/login/login.component';
import { OfficeBuildComponent } from './pages/office-build/office-build.component';
import { VideoEditingBuildComponent } from './pages/video-editing-build/video-editing-build.component';
import { CPUComponent } from './pages/partsPage/cpu/cpu.component';
import { CoolerComponent } from './pages/partsPage/cooler/cooler.component';
import { MemoryComponent } from './pages/partsPage/memory/memory.component';
import { StorageComponent } from './pages/partsPage/storage/storage.component';
import { VideoCardComponent } from './pages/partsPage/video-card/video-card.component';
import { PowerSupplyComponent } from './pages/partsPage/power-supply/power-supply.component';
import { OpticalDriveComponent } from './pages/partsPage/optical-drive/optical-drive.component';
import { OperatingSystemComponent } from './pages/partsPage/operating-system/operating-system.component';
import { CaseComponent } from './pages/partsPage/case/case.component';
import { MotherboardComponent } from './pages/partsPage/motherboard/motherboard.component';


const routes: Routes = [
  {path: 'surveyparts', component :SurveypartpickerComponent},
  {path: 'partdescription', component :PartsdescriptionComponent}, 
  //{path: 'ComputerBuilding/:partType', component :ComputerBuildingComponent},
  {path: 'CPU', component :CPUComponent},
  {path: 'Cooler', component :CoolerComponent},
  {path: 'Memory', component :MemoryComponent},
  {path: 'Storage', component :StorageComponent},
  {path: 'VideoCard', component :VideoCardComponent},
  {path: 'PowerSupply', component :PowerSupplyComponent},
  {path: 'OpticalDrive', component :OpticalDriveComponent},
  {path: 'OperatingSystem', component :OperatingSystemComponent},
  {path: 'Motherboard', component :MotherboardComponent},
  {path: 'Case', component :CaseComponent},
  {path: 'questionnaire', component :QuestionnaireComponent},
  {path: 'partinstallation', component: PartinstallationComponent},
  {path: 'recbuild', component:RecbuildComponent},
  {path: 'apiworking', component:ApigroundsComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component :HomepageComponent},
  {path: 'GamingBuild', component :GamingBuildComponent},
  {path: 'shoppingcart', component : ShoppingcartComponent},
  {path: 'OfficeBuild', component :OfficeBuildComponent},
  {path: 'VideoEditingBuild', component :VideoEditingBuildComponent},
  {path: 'videogames', component : VideogamesComponent},
  {path: 'LoginPage', component :LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartsdescriptionComponent } from './pages/partsdescription/partsdescription.component';
import { ResourcetabsComponent } from './components/resourcetabs/resourcetabs.component';
import { ComputerBuildingComponent } from './pages/computer-building/computer-building.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { MotherboardFilterComponent } from './components/ComputerBuilding/motherboard-filter/motherboard-filter.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PartinstallationComponent } from './pages/partinstallation/partinstallation.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RecbuildComponent } from './pages/recbuild/recbuild.component';
import { ItemBoxComponent } from './components/ComputerBuilding/item-box/item-box.component';
import { HollowBtnComponent } from './components/Global/hollow-btn/hollow-btn.component';
import { ApigroundsComponent } from './pages/apigrounds/apigrounds.component';
import { GamingBuildComponent } from './pages/gaming-build/gaming-build.component';
import { PartsDescriptionComponent } from './components/buildshowcase/parts-description/parts-description.component';
import { VideogamesComponent } from './pages/videogames/videogames.component';
import { SurveypartpickerComponent } from './pages/surveypartpicker/surveypartpicker.component';
import { LoginComponent } from './pages/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
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
import { CaseBoxComponent } from './components/ComputerBuilding/item-boxes/case-box/case-box.component';
import { CoolerBoxComponent } from './components/ComputerBuilding/item-boxes/cooler-box/cooler-box.component';
import { CpuBoxComponent } from './components/ComputerBuilding/item-boxes/cpu-box/cpu-box.component';
import { MemoryBoxComponent } from './components/ComputerBuilding/item-boxes/memory-box/memory-box.component';
import { OpSysBoxComponent } from './components/ComputerBuilding/item-boxes/op-sys-box/op-sys-box.component';
import { OptDriveBoxComponent } from './components/ComputerBuilding/item-boxes/opt-drive-box/opt-drive-box.component';
import { PowSupBoxComponent } from './components/ComputerBuilding/item-boxes/pow-sup-box/pow-sup-box.component';
import { VideoCardBoxComponent } from './components/ComputerBuilding/item-boxes/video-card-box/video-card-box.component';
import { MotherboardComponent } from './pages/partsPage/motherboard/motherboard.component';
import { MotherboardBoxComponent } from './components/ComputerBuilding/item-boxes/motherboard-box/motherboard-box.component';
import { FilterDropdownComponent } from './components/ComputerBuilding/filter-dropdown/filter-dropdown.component';
import { StorageBoxComponent } from './components/ComputerBuilding/item-boxes/storage-box/storage-box.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    PartsdescriptionComponent,
    ResourcetabsComponent,
    ComputerBuildingComponent,
    HomepageComponent,
    PartinstallationComponent,
    MotherboardFilterComponent,
    HomepageComponent,
    SearchBarComponent,
    RecbuildComponent,
    ItemBoxComponent,
    HollowBtnComponent,
    ApigroundsComponent,
    GamingBuildComponent,
    PartsDescriptionComponent,
    VideogamesComponent,
    SurveypartpickerComponent,
    LoginComponent,
    OfficeBuildComponent,
    VideoEditingBuildComponent,
    CPUComponent,
    CoolerComponent,
    MemoryComponent,
    StorageComponent,
    VideoCardComponent,
    PowerSupplyComponent,
    OpticalDriveComponent,
    OperatingSystemComponent,
    CaseComponent,
    CaseBoxComponent,
    CoolerBoxComponent,
    CpuBoxComponent,
    MemoryBoxComponent,
    OpSysBoxComponent,
    OptDriveBoxComponent,
    PowSupBoxComponent,
    VideoCardBoxComponent,
    MotherboardComponent,
    MotherboardBoxComponent,
    FilterDropdownComponent,
    StorageBoxComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxSliderModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["https://csa2020studentapi.azurewebsites.net/","http://localhost:5000"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

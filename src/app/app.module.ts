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
    SurveypartpickerComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxSliderModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

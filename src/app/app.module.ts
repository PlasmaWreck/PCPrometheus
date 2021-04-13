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
import { GamingBuildComponent } from './pages/gaming-build/gaming-build.component';
import { PartsDescriptionComponent } from './components/buildshowcase/parts-description/parts-description.component';
import { LoginComponent } from './pages/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';

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
    GamingBuildComponent,
    PartsDescriptionComponent,
    LoginComponent

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

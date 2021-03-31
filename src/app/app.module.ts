import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartsdescriptionComponent } from './pages/partsdescription/partsdescription.component';
import { ResourcetabsComponent } from './components/resourcetabs/resourcetabs.component';
import { ComputerBuildingComponent } from './pages/computer-building/computer-building.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RecbuildComponent } from './pages/recbuild/recbuild.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    PartsdescriptionComponent,
    ResourcetabsComponent,
    ComputerBuildingComponent,
    HomepageComponent,
    RecbuildComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

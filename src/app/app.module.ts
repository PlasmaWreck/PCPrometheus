import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartsdescriptionComponent } from './pages/partsdescription/partsdescription.component';
import { ResourcetabsComponent } from './components/resourcetabs/resourcetabs.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    PartsdescriptionComponent,
    ResourcetabsComponent

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

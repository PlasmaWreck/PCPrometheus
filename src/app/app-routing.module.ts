import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';


import { PartsdescriptionComponent } from './pages/partsdescription/partsdescription.component'
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  {path: 'partdescription', component :PartsdescriptionComponent},
  {path: 'questionnaire', component :QuestionnaireComponent},
  {path: '', component :HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

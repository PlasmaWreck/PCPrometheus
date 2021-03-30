import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartsdescriptionComponent } from './pages/partsdescription/partsdescription.component'

const routes: Routes = [
  {path: 'partdescription', component :PartsdescriptionComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

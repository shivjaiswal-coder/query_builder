import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RulesetComponent} from './ruleset/ruleset.component'
const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

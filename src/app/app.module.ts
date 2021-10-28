import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RulesetComponent } from './ruleset/ruleset.component';
import { TestComponent } from './test/test.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    RulesetComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

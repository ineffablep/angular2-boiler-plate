import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SuiModule } from './sui/sui.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RatingSampleComponent } from './samples/sample.rating/sample.rating.component';
import { TableSampleComponent } from './samples/sample.table/sample.table.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'ratingsUi', component: RatingSampleComponent },
      { path: 'tableUi', component: TableSampleComponent },

      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    SuiModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    RatingSampleComponent,
    TableSampleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

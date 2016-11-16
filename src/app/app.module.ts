import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpModule , JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { SuiModule } from './sui/sui.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RatingSampleComponent } from './samples/sample.rating/sample.rating.component';
import { TableSampleComponent } from './samples/sample.table/sample.table.component';
import { SampleFormComponent } from './samples/sample.form/sample.form.component';
import { ModalSampleComponent } from './samples/sample.modal/sample.modal.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    JsonpModule ,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'ratingsUi', component: RatingSampleComponent },
      { path: 'tableUi', component: TableSampleComponent },
      { path: 'sampleForm', component: SampleFormComponent },
      { path: 'sampleModal', component: ModalSampleComponent },

      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    SuiModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    RatingSampleComponent,
    TableSampleComponent,
    SampleFormComponent,
    ModalSampleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

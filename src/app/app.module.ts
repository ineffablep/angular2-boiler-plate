import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

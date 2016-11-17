import { INavigationModel,
         NavigationModel,
         RouteLinkModel } from 'angular2-simple-ui/sui/sui.navigation/sui.navigation.model';
import { Component } from '@angular/core';
import 'angular2-simple-ui/public/css/style.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public nav: INavigationModel;
    constructor() {
      this.nav = new NavigationModel('Simple UI');
      let links = [new RouteLinkModel('welcome', 'Welcome', 'fa fa-tachometer', 'nav-link'),
                   new RouteLinkModel('ratingsUi', 'Rating Sample'),
                   new RouteLinkModel('tableUi', 'Table Sample'),
                   new RouteLinkModel('sampleForm', 'Form Sample'),
                   new RouteLinkModel('sampleModal', 'Modal Sample'),

                  ];
      this.nav.cssClass = 'sui-xlarge';
      this.nav.links = links;
    }
}

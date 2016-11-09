import { INavigationModel,
         NavigationModel,
         RouteLinkModel } from './sui/sui.navigation/sui.navigation.model';
import { Component } from '@angular/core';
import '../../public/css/style.css';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public nav: INavigationModel;
    constructor() {
      this.nav = new NavigationModel('Simple UI');
      let links = [new RouteLinkModel('welcome', 'Welcome'),
                   new RouteLinkModel('ratingsUi', 'Rating Sample'),
                   new RouteLinkModel('tableUi', 'Table Sample'),

                  ];
      this.nav.links = links;
    }
}

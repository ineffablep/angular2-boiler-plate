import { Component , Input } from '@angular/core';
import { INavigationModel } from './sui.navigation.model';

@Component({
  selector: 'sui-nav',
  templateUrl: './sui.navigation.component.html'
})
export class NavigationComponent {
  showSmallMenu: boolean = false;
  @Input() nav: INavigationModel;

  onBarsClicked() {
    this.showSmallMenu = !this.showSmallMenu;
  }
}

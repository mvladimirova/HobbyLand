import { Component } from '@angular/core';

@Component({
  selector: 'hobby-land-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrl: './navigation-list.component.scss',
})
export class NavigationListComponent {
  public navigationItems = [{ title: 'Score Board', icon: 'scoreboard' }];
}

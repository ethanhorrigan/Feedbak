import { Component, OnInit } from '@angular/core';

declare var $: any;

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'feed', title: 'News Feed', icon: 'ti-rss-alt', class: '' },
  { path: 'user', title: 'User Profile', icon: 'ti-user', class: '' },
  { path: 'login', title: 'Login', icon: 'ti-bell', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];



  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }



}

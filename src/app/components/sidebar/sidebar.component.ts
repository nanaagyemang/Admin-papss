import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dash', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/dashboard', title: 'Companies',  icon: 'business', class: '' },
    { path: '/user-profile', title: 'Reps',  icon:'person', class: '' },
    { path: '/table-list', title: 'Add Companies',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Add Reps',  icon:'groups', class: '' },
    { path: '/icons', title: 'Upload Products',  icon:'unarchive', class: '' },
    { path: '/products', title: 'My Products',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Transactions',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

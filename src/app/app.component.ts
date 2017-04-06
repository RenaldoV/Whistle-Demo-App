import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { ReportSuspiciousPage } from '../pages/report-suspicious/report-suspicious';
import { ReportsPage } from '../pages/reports/reports';
import { ReportPage } from '../pages/report/report';
import { UpdatePage } from '../pages/update/update';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = DashboardPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Dashboard', component: DashboardPage },
      { title: 'Report Suspicious', component: ReportSuspiciousPage },
      { title: 'Report', component: ReportsPage },
      { title: 'Report', component: ReportPage },
      { title: 'Update', component: UpdatePage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();

    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

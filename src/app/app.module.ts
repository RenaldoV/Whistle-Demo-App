import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { FalseAlarmPage } from '../pages/false-alarm/false-alarm';
import { AvatarHeadPage } from '../pages/avatar-head/avatar-head';
import { ReportSuspiciousPage } from '../pages/report-suspicious/report-suspicious';
import { ReportsPage } from '../pages/reports/reports';
import { ReportPage } from '../pages/report/report';
import { UpdatePage } from '../pages/update/update';

import { StatusBar } from '@ionic-native/status-bar';
import { Vibration } from '@ionic-native/vibration';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    FalseAlarmPage,
    AvatarHeadPage,
    ReportSuspiciousPage,
    ReportsPage,
    ReportPage,
    UpdatePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    FalseAlarmPage,
    AvatarHeadPage,
    ReportSuspiciousPage,
    ReportsPage,
    ReportPage,
    UpdatePage
  ],
  providers: [
    Vibration,
    StatusBar,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

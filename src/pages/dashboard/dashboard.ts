import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { NavController } from 'ionic-angular';
import { FalseAlarmPage } from '../false-alarm/false-alarm';
import { ReportSuspiciousPage } from '../report-suspicious/report-suspicious';
import { ReportsPage } from '../reports/reports';
import { UpdatePage } from '../update/update';


@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {
  constructor(private alertCtrl: AlertController ,private vibration: Vibration,public navCtrl: NavController) {

  }

  goToSuspiciousActivity(e){
    this.navCtrl.push(ReportsPage,{});
  }

  goToProfile(e){
    this.navCtrl.push(UpdatePage,{});
  }

  fireAlert(e){
    this.navCtrl.push(FalseAlarmPage, {});
    this.vibration.vibrate(1000);
  }
  reportSuspicious(e){
    this.navCtrl.push(ReportSuspiciousPage,{});
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ReportPage } from '../report/report';

/*
  Generated class for the Reports page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html'
})
export class ReportsPage {
  public reports : any = [
    {
      name: "Admin",
      id: 0,
      date: "27/11/16 at 15:12",
      reportText: "Please note! Criminals now use gate jamming devices to obtain the signal of...",
      map: "img/map.jpg"
    },
    {
      name: "Mrs K Smith",
      id: 1,
      date: "12/12/16 at 11:17",
      reportText: "On 12/12/16 at 11:17 Mrs K Smith reported a suspicious activity in Mica Street. The...",
      map: "img/map.jpg"
    },
    {
      name: "Mr S Alberts",
      id: 2,
      date: "14/01/16 at 15:03",
      reportText: "On 14/01/16 at 15:03 Mr S Alberts reported a suspicious vehicle in Jordan Street. The...",
      map: "img/map.jpg"
    },
    {
      name: "Admin",
      id: 3,
      date: "27/02/17 at 15:02",
      reportText: "Please note! There have been cases of dog poisoning in your region. Please be aware...",
      map: "img/map.jpg"
    },
    {
      name: "Mr L Khumalo",
      id: 4,
      date: "07/12/16 at 08:27",
      reportText: "On 07/12/16 at 08:27 Mr L Khumalo reported a suspicious vehicle in Jordan Street. The...",
      map: "img/map.jpg"
    },
    {
      name: "Mr G Brits",
      id: 5,
      date: "14/01/16 at 15:03",
      reportText: "On 14/01/16 at 15:03 Mr S Alberts reported a suspicious vehicle in Jordan Street. The...",
      map: "img/map.jpg"
    },
    {
      name: "Mr R Dixon",
      id: 6,
      date: "14/01/16 at 15:03",
      reportText: "On 14/01/16 at 15:03 Mr S Alberts reported a suspicious vehicle in Jordan Street. The...",
      map: "img/map.jpg"
    },
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.reports.forEach(function(e){
      if(e.name != "Admin")
        e.isAdmin = "notAdmin";
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
  }

  gotoReport(report){
    this.navCtrl.push(ReportPage,report);
  }

}

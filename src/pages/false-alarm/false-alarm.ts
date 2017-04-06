import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-false-alarm',
  templateUrl: 'false-alarm.html'
})
export class FalseAlarmPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
  }

  falseAlarm(e){
    let alert = this.alertCtrl.create({
      title: 'Are You Sure?',
      subTitle: 'This will cancel your emergency request.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }
}

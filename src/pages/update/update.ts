import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the Update page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-update',
  templateUrl: 'update.html'
})
export class UpdatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }
  update(e){
    let alert = this.alertCtrl.create({
      title: 'Update Successful',
      subTitle: 'Your profile has been updated successfully.',
      buttons: [
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

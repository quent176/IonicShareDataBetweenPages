import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShareServiceProvider } from '../../providers/share-service/share-service';

/**
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  //déclarer les variables
  parameter1: string;
  parameter2: string;
  serviceData: string;
  inputNameSent: any;
  serviceDataPrenom: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private shareServiceProvider: ShareServiceProvider) {
    //get in constructor "param1" & "param2" via navParams
    this.parameter1 = navParams.get('param1');
    this.parameter2 = navParams.get('param2');

    //get data from service, set in the homepage.ts
    this.serviceData = shareServiceProvider.getUserName();

    //get data "inputNameSend" set from the input
    this.inputNameSent = navParams.get('inputNameSend');

    //get data from service, set from the input
    this.serviceDataPrenom = shareServiceProvider.getMonPrenom();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page1Page');
  }

}

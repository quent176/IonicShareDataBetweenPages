import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Page1Page } from '../page1/page1';
import { ShareServiceProvider } from '../../providers/share-service/share-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  inputNameSaved: any;

  constructor(public navCtrl: NavController, private shareService: ShareServiceProvider) {
    //set the userName
    shareService.setUserName('Seb', 'Le Service');
  }

  //See HTML : On click, call the function
  changePage(event) {
    //Set the service according the text in the input
    this.shareService.setMonPrenom(this.inputNameSaved)

    //Change page with following parameters
    this.navCtrl.push(Page1Page, {
      //param1&2 defined in the code
      param1 : 'John', param2 : 'Johnson',
      //param inputNameSend defined according the input (see ngModel in HTML which gives an object)
    inputNameSend : this.inputNameSaved
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the ShareServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShareServiceProvider {

  firstName: string;
  lastName: string;
  monPrenom: any;

  constructor(public http: HttpClient) {
    this.firstName = 'BlankF';
    this.lastName = 'BlankN';
    this.monPrenom = 'Blank'
  }

  //SetUserName already defined in home.ts
  setUserName(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getUserName() {
    return this.firstName + ' ' + this.lastName;
  }

  //setMonPrenom according the txt in the input
  setMonPrenom(prenomReceived){
    this.monPrenom = prenomReceived;
  }

  getMonPrenom() {
    return this.monPrenom;
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public person: {name: string, gender: string, birthdate?: number, pnumber: string};
  dob: any;
  age: any;
  showProfile: boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     private socialsharing : SocialSharing,public actionSheetCtrl: ActionSheetController) {
    this.person = {name: undefined, gender: undefined, birthdate: undefined, pnumber: undefined};
    this.dob = undefined;
  }

  ionViewDidLoad() {
    let person = JSON.parse(localStorage.getItem('PERSON'));
    if (person){
      this.person = person;
      this.age = this.getAge(this.person.birthdate);
      this.dob = new Date(this.person.birthdate).toISOString();
    }
  }

  reset(){
    this.person = {name: null, gender: null, birthdate: null, pnumber: null};
    this.dob = null;
    this.showProfile = false;
  }

  save(){
    this.person.birthdate = new Date(this.dob).getTime();
    this.age = this.getAge(this.person.birthdate);
    this.showProfile = true;
    localStorage.setItem('PERSON', JSON.stringify(this.person));
  }

  getAge(birthdate){
    let currentTime = new Date().getTime();
    console.log(currentTime);
     return ((currentTime - birthdate)/31556952000).toFixed(0);
  }
  // presentActionSheet() {
  //   const actionSheet = this.actionSheetCtrl.create({
  //     title: 'Modify your album',
  //     buttons: [
  //       {
  //         text: 'Share via Social Media',
  //         role: 'destructive',
  //         handler: () => {
  //           console.log('Destructive clicked');
  //         }
  //       },{
  //         text: 'Share with your doctors',
  //         handler: () => {
  //           console.log('Archive clicked');
  //         }
  //       },{
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }
  share(){
    this.socialsharing.share(this.person.name,this.person.gender,this.person.pnumber)
    .then(()=>{

    }).catch(()=>{

    });
  }


}

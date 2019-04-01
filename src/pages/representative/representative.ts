import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RepresentativePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-representative',
  templateUrl: 'representative.html',
})
export class RepresentativePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepresentativePage');
  }
  oUrl(){ window.open('https://api.whatsapp.com/send?phone=918056527003&text=I%20need%20a%20representative%20for%20consultation...&source=&data='); }

}

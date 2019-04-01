import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the NearhospitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nearhospital',
  templateUrl: 'nearhospital.html',
})
export class NearhospitalPage {
  latitude: number;
  longitude: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      //this.latitude = resp.coords.latitude;
      //this.longitude = resp.coords.longitude;
      console.log(resp.coords.latitude);
      console.log(resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     let watch = this.geolocation.watchPosition();
watch.subscribe((data) => {
 // data can be a set of coordinates, or an error (if an error occurred).
 // data.coords.latitude
 // data.coords.longitude
 //this.latitude = data.coords.latitude;
 //this.longitude = data.coords.longitude;
});

  } 
  openUrl(){ window.open('https://www.google.com/maps/search/hospital+near+me/@{{ latitude }},{{ longitude }}z/data=!3m1!4b1', '_system'); }
  opUrl(){ window.open('https://wa.me/91805627003'); }
}

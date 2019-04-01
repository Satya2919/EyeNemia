import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') user;
  @ViewChild('password') password;

  constructor(private firebaseauth:AngularFireAuth,public alertctrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  userLogin(){
    this.firebaseauth.auth.signInWithEmailAndPassword(this.user.value,this.password.value)
    .then(data => {
      console.log("User Login Succefully,",this.firebaseauth.auth.currentUser);
      // let alert = this.alertctrl.create(
      //  {
      //   title: 'Welcome to EyeNemia!',
      //   subTitle: 'Hey',
      //   buttons: ['OK']
      //  }

      // );
      // alert.present();
      this.navCtrl.push(HomePage);
    })
    .catch(error =>{
      console.log("User cannot Login due to Some Error",error);
    })
  }

}

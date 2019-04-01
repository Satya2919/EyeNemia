import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') user;
  @ViewChild('password') password;


  constructor(private firebaseauth:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePage');
  }
  userRegister(){
    this.firebaseauth.auth.createUserWithEmailAndPassword(this.user.value, this.password.value)
    .then(data => {
      console.log("User Registered Succefully,",data);
      this.navCtrl.push(LoginPage);
    })
    .catch(error =>{
      console.log("Error registering user",error);
    })
    console.log(this.user.value);
  }

}

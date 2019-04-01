import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { InstructionPage } from '../pages/instruction/instruction';
import { ReportPage } from '../pages/report/report';
import { NearhospitalPage } from '../pages/nearhospital/nearhospital';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { LogoutPage } from '../pages/logout/logout';
import { SlidePage } from '../pages/slide/slide';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { HttpClientModule } from '@angular/common/http';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { RepresentativePage } from '../pages/representative/representative';
import { SocialSharing } from '../../node_modules/@ionic-native/social-sharing';

const firebase =  {
  apiKey: "AIzaSyAfKN0fMEvXFisQ66U-yyzhgSCK6Fl6K2Y",
  authDomain: "hackathon-85d10.firebaseapp.com",
  databaseURL: "https://hackathon-85d10.firebaseio.com",
  projectId: "hackathon-85d10",
  storageBucket: "hackathon-85d10.appspot.com",
  messagingSenderId: "973241566124"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    InstructionPage,
    ReportPage,
    NearhospitalPage,
    AboutusPage,
    LogoutPage,
    SlidePage,
    RegisterPage,
    LoginPage,
    RepresentativePage
    

    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularCropperjsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFireAuthModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    InstructionPage,
    ReportPage,
    NearhospitalPage,
    AboutusPage,
    LogoutPage,
    SlidePage,
    RegisterPage,
    LoginPage,
    RepresentativePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,Camera,HttpClientModule,SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

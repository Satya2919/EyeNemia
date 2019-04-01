import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { InstructionPage } from '../pages/instruction/instruction';
import { ReportPage } from '../pages/report/report';
import { NearhospitalPage } from '../pages/nearhospital/nearhospital';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { LogoutPage } from '../pages/logout/logout';
import { SlidePage } from '../pages/slide/slide';
import { RepresentativePage } from '../pages/representative/representative';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SlidePage;

  pages: Array<{title: string, component: any, icon:string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      
      { title: 'Home', component: HomePage ,icon:"md-home"},
      { title: 'Profile', component: ProfilePage ,icon:"md-person"},
      { title: 'Instruction', component: InstructionPage ,icon:"md-paper"},
      { title: 'Doc Bot', component: ReportPage ,icon:"md-medkit"},
      { title: 'Representative', component: RepresentativePage ,icon:"md-people"},
      { title: 'Help And Support', component: NearhospitalPage ,icon:"md-help"},
      { title: 'Food Suggestion', component: AboutusPage ,icon:"md-bulb"},
      { title: 'LoggedIn', component: ProfilePage ,icon:"md-home"},
      { title: 'LogOut', component: LogoutPage ,icon:"md-person"}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    }); 
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

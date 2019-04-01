import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepresentativePage } from './representative';

@NgModule({
  declarations: [
    RepresentativePage,
  ],
  imports: [
    IonicPageModule.forChild(RepresentativePage),
  ],
})
export class RepresentativePageModule {}

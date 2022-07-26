import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterestsPageRoutingModule } from './interests-routing.module';

import { InterestsPage } from './interests.page';
import { MyintComponent } from '../myint/myint.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterestsPageRoutingModule
  ],
  declarations: [InterestsPage, MyintComponent]
})
export class InterestsPageModule {}

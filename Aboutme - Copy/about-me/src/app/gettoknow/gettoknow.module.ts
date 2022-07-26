import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GettoknowPageRoutingModule } from './gettoknow-routing.module';

import { GettoknowPage } from './gettoknow.page';
import { GetComponent } from '../get/get.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GettoknowPageRoutingModule
  ],
  declarations: [GettoknowPage, GetComponent]
})
export class GettoknowPageModule {}

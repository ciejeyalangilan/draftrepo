import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GettoknowPage } from './gettoknow.page';

const routes: Routes = [
  {
    path: '',
    component: GettoknowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GettoknowPageRoutingModule {}

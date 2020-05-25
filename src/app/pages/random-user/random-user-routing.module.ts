import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomUserPage } from './random-user.page';

const routes: Routes = [
  {
    path: '',
    component: RandomUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomUserPageRoutingModule {}

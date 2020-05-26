import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwCharacterDetailsPage } from './sw-character-details.page';

const routes: Routes = [
  {
    path: '',
    component: SwCharacterDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwCharacterDetailsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwCharactersListPage } from './sw-characters-list.page';

const routes: Routes = [
  {
    path: '',
    component: SwCharactersListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwCharactersListPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwCharactersListPageRoutingModule } from './sw-characters-list-routing.module';

import { SwCharactersListPage } from './sw-characters-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwCharactersListPageRoutingModule
  ],
  declarations: [SwCharactersListPage]
})
export class SwCharactersListPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwCharacterDetailsPageRoutingModule } from './sw-character-details-routing.module';

import { SwCharacterDetailsPage } from './sw-character-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwCharacterDetailsPageRoutingModule
  ],
  declarations: [SwCharacterDetailsPage]
})
export class SwCharacterDetailsPageModule {}

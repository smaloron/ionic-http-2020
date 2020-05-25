import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomUserPageRoutingModule } from './random-user-routing.module';

import { RandomUserPage } from './random-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomUserPageRoutingModule
  ],
  declarations: [RandomUserPage]
})
export class RandomUserPageModule {}

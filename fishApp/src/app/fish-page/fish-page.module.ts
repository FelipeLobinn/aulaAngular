import { FishPagePageRoutingModule } from './fish-page-routing.module';
import { FishPagePage } from './fish-page.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { FishCardComponentModule } from '../fish-card/fish-card.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FishCardComponentModule,
    FishPagePageRoutingModule
  ],
  declarations: [FishPagePage]
})
export class FishPagePageModule {}

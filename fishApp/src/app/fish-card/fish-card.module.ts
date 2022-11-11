//import { FishCardComponentRoutingModule } from './fish-card.component';
import { FishCardComponent } from './fish-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //FishCardComponentRoutingModule
  ],
  exports: [FishCardComponent],
  declarations: [FishCardComponent]
})
export class FishCardComponentModule {}

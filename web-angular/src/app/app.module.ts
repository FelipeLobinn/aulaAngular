import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserScreenComponent } from './pages/user-screen/user-screen.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FishCardComponent } from './pages/fish-card/fish-card.component';
import { DiaryPipe } from './pipes/diary-pipe/diary.pipe';
import { ModalComponent } from './pages/modal/modal.component'

@NgModule({
  declarations: [
    AppComponent,
    UserScreenComponent,
    MenuPageComponent,
    FishCardComponent,
    DiaryPipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

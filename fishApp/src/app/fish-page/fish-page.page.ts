import { ApiService } from 'src/app/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-fish-page',
  templateUrl: './fish-page.page.html',
  styleUrls: ['./fish-page.page.scss'],
})
export class FishPagePage implements OnInit {

  fishItems: any;

  constructor(
    private apiServ: ApiService,
    private route: Router
  ) { }

  ngOnInit() {
    this.getFishSpecies();
  }

  getFishSpecies() {
    this.apiServ.getFishSpecies()
    // .pipe(
    //   take(10)
    // )
    // .pipe(map(res => res.slice(0, 10)))
    .subscribe((res) => {
      this.fishItems = res;
      console.log('dataMenu: ', res);
    });
  }

  fishDetails(fishData){
    let navigationExtras : NavigationExtras = {
      state : {
        data: fishData
      }
    }
    this.route.navigate(['fish-details'], navigationExtras)
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api-service/api.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  dataMenu: any;
  constructor(
    private route: Router,
    private apiServ: ApiService,
  ) { }

  ngOnInit(): void {
    this.getFisheSpecies();
  }

  irInicio(){
    this.route.navigate(['user-screen'])
  }

  getFisheSpecies(){
    this.apiServ.getFishSpecies().subscribe((res)=>{
      //this.dataMenu = res;
      console.log(res);
    })
  }
}

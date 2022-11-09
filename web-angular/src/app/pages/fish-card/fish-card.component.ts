import { Component, Input, OnInit } from '@angular/core';
import { isDefined } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-fish-card',
  templateUrl: './fish-card.component.html',
  styleUrls: ['./fish-card.component.css']
})
export class FishCardComponent implements OnInit {

  @Input() dataFishes: any;
  
  constructor() { }

  ngOnInit(): void {
    let string: string = this.dataFishes.Taste;
    this.dataFishes.Taste = string!.replace(/<[^>]*>/g, '');
  }

  aaa() {
    
    
    //console.log(string)
    console.log(this.dataFishes.Taste)
    //console.log(this.dataFishes)
  }
}

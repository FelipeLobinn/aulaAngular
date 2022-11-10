import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-fish-card',
  templateUrl: './fish-card.component.html',
  styleUrls: ['./fish-card.component.css']
})
export class FishCardComponent implements OnInit {

  @Input() dataFishes: any;
  
  constructor(
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    let string: string = this.dataFishes['Physical Description'];
    this.dataFishes['Physical Description'] = string!.replace(/<[^>]*>/g, '');
  }

  readMore(){
    const modal = this.modalService.open(ModalComponent)
    modal.componentInstance.dataFishes = this.dataFishes;
  }
}

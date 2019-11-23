import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardFormComponent } from '../card-form/card-form.component';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  ngOnInit() {}

  clickAddCard() {
    const modal = this.modalService.open(CardFormComponent);
  modal.result.then(
    this.handleModalCardFormClose.bind(this),
     this.handleModalCardFormClose.bind(this));
}

handleModalCardFormClose(){
   alert("Closed");
}

}

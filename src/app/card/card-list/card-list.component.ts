import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CardFormComponent } from '../card-form/card-form.component';
import { CardService } from '../services/card.service';
import { CardViewModel } from '../models/card-view-model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  constructor(private cardService: CardService,
    private modalService: NgbModal) { }

  ngOnInit() {this.loadCards();}

  clickAddCard() {
    const modal = this.modalService.open(CardFormComponent);
  modal.result.then(
    this.handleModalCardFormClose.bind(this),
     this.handleModalCardFormClose.bind(this));
}

cards: CardViewModel[] = [];

  loadCards() {
    this.cardService.getCards().subscribe(response => {
      this.cards = [];
      response.docs.forEach(value => {
        const data = value.data();
        const id = value.id;
        const card: CardViewModel = {
          id: id,
          name: data.name,
          description: data.description,
          phone: data.phone,
          email: data.email,
          url: data.url,
          address: data.address,
          done: data.done,
          lastModifiedDate: data.lastModifiedDate.toDate()
        };

        this.cards.push(card);
      });
    });
}

handleModalCardFormClose(){
   alert("Closed");
}

handleEditClick(card: CardViewModel) {
  const modal = this.modalService.open(CardFormComponent);
  modal.result.then(
    this.handleModalCardFormClose.bind(this),
    this.handleModalCardFormClose.bind(this)
  )
  modal.componentInstance.createMode = false;
  modal.componentInstance.card = card;
}
//test

handleModalTodoFormClose(response) {
  // is response an object?
  if (response === Object(response)) {
    if (response.createMode) {
      response.card.id = response.id;
      this.cards.unshift(response.card);
    } else {
      let index = this.cards.findIndex(value => value.id == response.id);
      this.cards[index] = response.card;
    }
  }
}

handleDeleteClick(cardId: string, index: number) {
  this.cardService.deleteCard(cardId)
    .then(() => {
      this.cards.splice(index, 1);
    })
    .catch(err => console.error(err));
}
}

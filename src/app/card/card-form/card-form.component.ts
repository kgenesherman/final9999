import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../services/card.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Card } from '../models/card';
import { DocumentReference } from '@angular/fire/firestore';
import { CardViewModel} from '../models/card-view-model';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private cardService: CardService) { }
  cardForm: FormGroup;
  //formBuilder: any;
  createMode: boolean = true;
  card: CardViewModel;

  ngOnInit() {
    this.cardForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      url: ['', Validators.required],
      address: ['', Validators.required],
      done: false,
    });

    if (!this.createMode) { this.loadCard(this.card); }
  }

  loadCard(card) {
    this.cardForm.patchValue(card);
}

  saveCard() {
    // Validate the form
    if (this.cardForm.invalid) {
        return;
    }

    if (this.createMode) {
      let card: Card = this.cardForm.value;
      card.lastModifiedDate = new Date();
      card.createdDate = new Date();
      this.cardService.saveCard(card)
        .then(response => this.handleSuccessfulSaveCard(response, card))
        .catch(err => console.error(err));
    } else {
      let card: CardViewModel = this.cardForm.value;
      card.id = this.card.id;
      card.lastModifiedDate = new Date();
        this.cardService.editCard(card)
          .then(() => this.handleSuccessfulEditCard(card))
          .catch(err => console.error(err));
    }
 }

handleSuccessfulEditCard(card: CardViewModel) {
  this.activeModal.dismiss({ card: card, id: card.id, createMode: false });
}

handleSuccessfulSaveCard(response: DocumentReference, card: Card) {
   // Send info to the card-list component
   this.activeModal.dismiss({ card: card, id: response.id });
}

}

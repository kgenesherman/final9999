import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../services/card.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Card } from '../models/card';
import { DocumentReference } from '@angular/fire/firestore';

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

  ngOnInit() {
    this.cardForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      done: false
    });
  }

  saveCard() {
    // Validate the form
    if (this.cardForm.invalid) {
        return;
    }

    let card: Card = this.cardForm.value;
    card.lastModifiedDate = new Date();
    card.createdDate = new Date();
    this.cardService.saveCard(card)
      .then(response => this.handleSuccessfulSaveCard(response, card))
      .catch(err => console.error(err));
 }

handleSuccessfulSaveCard(response: DocumentReference, card: Card) {
   // Send info to the card-list component
   this.activeModal.dismiss({ card: card, id: response.id });
}

}

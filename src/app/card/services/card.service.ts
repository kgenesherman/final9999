import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { CardViewModel } from '../models/card-view-model';

@Injectable({
 providedIn: 'root'
})
export class CardService {

 constructor(private db: AngularFirestore) { }

 private cardCollectionName = 'cards';

 getCards(): Observable<firebase.firestore.QuerySnapshot> {
  return this.db.collection<Card>(this.cardCollectionName, ref => ref.orderBy('lastModifiedDate', 'desc')).get();
 }

 saveCard(card: Card): Promise<DocumentReference> {
  return this.db.collection(this.cardCollectionName).add(card);
 }

 editCard(card: CardViewModel): Promise<void>{
  return this.db.collection(this.cardCollectionName).doc(card.id).update(card);
 }

 editCardPartial(id: string, obj: Object): Promise<void>{
  return this.db.collection(this.cardCollectionName).doc(id).update(obj);
 }

 deleteCard(idCard: string): Promise<void>{
  return this.db.collection(this.cardCollectionName).doc(idCard).delete();
 }
}

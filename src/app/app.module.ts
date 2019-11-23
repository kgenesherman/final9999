import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire'; // Firebase config
import { AngularFirestoreModule } from '@angular/fire/firestore'; // For Cloud Firestore
import { environment } from 'src/environments/environment'; // Config
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './card/card-list/card-list.component';
import { CardFormComponent } from './card/card-form/card-form.component';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardFormComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // Import firebase
    AngularFirestoreModule, // Import firestore
    AppRoutingModule,
    NgbModule,
    FormsModule,
        ReactiveFormsModule
  ],
  entryComponents: [CardFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

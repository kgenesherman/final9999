import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AngularFireModule } from '@angular/fire'; // Firebase config
import { AngularFirestoreModule } from '@angular/fire/firestore'; // For Cloud Firestore
import { environment } from 'src/environments/environment'; // Config
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './card/card-list/card-list.component';
import { CardFormComponent } from './card/card-form/card-form.component';
//import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';
//import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardFormComponent,
    MenuComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase), // Import firebase
    AngularFirestoreModule, 
    AngularFireAuthModule,
    AppRoutingModule,
    NgbModule,
    //NgbModalModule,
    RouterModule,
    FormsModule,
        ReactiveFormsModule
  ],
  entryComponents: [CardFormComponent],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

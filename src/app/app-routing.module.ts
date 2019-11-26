import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card/card-list/card-list.component';
import { UserprofileComponent } from './/userprofile/userprofile.component';
//import { LoginComponent } from './/login/login.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  { path: '', component: AuthService },
  { path: 'userprofile', component: UserprofileComponent },
  { path: 'card-list', component: CardListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardListComponent } from './card/card-list/card-list.component';
import { UserprofileComponent } from './/userprofile/userprofile.component';

const routes: Routes = [
  { path: '', component: CardListComponent },
  { path: 'userprofile', component: UserprofileComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

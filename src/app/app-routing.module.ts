import { ClientListing } from './client-listing/client-listing.component';
import { NewClientComponent } from './new-client/new-client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'list-client', pathMatch: 'full' },
  { path: 'new-client', component: NewClientComponent },
  { path: 'list-client', component: ClientListing }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { Header } from './header/header.component';
import { ClientListing } from './client-listing/client-listing.component';
import { ListarClientesService } from './services/listarClientes.service';
import { NewClientComponent } from './new-client/new-client.component';


@NgModule({
  declarations: [
    AppComponent,
    Header,
    ClientListing,
    NewClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListarClientesService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinComponent } from './coin/coin.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CoinService } from './coin-list/coin.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoinListComponent,
    CoinComponent,
    SearchbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }

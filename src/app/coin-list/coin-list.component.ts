import { Component, OnInit } from '@angular/core';
import {Coin} from '../models/coin.model';
import { CoinService } from './coin.service';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss'],
})
export class CoinListComponent implements OnInit {
    listCoins: Coin[] = [
        {
            id: 1,
            name: 'Bitcoin',
            change: 2,
            acronym: 'BTC',
            marketCap: '1232356541',
            price: 34
        },
        {
            id: 1,
            name: 'Ethereum',
            change: 2,
            acronym: 'ETH',
            marketCap: '23678',
            price: 12
        },
        {
            id: 3,
            name: 'XRP',
            change: 2,
            acronym: 'XRP',
            marketCap: '18222',
            price: 56
        },
        {
            id: 3,
            name: 'EOS',
            change: 2,
            acronym: 'EOS',
            marketCap: '456552',
            price: 56
        }
    ];
    filteredListCoins: Coin[];
    demandListCoins: string[] = ['Bitcoin', 'Ethereum', 'XRP', 'EOS'];
  constructor(private _coinService: CoinService) {
      this.filteredListCoins = this.listCoins;
  }

  ngOnInit() {
      this._coinService.getCoinsList().subscribe(
          (coinList) => {
              console.log(coinList.data['1']);
              console.log(Array.isArray(coinList));

          },
          (error: any) => console.log(error)
      );
      this.listCoins.forEach( (element, index) => {
          this.listCoins[index].marketCap = String(element.marketCap).replace(/\B(?=(?:\d{3})+(?!\d))/g, ' ');
      });
  }

  filterCurrency(searchCurrency: string) {
      this.filteredListCoins = this.listCoins.filter( (coin) => {
          return coin.name.toLocaleLowerCase().indexOf(searchCurrency.toLocaleLowerCase()) !== -1;
      });
  }
}

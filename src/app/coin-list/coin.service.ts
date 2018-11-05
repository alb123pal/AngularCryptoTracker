import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CoinService {
    configUrl = 'https://api.coinmarketcap.com/v2/ticker/?limit=100';
    configUrl2 = 'https://cryptocompare.com/api/data/';
    configUrlIconPath: 'https://s2.coinmarketcap.com/static/img/coins/16x16/1.png';
    constructor(private _httpClient: HttpClient) {
    }

    getCoinsList(): Observable<any> {
        return this._httpClient.get(this.configUrl);
    }
}

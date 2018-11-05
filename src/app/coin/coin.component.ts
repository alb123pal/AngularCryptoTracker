import {Component, Input, OnInit} from '@angular/core';
import {Coin} from '../models/coin.model';

@Component({
    selector: 'app-coin',
    templateUrl: './coin.component.html',
    styleUrls: ['./coin.component.scss'],
})
export class CoinComponent implements OnInit {
    @Input() coin: Coin;
    constructor() {
    }

    ngOnInit() {
    }
}

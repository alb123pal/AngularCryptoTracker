import {Component, EventEmitter, OnInit, OnDestroy, Output} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit, OnDestroy {
  private _itemSubscription: Subscription;
  private $searchUpdated: Subject<string> = new Subject<string>();
  @Output() notifySearchCurrency: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
      this._itemSubscription = this.$searchUpdated
          .debounceTime(400)
          .subscribe( (searchCurrency: string) => {
            this.notifySearchCurrency.emit(searchCurrency);
      });
  }
  ngOnDestroy() {
      if (this._itemSubscription) {
        this._itemSubscription.unsubscribe();
      }
  }
  onSearchType(searchCurrency: string) {
      this.$searchUpdated.next(searchCurrency);
  }

}

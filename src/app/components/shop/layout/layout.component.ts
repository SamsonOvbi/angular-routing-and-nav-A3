import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ShoppingItem } from '../shared/shopping-item';
import { AppState } from '../store/app-state';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
    shoppingItems$: Observable<ShoppingItem[]>;

    constructor(private store: Store<AppState>) { }

    ngOnInit() {
        this.shoppingItems$ = this.store.select(store => store.shopping);
    }
}

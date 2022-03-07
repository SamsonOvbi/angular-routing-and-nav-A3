import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Observable } from 'rxjs';
import { Order } from '../shared/order';
import { ShoppingItem } from '../shared/shopping-item';
import { AppState } from '../store/app-state';
import { Store } from '@ngrx/store';
import { DeleteItemAction, UpdateItemAction } from '../store/shopping.actions';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {
  shoppingItems$: Observable<ShoppingItem[]>;
  quantities: any[] = [1, 2, 3];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
      this.shoppingItems$ = this.store.select(store => store.shopping);
  }

  removeItemFromView(id: any): void {
      this.store.dispatch(new DeleteItemAction(id));
  }

  onQuantityChange(shoppingItem: ShoppingItem) {
      const quantity: number = Number(shoppingItem.quantity);
      shoppingItem.quantity = quantity;
      shoppingItem.price = shoppingItem.product.productPrice * Number(quantity);
      this.store.dispatch(new UpdateItemAction(shoppingItem));
  }

}



import {Component, OnDestroy, OnInit} from '@angular/core';

import {Ingredient} from '../shared/ingredient.model';
import * as formShoppingList from './store/shopping-list.reducers';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import * as ShoppingListAction from './store/shopping-list.action';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;
  constructor(private store: Store<formShoppingList.AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListAction.StartEdit(index));
  }
}

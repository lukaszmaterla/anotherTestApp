import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as ShoppingListAction from '../store/shopping-list.action';
import * as formShoppingList from '../store/shopping-list.reducers';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editIngredient: Ingredient;

  constructor(private store: Store<formShoppingList.AppState>) {
  }

  ngOnInit() {
    this.subscription  = this.store.select('shoppingList').subscribe(
      data => {
        if (data.editedIngredientIndex > -1) {
          this.editIngredient = data.editedIngredient;
          this.editMode = true;
          this.shoppingForm.setValue({
            name: this.editIngredient.name,
            amount: this.editIngredient.amount
          });
        } else {
          this.editMode = false;
        }
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const ingredients2 = new Ingredient(value.name, value.amount);
    if (this.editMode === true) {
      this.store.dispatch(new ShoppingListAction.UpdateIngredient(
        {ingredient: ingredients2}
        )
      );
    } else {
      this.store.dispatch(new ShoppingListAction.AddIngredient(ingredients2));
    }
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.store.dispatch(new ShoppingListAction.StopEdit());
    this.subscription.unsubscribe();
  }

  onClear() {
    this.shoppingForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear();
    this.store.dispatch(new ShoppingListAction.DeleteIngredient());
  }
}

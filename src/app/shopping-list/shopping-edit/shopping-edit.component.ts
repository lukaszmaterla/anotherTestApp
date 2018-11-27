import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItem: number;
  editIngredient: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItem = index;
        this.editIngredient = this.shoppingListService.getIngretien(index);
        this.shoppingForm.setValue({
          name: this.editIngredient.name,
          amount: this.editIngredient.amount
        });
      }
    );
  }
  onAddItem(form: NgForm) {
    const value = form.value;
    const ingredients2 = new Ingredient(value.name, value.amount);
    if (this.editMode === true) {
      this.shoppingListService.updateIngredients(this.editedItem, ingredients2)
    } else {
      this.shoppingListService.addIngredient(ingredients2);
    }
    form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

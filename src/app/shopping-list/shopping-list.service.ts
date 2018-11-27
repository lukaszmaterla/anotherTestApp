import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngretien(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingred: Ingredient) {
    this.ingredients.push(ingred);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredients(index: number, newIngred: Ingredient) {
    this.ingredients[index] = newIngred;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

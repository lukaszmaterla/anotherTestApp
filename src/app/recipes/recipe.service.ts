import {Recipe} from './recipe.model';

import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class RecipeService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'test34',
      'https://thecozyapron.com/wp-content/uploads/2012/02/schnitzel_thecozyapron_1.jpg',
      [
        new Ingredient('Meat',1),
        new Ingredient('French Freis', 3),
      ]
    ),
    new Recipe(
      'Burger',
      'test3',
      'https://img.grouponcdn.com/deal/6vJFKaiPx4BfyDa77mgL/dx-960x576/v1/c700x420.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Tomato', 3)
      ]
    ),
    new Recipe(
      'Pizza',
      'test33333',
      'https://img.grouponcdn.com/deal/nhjcKdKnuawjKX427U9F/GK-2048x1229/v1/c700x420.jpg',
      [
        new Ingredient('Cham', 2),
        new Ingredient('Chesse', 3)
      ]
    ),
    new Recipe(
      'Spagetti',
      'test55555',
      'http://t-time.pl/modules/dayfeatures/images/kitchen/spagetti-z-kielbasa-mielona.jpg',
      [
        new Ingredient('pasta', 10),
        new Ingredient('souce', 12)
      ]
    )
  ];

  constructor() {

  }

  setRecepis(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }


  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addRecepis(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.slice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}

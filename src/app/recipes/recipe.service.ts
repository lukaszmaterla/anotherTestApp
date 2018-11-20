import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'test34', 'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg'),
    new Recipe('A test recipe 2', 'test3', 'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg'),
    new Recipe('A test recipe 3', 'test33333', 'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg'),
    new Recipe('A test recipe 4', 'test55555', 'https://cdn.pixabay.com/photo/2017/11/08/15/34/recipe-2930786_960_720.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

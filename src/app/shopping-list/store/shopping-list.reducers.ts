import * as ShoppingListAction from './shopping-list.action';

import {Ingredient} from '../../shared/ingredient.model';
import {State} from '@ngrx/store';

export interface AppState {
  // @ts-ignore
  shoppingList: State;
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

// @ts-ignore
const initialStale: State = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatos', 10)
  ],
  editedIngredient: null,
  editedIngredientIndex: -1
};

export function shoppingListReducer(state, action: ShoppingListAction.ShoppingListAction) {

    switch (action.type) {
      case ShoppingListAction.ADD_INGREDIENT:
        return {
          ...state,
          ingredients: [...state.ingredients, action.payload]
        };
        case ShoppingListAction.ADD_INGREDIENTS:
        return {
          ...state,
          ingredients: [...state.ingredients, ...action.payload]
        };
      case ShoppingListAction.UPDATE_INGREDIENT:
          const ingredient = state.ingredients[state.editedIngredientIndex];
          const updateIngredient = {
            ...ingredient,
            ...action.payload.ingredient
          };
          const ingredients = [...state.ingredients];
          ingredients[state.editedIngredientIndex] = updateIngredient;
          return {
          ...state,
          ingredients: ingredients,
          editedIngredient: null,
          editedIngredientIndex: -1
        };
      case ShoppingListAction.DELETE_INGREDIENT:
        const ingredients2 = [...state.ingredients];
        ingredients2.splice(state.editedIngredientIndex, 1);
          return {
            ...state,
            ingredients: ingredients2,
            editedIngredient: null,
            editedIngredientIndex: -1
          };
      case ShoppingListAction.START_EDIT:
        const editedIngredient = {...state.ingredients[action.payload]};
          return {
            ...state,
            editedIngredient: editedIngredient,
            editedIngredientIndex: action.payload
          };
      case ShoppingListAction.STOP_EDIT:
          return {
            ...state,
            editedIngredient: null,
            editedIngredientIndex: -1
          };
      default:
        return state;
    }
}

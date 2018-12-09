import {Ingredient} from '../../shared/ingredient.model';
import * as AuthActions from './auth.action';

export interface State {
  token: string;
  authenticated: boolean;
}

const initialStale: State = {
  token: null,
  authenticated:  false
};

export function authReducer(state = initialStale, action: AuthActions.AuthAction) {
  switch (action.type) {
    case AuthActions.SIGNUP:
    case AuthActions.SIGNIN:
      return {
        ...state,
        authenticated: true
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case AuthActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
  }

  return state;
}

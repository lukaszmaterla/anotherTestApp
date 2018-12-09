import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import * as AuthAction from './store/auth.action';
import {map, mergeMap, switchMap, tap} from 'rxjs/operators';
import * as firebase from 'firebase';
import {from} from 'rxjs/observable/from';
import {Router} from '@angular/router';


@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router) {
  }
  @Effect()
  authSignup = this.actions$.ofType(AuthAction.TRY_SIGNUP)
    .pipe(map((actions: AuthAction.TrySignup) => {
      return actions.payload;
    }))
    .pipe(switchMap((autData: {username: string, password: string}) => {
      return from(firebase.auth().createUserWithEmailAndPassword(autData.username, autData.password));
    }))
    .pipe(switchMap(() => {
      return from(firebase.auth().currentUser.getIdToken());
    }))
    .pipe(mergeMap((token: string) => {
      this.router.navigate(['/']);
      return [
        {
          type: AuthAction.SIGNUP
        },
        {
          type: AuthAction.SET_TOKEN,
          payload: token
        }
      ];
    }));

  @Effect()
  authSignin = this.actions$.ofType(AuthAction.TRY_SIGNIN)
    .pipe(map((actions: AuthAction.TrySignin) => {
      return actions.payload;
    }))
    .pipe(switchMap((autData: {username: string, password: string}) => {
      return from(firebase.auth().signInWithEmailAndPassword(autData.username, autData.password));
    }))
    .pipe(switchMap(() => {
      return from(firebase.auth().currentUser.getIdToken());
    }))
    .pipe(mergeMap((token: string) => {
      this.router.navigate(['/']);
      return [
        {
          type: AuthAction.SIGNIN
        },
        {
          type: AuthAction.SET_TOKEN,
          payload: token
        }
      ];
    }));

  @Effect({dispatch: false})
  authLogout = this.actions$.ofType(AuthAction.LOGOUT)
    .pipe(tap(() => {
      this.router.navigate(['/']);
    }));

}

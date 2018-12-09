import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import * as fromApp from '../store/app.reducer';
import * as fromAuth from './store/auth.reducer';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private store: Store<fromApp.AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('auth').pipe(map((authState: fromAuth.State) => {
      return authState.authenticated;
    }));
  }
}

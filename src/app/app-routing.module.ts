import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'recipes'},
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

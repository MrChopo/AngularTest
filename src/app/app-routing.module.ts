import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SkusTableComponent} from './skus.table/skus.table.component';
import {CartComponent} from './cart/cart.component';

const routes: Routes = [
  {path: '', component: SkusTableComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

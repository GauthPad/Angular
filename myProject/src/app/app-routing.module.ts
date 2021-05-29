import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full'}, // Redirecting Routes
  { path:'product', // Child Routes
    children: [
      { path: '', component: ProductsComponent},
      { path: 'edit', component: ProductEditComponent},
      { path: 'view', component: ProductViewComponent},
      { path: 'view/:id', component: ProductViewComponent}
    ]
  },
  { path:'product-edit', component: ProductEditComponent },
  { path:'product-view', component: ProductViewComponent },
  { path:'product/:id', component: ProductIdComponent },// Parameterized Routes (catching params in prodcutId Component)
  { path:'search', component: SearchComponent}, // Query Params in Routing (catching params in search Component)
  { path:'**', component: PageNotFoundComponent} // WildCard Routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

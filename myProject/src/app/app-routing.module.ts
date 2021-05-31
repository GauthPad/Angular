import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthChildGuard } from './auth-child.guard';
import { AuthLoadGuard } from './auth-load.guard';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full'}, // Redirecting Routes
  { path:'product', canActivate:[AuthGuard],// Child Routes
    children: [
      { path: '', component: ProductsComponent},
      { path: '', canActivateChild: [AuthChildGuard],  children:[
        { path: 'edit', component: ProductEditComponent},
        { path: 'view', component: ProductViewComponent},
        { path: 'view/:id', component: ProductViewComponent}
      ]}
      
    ]
  },
  { path:'login', canLoad: [AuthLoadGuard],
   loadChildren: () => import('./login/login.module').then(mod =>mod.LoginModule)},
  { path:'product-edit', component: ProductEditComponent, canActivate: [AuthGuard] },
  { path:'product-view', component: ProductViewComponent },
  { path:'product/:id', component: ProductIdComponent },// Parameterized Routes (catching params in prodcutId Component)
  { path:'search', component: SearchComponent},
  { path: 'testpath', loadChildren: () => import('./test/test.module').then(m => m.TestModule) }, // Query Params in Routing (catching params in search Component)
  { path:'**', component: PageNotFoundComponent} // WildCard Routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

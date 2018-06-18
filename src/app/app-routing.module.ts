import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductListComponent,
  },
  {
    path: 'products/new',
    pathMatch: 'full',
    component: ProductNewComponent,
  },
  {
    path: 'products/:id',
    pathMatch: 'full',
    component: ProductDetailsComponent,
  },
  {
    path: 'products/:id/edit',
    component: ProductUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { PublicHolidaysListComponent } from './components/public-holidays-list/public-holidays-list.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysListComponentModule } from './components/public-holidays-list/public-holidays-list.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{
    path: 'products',
    component: ProductListComponent }, {
    path: 'categories',
    component: CategoryListComponent }, {
    path: 'crypto',
    component: CryptoListComponent }, {
    path: 'public-holidays',
    component: PublicHolidaysListComponent }]),
    ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoryServiceModule, CryptoListComponentModule, CryptoServiceModule, PublicHolidaysListComponentModule, PublicHolidaysServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

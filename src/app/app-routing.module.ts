import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CryptoListComponent } from './components/crypto-list/crypto-list.component';
import { PublicHolidaysListComponent } from './components/public-holidays-list/public-holidays-list.component';
import { CheckboxCategoryListComponent } from './components/checkbox-category-list/checkbox-category-list.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserComponent } from './components/user/user.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { AgePredictionComponent } from './components/age-prediction/age-prediction.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RandomJokeComponent } from './components/random-joke/random-joke.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoryListComponentModule } from './components/category-list/category-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { CryptoListComponentModule } from './components/crypto-list/crypto-list.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { PublicHolidaysListComponentModule } from './components/public-holidays-list/public-holidays-list.component-module';
import { PublicHolidaysServiceModule } from './services/public-holidays.service-module';
import { CheckboxCategoryListComponentModule } from './components/checkbox-category-list/checkbox-category-list.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginServiceModule } from './services/login.service-module';
import { UserComponentModule } from './components/user/user.component-module';
import { UserServiceModule } from './services/user.service-module';
import { ProductDetailComponentModule } from './components/product-detail/product-detail.component-module';
import { CatFactsComponentModule } from './components/cat-facts/cat-facts.component-module';
import { CatFactsServiceModule } from './services/cat-facts.service-module';
import { AgePredictionComponentModule } from './components/age-prediction/age-prediction.component-module';
import { AgePredictionServiceModule } from './services/age-prediction.service-module';
import { CartDetailsComponentModule } from './components/cart-details/cart-details.component-module';
import { CartDetailsServiceModule } from './services/cart-details.service-module';
import { UserDetailsComponentModule } from './components/user-details/user-details.component-module';
import { RandomJokeComponentModule } from './components/random-joke/random-joke.component-module';
import { RandomJokeServiceModule } from './services/random-joke.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductListComponent }, { path: 'categories', component: CategoryListComponent }, { path: 'crypto', component: CryptoListComponent }, { path: 'public-holidays', component: PublicHolidaysListComponent }, { path: 'checkbox-categories', component: CheckboxCategoryListComponent }, { path: 'categories-menu', component: CategoriesMenuComponent }, { path: 'create-employee', component: EmployeeFormComponent }, { path: 'create-product', component: ProductFormComponent }, { path: 'login', component: LoginFormComponent }, { path: 'register', component: UserComponent }, { path: 'product/:id', component: ProductDetailComponent }, { path: 'cat-fact', component: CatFactsComponent }, { path: 'age/:name', component: AgePredictionComponent }, { path: 'cart/:id', component: CartDetailsComponent }, { path: 'user/:id', component: UserDetailsComponent }, { path: 'randomjoke', component: RandomJokeComponent }]), ProductListComponentModule, ProductsServiceModule, CategoryListComponentModule, CategoryServiceModule, CryptoListComponentModule, CryptoServiceModule, PublicHolidaysListComponentModule, PublicHolidaysServiceModule, CheckboxCategoryListComponentModule, CategoriesMenuComponentModule, ProductFormComponentModule, EmployeeFormComponentModule, EmployeeServiceModule, LoginFormComponentModule, LoginServiceModule, UserComponentModule, UserServiceModule, ProductDetailComponentModule, CatFactsComponentModule, CatFactsServiceModule, AgePredictionComponentModule, AgePredictionServiceModule, CartDetailsComponentModule, CartDetailsServiceModule, UserDetailsComponentModule, RandomJokeComponentModule, RandomJokeServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

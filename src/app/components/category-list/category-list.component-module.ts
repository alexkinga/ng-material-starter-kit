import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { CategoryListComponent } from './category-list.component';

@NgModule({
  imports: [MatCardModule, MatButtonToggleModule, MatListModule, CommonModule],
  declarations: [CategoryListComponent],
  providers: [],
  exports: [CategoryListComponent]
})
export class CategoryListComponentModule {
}

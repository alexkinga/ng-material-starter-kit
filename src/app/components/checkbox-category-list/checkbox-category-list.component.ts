import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-checkbox-category-list',
  styleUrls: ['./checkbox-category-list.component.scss'],
  templateUrl: './checkbox-category-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxCategoryListComponent {
  readonly data$: Observable<ProductModel[]> = this._categoryService.getAll();

  constructor(private _categoryService: CategoryService) {
  }
}

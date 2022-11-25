import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly form: FormGroup = new FormGroup({ title: new FormControl(), price: new FormControl(), description: new FormControl(), category: new FormControl(), image: new FormControl() });
  readonly categoryList$: Observable<ProductModel[]> = this._categoryService.getAll();

  constructor(private _productsService: ProductsService, private _categoryService: CategoryService) {
  }

  onProductFormSubmitted(products: FormGroup): void {
    this._productsService.create({
      title: products.get('title')?.value,
      price: products.get('price')?.value,
      description: products.get('description')?.value,
      category: products.get('category')?.value,
      image: products.get('image')?.value
    }).subscribe();
  }
}

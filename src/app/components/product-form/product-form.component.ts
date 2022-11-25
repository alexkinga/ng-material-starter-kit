import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-form',
  styleUrls: ['./product-form.component.scss'],
  templateUrl: './product-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent {
  readonly form: FormGroup = new FormGroup({ title: new FormControl(), price: new FormControl(), description: new FormControl(), category: new FormControl(), image: new FormControl() });

  constructor(private _productsService: ProductsService) {
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

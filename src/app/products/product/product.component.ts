import {Component, Input} from '@angular/core';
import {ProductInterface} from "./product.interface";

@Component({
  selector: 'shop-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  @Input() product: ProductInterface;
  description: boolean;
}

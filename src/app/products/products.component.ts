import {Component, OnInit} from "@angular/core";
import {ProductInterface} from "./product/product.interface";
import {ProductService} from "./product/services/product.service";

@Component({
  selector: 'shop-products',
  templateUrl: './products.component.html'
})

export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) {}
  loaded: boolean = false;
  products: ProductInterface[] = [];

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((products) => {
        this.loaded = true;
        this.products = products;
      })
  }
}

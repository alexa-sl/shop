import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ProductComponent} from "./product/product.component";
import {ProductService} from "./product/services/product.service";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {ProductsComponent} from "./products.component";

const routes = [{
  path: 'products',
  component: ProductsComponent
}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgOptimizedImage
  ],
  declarations: [ProductComponent, ProductsComponent],
  providers: [ProductService]
})

export class ProductsModule {}

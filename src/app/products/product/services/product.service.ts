import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {delay, Observable} from "rxjs";
import {ProductInterface} from "../product.interface";

@Injectable()
export class ProductService {
  constructor(private http: HttpClient) {
  }
  getProducts(): Observable<ProductInterface[]> {
    console.log('get all products');
    return this.http.get<ProductInterface[]>('https://fakestoreapi.com/products',{
      params: new HttpParams({fromObject: {limit: 15}})
    }).pipe(
      delay(1000)
    )
  }
}

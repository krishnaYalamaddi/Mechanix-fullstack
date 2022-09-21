import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  products: Array<Product> = new Array();
  product: Product = new Product();
  productsService: ProductsService = new ProductsService;

  constructor() { }

  ngOnInit(): void {
    return this.getProductData();
  }

  getProductData() {
    this.productsService.getProductDetails().then((res) => {
      this.products = res;
    })
  }

  addProduct() {
    // alert(this.name?.trim().toUpperCase());
    // alert(this.email?.trim().toLowerCase());
    // alert(this.password);
    // this.product.Id = this.products.length+1;
    // // this.product.productName = this.productName;
    // // this.product.productPrice = this.productPrice;

    // this.products.push(JSON.parse(JSON.stringify(this.product)));
    // this.product = new Product;
    this.productsService.addProductDetails(this.product).then(
      (res) => {
        this.product = new Product;
        this.getProductData();
      }
    )

  }

}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<any> = []

  constructor(private productsServices : ProductsService) { }

  ngOnInit(): void {
    this.loadProducts();
  }
 

  loadProducts(): void {
    this.productsServices.getProducts()
      .subscribe(
        data => this.products = data
      )
  }

}

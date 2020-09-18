import { Component, OnInit } from '@angular/core';
import {Product} from '../services/product';
import {ProductServices} from '../services/product.services';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  products: Product[];

  constructor(private service: ProductServices) { }

  ngOnInit(): void {
      this.products = this.service.getProducts();
  }

}

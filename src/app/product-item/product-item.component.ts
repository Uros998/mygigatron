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
  filteredProducts: Product[];



  constructor(private service: ProductServices) { }

  savePar(input: string){
    if(input) {
      this.filteredProducts = this.products.filter(item => item.name.toLowerCase().startsWith(input.toLowerCase()));
    }else{
      this.filteredProducts = this.products;
    }
  }

  ngOnInit(): void {
      this.products = this.service.getProducts();
      this.filteredProducts = this.products;
  }



}

import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  id;
  product: Product = new Product();
  deleteDisable: boolean;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id = params.get('id');
    });
  }

  ngOnInit() {
    console.log('inside detials component', this.id);
    this.productService.getProduct(this.id)
      .subscribe(product => {
        this.product = product;
        this.deleteDisable = !(this.product.qty === 0);
        console.log('products from mongodb', this.product, this.deleteDisable);
    });
}

  onDelete() {
    const confirmDelete = confirm(`Are you sure you want to delete ${this.product.name} from the product list?`);
  if (confirmDelete) {
    console.log('yes, delete the product');
    console.log('delete product from productss-list component', this.product.name);
    this.productService.deleteProduct(this.id).subscribe(
      removedPlayer => {
        this.router.navigateByUrl('/products');
      }
    );
  }
}

  back() {
    console.log('inside back in detail component');
    this.router.navigateByUrl('/products');
  }
}

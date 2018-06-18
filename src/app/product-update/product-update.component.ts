import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  id;
  product: Product = new Product();
  productName: string;
  productQty: number;
  productPrice: number;

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
        this.productName = product.name;
        this.productQty = product.qty;
        this.productPrice = product.price;
        console.log('products from mongodb', this.product);
    });
}

  onUpdate() {
    console.log('inside update in update component', this.id);
    this.productService.updateProduct(this.product)
      .subscribe(product => {
        this.product = product;
        console.log('products from mongodb', this.product);
    });
    this.router.navigateByUrl('/products');
  }

  reset(updateForm: NgForm) {
    console.log('inside reset in update component', this.product);
    this.product.name = this.productName;
    this.product.qty = this.productQty;
    this.product.price = this.productPrice;
    console.log('inside reset in update component', this.product);
  }
}

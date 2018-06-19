import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {NG_VALIDATORS} from '@angular/forms';

import { ProductService } from '../services/product.service';
import { Product } from '../product';


@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})

export class ProductNewComponent implements OnInit {
  product = new Product();
  minNum = 0;

  constructor(
    private productService: ProductService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('inside onsubmit in new component');
    this.productService.addProduct(this.product)
      .subscribe(newProduct => {
        console.log('added new product to database');
        this.router.navigateByUrl('/products');
      },
      error => { console.log('Ooops, something went wrong'); }
    );
  }

  reset(form: NgForm) {
    event.preventDefault();

    form.reset();

    console.log('inside reset in new componebt ');
  }
}

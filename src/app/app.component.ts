import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Product } from './model/products';
import { ProductService } from './Service/products.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'AngularHttpRequest';
  

  constructor(private http:HttpClient) {}

  ngOnInit() {
    
  }

 

  onProductCreate(products: { pName: string; desc: string; price: string }) {
    console.log(products);
    this.http.post()
  }

  

 
}

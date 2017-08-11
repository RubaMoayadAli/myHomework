import { Product } from './../Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [] ;
  currentProducts: Product[]=[];
  bill = 0 ;
  p: Product;

  constructor() {
    this.currentProducts.push(new Product('Guess',50000,0),
    new Product('Fossil',150000,0),
    new Product('Vivienne Westwood',70000,0),
  );
  }

  ngOnInit() {
  }
  addNewProduct0(name: string, price: number)
  {
    this.p = new Product(name, price, 1);
    this.bill += this.p.getBill(1);
    this.products.push(this.p);

  }
  addNewProduct(name: string, price: number)
  {
    this.p = new Product(name, price, 1);

    this.products.forEach(product => {
        if(this.p.name == product.name){
          this.bill += product.getBill(1);
          product.setIncreaseQuantity();
          name = "";
          return;
      }
    }
    );
    if(name == ""){
      return;
    }
    this.bill += this.p.getBill(1);
    this.products.push(this.p);

  }

  calculate() {
      this.products.forEach(product => {this.bill += product.getBill(product.getQuantity())});
  }
    incProduct(p: Product){
      this.products.forEach(product => {
        if(p === product){
          this.bill += product.getBill(1);
          product.setIncreaseQuantity();
      }
    }
    );
    }

    decProduct(p: Product){
      this.products.forEach(product => {
        if(p === product){
          this.bill -= product.getBill(1);
          product.setDecreaseQuantity();
      }
    }
    );
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
cart=[]
  constructor() { }
  openCart =false;
  price = 0;
products = [
  {
	"name": "Product 1",
	"detail": "Lorem ipsum dolor sit amet",
	"price": 99,
	"info": "This is the latest and greatest product from Derp corp.",
	"image": "http://placehold.it/300x300/999/CCC"
},{
	"name": "Product 2",
	"detail": "Lorem ipsum dolor sit amet",
	"price": 99,
	"offer": "BOGOF",
	"image": "http://placehold.it/300x300/999/CCC"
},{
	"name": "Product 3",
	"detail": "Lorem ipsum dolor sit amet",
	"price": 99,
	"image": "http://placehold.it/300x300/999/CCC"
},{
	"name": "Product 4",
	"detail": "Lorem ipsum dolor sit amet",
	"price": 99,
	"offer": "No srsly GTFO",
	"image": "http://placehold.it/300x300/999/CCC"
},{
	"name": "Product 5",
	"detail": "Lorem ipsum dolor sit amet",
	"price": 99,
	"image": "http://placehold.it/300x300/999/CCC"
},{
	"name": "Product 6",
	"detail": "Lorem ipsum dolor sit amet",
	"price": 99,
	"info": "This is the latest and greatest product from Derp corp.",
	"offer": "info with offer",
	"image": "http://placehold.it/300x300/999/CCC"
}];
  ngOnInit(): void {
  }
  AddToCart(product){
    this.price =  this.price  + product.price;
    let found =false
    for(let i=0; i<this.cart.length;i++){
     if(this.cart[i].name == product.name ){
       alert("Product Already in Cart Increasing Quantity by 1")
       found =true
       this.cart[i].quantity =  this.cart[i].quantity+1
     }
    }
    if(!found){
      product.quantity = 1

      this.cart.push(product)
    }
   
  }

}

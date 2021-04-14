import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
cart=[]
  constructor() { }
  opencart =false;
  price = 0;
products = [
  {
	"name": "Product 1",
	"detail": "Lorem ipsum dolor sit amet",
	"price": 11,
	"info": "This is the latest and greatest product from Derp corp.",
	"image": "https://marketingweek.imgix.net/content/uploads/2017/09/06163244/price-tags_750.jpg?auto=compress,format&q=60&w=750&h=460"
},{
	"name": "Product 2",
	"detail": "Lorem ipsum dolor sit amet",
	"price": 22,
	"offer": "BOGOF",
	"image": "https://marketingweek.imgix.net/content/uploads/2017/09/06163244/price-tags_750.jpg?auto=compress,format&q=60&w=750&h=460"
},{
	"name": "Product 3",
	"detail": "Lorem ipsum dolor sit amet",
	"price": 39,
	"image": "https://marketingweek.imgix.net/content/uploads/2017/09/06163244/price-tags_750.jpg?auto=compress,format&q=60&w=750&h=460"
},{
	"name": "Product 4",
	"detail": "Lorem ipsum dolor sit amet",
	"price": 96,
	"offer": "No srsly GTFO",
	"image": "https://marketingweek.imgix.net/content/uploads/2017/09/06163244/price-tags_750.jpg?auto=compress,format&q=60&w=750&h=460"
},{
	"name": "Product 5",
	"detail": "Lorem ipsum dolor sit amet",
	"price": 200,
	"image": "https://marketingweek.imgix.net/content/uploads/2017/09/06163244/price-tags_750.jpg?auto=compress,format&q=60&w=750&h=460"
},{
	"name": "Product 6",
	"detail": "Lorem ipsum dolor sit amet",
	"price": 899,
	"info": "This is the latest and greatest product from Derp corp.",
	"offer": "info with offer",
	"image": "https://marketingweek.imgix.net/content/uploads/2017/09/06163244/price-tags_750.jpg?auto=compress,format&q=60&w=750&h=460"
}];
  ngOnInit(): void {
  }
  AddToCart(product){
    this.price =  this.price  + product.price;
    let found =false
    for(let i=0; i<this.cart.length;i++){
     if(this.cart[i].name == product.name ){
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Product Already in Cart Increasing Quantity by 1'
		  });
	
       found =true
       this.cart[i].quantity =  this.cart[i].quantity+1
     }
    }
    if(!found){
      product.quantity = 1

      this.cart.push(product)
    }
   
  }
  Back(cart:Array<[]>){
	  this.cart = cart
	  this.opencart =false;
  }
  openCart(){
	  if(this.cart.length ==0){
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Cart is Empty'
		  });
	  }
	  else{
		this.opencart = true;
	  }
    
  }

}

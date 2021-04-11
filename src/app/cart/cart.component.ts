import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  @Input() cart: Array<[]>;
  @Input() price: number;
  @Output() ChangeMade = new EventEmitter<Object>();
  ngOnInit(): void {
   
  }

}

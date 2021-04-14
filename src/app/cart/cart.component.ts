import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }
  @Input() cart: Array<[]>;
  @Input() price: number;
  @Output() GoBack = new EventEmitter<Array<[]>>();
  ngOnInit(): void {
   
  }
  Back(){
    this.GoBack.emit(this.cart);
  }
  Buy(){
    Swal.fire('Tq For Buying');
  }
}

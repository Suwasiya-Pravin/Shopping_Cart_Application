import { Component } from '@angular/core';
import { CartserviceService } from '../services/cartservice.service';
import { Init } from 'v8';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
interface Product {
  name: string;
  price: number;
  quantity: number; 
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})
export class CartComponent{
  totalAmount: number = 0;
  cartItems: Product[] = [];
  constructor(private cartservice:CartserviceService) {
    
  }
  ngOnInit(): void {
  this.cartItems = this.cartservice.getCartItems();
  this.calculateTotalAmount();
}
removeCart(item:Product){
  this.cartservice.removeProductFromCart(item);
  this.calculateTotalAmount();
}

calculateTotalAmount(): void {
  this.totalAmount = this.cartItems.reduce(
    (total, item) => total + item.price,
    0
  );
}
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CartserviceService } from '../services/cartservice.service';
interface Product {
  name: string;
  price: number;
  quantity: number; // Add the 'quantity' property
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})


export class HomeComponent {
  constructor (private cartservice:CartserviceService){}
  products: Product[] = [
    { name: 'Shirt 1', price: 50 ,quantity:1},
    { name: 'Shirt 2', price: 20 ,quantity:1},
    { name: 'Shirt 3', price: 40 ,quantity:1},
    { name: 'Shirt 4', price: 10 ,quantity:1},
    { name: 'Shirt 5', price: 40 ,quantity:1},
    { name: 'Shirt 6', price: 10 ,quantity:1},
    { name: 'Shirt 7', price: 20 ,quantity:1},
    { name: 'Shirt 8', price: 70 ,quantity:1},
  ];
  addToCart(product: Product): void {
    // Implement your logic to add the product to the cart (e.g., using a service).
    // For now, let's just log the product to the console.
    console.log('Added to cart:', product);
    
    this.cartservice.addToCart(product);
  }
}

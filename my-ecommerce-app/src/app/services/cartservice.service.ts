import { Injectable } from '@angular/core';

interface Product {
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private toggle:boolean;
  constructor() { }
  private cartItems: Product[] = [];

  addToCart(product: Product): void {
    this.cartItems.push(product);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }
  removeProductFromCart(product: Product): void {
    const index = this.cartItems.findIndex((item) => item.name === product.name);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
    if(this.cartItems.length==0){
      this.toggle=false;
    }
  }
  

}

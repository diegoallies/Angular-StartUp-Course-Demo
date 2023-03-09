import { Injectable, EventEmitter } from '@angular/core';
import { IProduct } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProduct[] = [];
  cartUpdated = new EventEmitter<IProduct[]>();

  constructor() {}

  addToCart(product: IProduct): void {
    let index = this.items.findIndex(item => item.productId === product.productId);
    if (index == -1) {
      // Product does not exist in cart, add it with a quantity of 1
      this.items.push({ ...product, quantity: 1 });
    } else {
      // Product already exists in cart, increment the quantity
      this.items[index].quantity++;
;
    }
    this.cartUpdated.emit(this.items); // emit event with updated cart items
  }

  getItems(): IProduct[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }
}

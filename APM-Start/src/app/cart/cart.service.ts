import { Injectable, EventEmitter } from '@angular/core';
import { IProduct } from '../products/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: IProduct[] = [];
  cartUpdated: EventEmitter<IProduct[]> = new EventEmitter<IProduct[]>();

  constructor() {}

  addToCart(product: IProduct): void {
    let index = this.items.findIndex(item => item.productId === product.productId);
    if (index == -1) {
      // Product does not exist in cart, add it with a quantity of 1
      this.items.push({ ...product, quantity: 1 });
    } else {
      // Product already exists in cart, increment the quantity
      this.items[index].quantity++;
      console.log(this.items)
    }
    // Emit event with updated cart items
    this.cartUpdated.emit([...this.items]); // emit a new array to trigger change detection in the component
  }

  getItems(): IProduct[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }
}

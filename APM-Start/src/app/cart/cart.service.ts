import { Injectable, EventEmitter } from '@angular/core';
import { IProduct } from '../products/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartUpdated: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  addToCart(product: IProduct): void {
    const cartItems = this.getCartItems();
    const index = cartItems.findIndex(
      (item) => item.productId === product.productId
    );
    if (index !== -1) {
      cartItems[index].quantity++;
    } else {
      cartItems.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.cartUpdated.emit();
  }

  advanceAddToCart(product: IProduct, quantity: number): void {
    const cartItems = this.getCartItems();
    const index = cartItems.findIndex(
      (item) => item.productId === product.productId
    );
    if (index !== -1) {
      cartItems[index].quantity += quantity;
    } else {
      cartItems.push({ ...product, quantity });
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.cartUpdated.emit();
    this.cartUpdated.emit();
  }

  getCartItems(): IProduct[] {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
  }

  clearCart(): void {
    localStorage.removeItem('cartItems');
    this.cartUpdated.emit();
  }

  getItemTotalPrice(item: IProduct): number {
    return item.price * item.quantity;
  }
}

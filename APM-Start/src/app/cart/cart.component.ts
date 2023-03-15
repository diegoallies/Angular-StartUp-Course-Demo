import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { IProduct } from '../products/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: IProduct[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
    // Subscribe to the cartUpdated event to update the cartItems array
    this.cartService.cartUpdated.subscribe(() => {
      this.loadCartItems();
    });
  }

  loadCartItems(): void {
    const itemsString = localStorage.getItem('cartItems');
    if (itemsString) {
      this.cartItems = JSON.parse(itemsString);
    } else {
      this.cartItems = [];
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  }

  removeItem(item: IProduct): void {
    this.cartItems = this.cartItems.filter(i => i.productId !== item.productId);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.cartService.cartUpdated.emit();
  }

  clearCart(): void {
    this.cartItems = [];
    localStorage.removeItem('cartItems');
    this.cartService.cartUpdated.emit();
  }

  getItemTotalPrice(item: any): number {
    return item.price * item.quantity;
  }
  
}

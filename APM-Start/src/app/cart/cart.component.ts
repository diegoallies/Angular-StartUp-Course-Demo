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
  reload: boolean = false;

  constructor(private cartService: CartService) {
    this.loadCartItems()
  }

  ngOnInit(): void {
    this.loadCartItems();
    // Subscribe to the cartUpdated event to update the cartItems array
    this.cartService.cartUpdated.subscribe((items: IProduct[]) => {
      this.cartItems = items;
    });
  }

  loadCartItems(): void {
    this.cartItems = this.cartService.getItems();
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }

  refresh(): void {
    this.reload = true;
  }
  
  shouldRefresh(): boolean {
    if (this.reload) {
      this.reload = false;
      return true;
    }
    return false;
  }
}

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

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartService.cartUpdated.subscribe((items: IProduct[]) => {
      this.cartItems = items;
    });
    this.cartItems = this.cartService.getItems();
    console.log(this.cartItems);
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

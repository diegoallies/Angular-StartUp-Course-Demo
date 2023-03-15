import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct | undefined;
  products: IProduct[] = [];
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    this.productService.getProducts().subscribe((res) => {
      this.product = res.find((item) => item.productId == id);

      // console.log(this.product)
    });
  }

  advanceAddToCart(product: IProduct, quantity: number): void {
    this.cartService.advanceAddToCart(product, quantity);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  onProductClicked(product: IProduct): void {
    // console.log('Product clicked: ', product);
  }

  addToCart(product: IProduct): void {
    // console.log('Product added to cart: ', product);
  }
}

import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { CartService } from '../cart/cart.service';

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = "";
  sub!: Subscription;

  private _listFilter: string = "";
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this.setListFilter(value);
  }
  
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  
  constructor(
  private productService: ProductService,
  private cartService: CartService
  ) {}
  
  performFilter(filterBy: string): IProduct[] {
  filterBy = filterBy.toLocaleLowerCase();
  return this.products.filter((product: IProduct) =>
  product.productName.toLocaleLowerCase().includes(filterBy)
  );
  }
  
  toggleImage(): void {
  this.showImage = !this.showImage;
  }
  
  addToCart(product: IProduct): void {
  this.cartService.addToCart(product);
  }
  
  ngOnInit(): void {
  this.sub = this.productService.getProducts().subscribe({
  next: (products) => {
  this.products = products;
  this.filteredProducts = this.products;
  },
  error: (err) => (this.errorMessage = err),
  });
  }
  
  ngOnDestroy(): void {
  this.sub.unsubscribe();
  }
  
  // onRatingClicked(message: string): void {
  // this.pageTitle = "Product List: " + message;
  // }
  onProductClicked(product: IProduct): void {
    // console.log('Product clicked: ', product);
  }
  
  private setListFilter(value: string): void {
  this._listFilter = value;
  // console.log("In setter:", value);
  this.filteredProducts = this.performFilter(value);
  }
}

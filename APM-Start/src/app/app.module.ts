import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { SharedModule } from './shared/shared.module'; // Import SharedModule
import { LoginComponent } from './auth/login.component';
import { RegisterComponent } from './auth/register.component';
import { ProfileComponent } from './auth/profile.component'; // import ProfileComponent


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CartComponent,
    ProfileComponent // add ProfileComponent to declarations array

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'cart', component: CartComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'profile', component: ProfileComponent }, // add route for profile page
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ProductModule,
    SharedModule // Import SharedModule here
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

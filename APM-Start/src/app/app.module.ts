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
import { AuthGuard } from './auth/auth.gaurd';
import { DrawingBoardComponent } from './draw-board/draw-board.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CartComponent,
    ProfileComponent,
    DrawingBoardComponent, // add ProfileComponent to declarations array
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'draw-board', component: DrawingBoardComponent },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      }, // add route for profile page
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    ProductModule,
    SharedModule, // Import SharedModule here
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}

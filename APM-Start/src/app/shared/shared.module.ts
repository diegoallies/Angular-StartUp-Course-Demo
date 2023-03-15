import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StarComponent } from './star.component';
import { RegisterComponent } from '../auth/register.component';
import { LoginComponent } from '../auth/login.component'; // move LoginComponent import to here
import { AuthGuard } from '../auth/auth.gaurd';

@NgModule({
  declarations: [StarComponent, RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot([{ path: 'register', component: RegisterComponent }]),
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    LoginComponent, // add LoginComponent to exports array
    RegisterComponent,
  ],
  providers: [AuthGuard],
})
export class SharedModule {}

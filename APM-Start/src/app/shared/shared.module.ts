import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';
import { LoginComponent } from '../auth/login.component'; // move LoginComponent import to here
import { AuthGuard } from '../auth/auth.gaurd';

@NgModule({
  declarations: [StarComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    LoginComponent, // add LoginComponent to exports array
  ],
  providers: [AuthGuard],
})
export class SharedModule {}

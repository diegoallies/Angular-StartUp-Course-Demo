import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import { RegisterComponent } from '../auth/register.component';
import { LoginComponent } from '../auth/login.component'; // move LoginComponent import to here

@NgModule({
  declarations: [
    StarComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    LoginComponent, // add LoginComponent to exports array
    RegisterComponent
  ]
})
export class SharedModule { }

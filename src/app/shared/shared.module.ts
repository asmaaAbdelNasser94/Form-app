import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const matrial: any = [
  MatSlideToggleModule,
  MatInputModule,
  MatFormFieldModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    matrial,
  ],
  exports: [
    matrial
  ]
})
export class SharedModule { }

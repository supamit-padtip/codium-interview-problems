import { ButtonComponent } from './components/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { MaterialModule } from 'src/material.module';



@NgModule({
  declarations: [
    ButtonComponent,
    TextInputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ButtonComponent,
    TextInputComponent,
    MaterialModule
  ]
})
export class SharedModule { }

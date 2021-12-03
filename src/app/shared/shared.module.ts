import { ButtonComponent } from './components/button/button.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { MaterialModule } from 'src/material.module';
import { DisplayComponent } from './components/display/display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ButtonComponent,
    TextInputComponent,
    DisplayComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonComponent,
    TextInputComponent,
    DisplayComponent,
    MaterialModule,
  ]
})
export class SharedModule { }

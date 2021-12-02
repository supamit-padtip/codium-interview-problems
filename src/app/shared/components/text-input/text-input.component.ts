import { Component, Input, OnInit } from '@angular/core';
import { BaseFormField } from '../base-form';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent extends BaseFormField {
  @Input() type: string = "text";
}

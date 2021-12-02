import { Component, Input } from "@angular/core";
import { ControlValueAccessor } from "@angular/forms";

@Component({
    template: ""
})
export abstract class BaseFormField implements ControlValueAccessor {
    @Input() value: any = null;
    @Input() disabled: boolean = false;
    @Input() label: string = "";
    @Input() placeholder = "";
    @Input() formControlName?: any;
    @Input() maxLength: number = 255;

    writeValue(input: any): void {
        this.value = input;
      }

    registerOnChange(fn: any): void {
        throw new Error("Method not implemented.");
    }
    
    registerOnTouched(fn: any): void {
        throw new Error("Method not implemented.");
    }

}
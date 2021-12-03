import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label: string = "";
  @Input() type: string = "button";
  @Output() onclick = new EventEmitter<any>()

  click(): void{
    this.onclick.emit();
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = 'button';
  @Input() load: boolean = false;
  @Input() disabled: boolean = false;



  constructor() { }


}

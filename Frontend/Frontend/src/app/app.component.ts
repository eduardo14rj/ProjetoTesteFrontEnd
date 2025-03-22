import { Component } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
}

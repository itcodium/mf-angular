import { Component } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'micro';
  onClick() {
    alert('Button clicked!');
  }
}

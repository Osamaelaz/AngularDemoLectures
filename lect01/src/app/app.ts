import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
  ////We Can Add Or Html And Css Directly In The Component Decorator
  // template: `<h1>{{ title() }}</h1> `,
  // styles: `h1 { color: red; }`
})
export class App {
  protected readonly title = signal('lect01');
}

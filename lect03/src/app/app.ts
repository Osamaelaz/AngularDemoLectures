import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Footer } from './Components/footer/footer';
import { Products } from './Components/products/products';
import { Order } from './Components/order/order';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet,Header,Footer,Products],
  imports: [Header,Footer,Order],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lect03');
}

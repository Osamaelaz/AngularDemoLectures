import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {}

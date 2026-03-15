import { Component } from '@angular/core';
import { StaticProducts } from '../../Services/static-products';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
  providers: [StaticProducts],// here we have private instance 
  // of StaticProducts service to be used in this component and its children
  // so any change here will not affect the instance in other components 
  // that use StaticProducts service
})
export class Header {
  // constructor(private _staticProducts: StaticProducts) {}
}

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Icategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Products } from '../products/products';

@Component({
  selector: 'app-order',
  imports: [FormsModule, CommonModule, Products],
  templateUrl: './order.html',
  styleUrls: ['./order.css'],
})
// export class Order implements AfterViewInit {
export class Order{

  categories:Icategory[];
  selectedCatId:number=0;
  recievedCatId:number=0;
  totalOrderPrice: number = 0;

  // @ViewChild('focusButton') focusButton!: ElementRef;
  // @ViewChild('orderInput') orderInput!: ElementRef;

  constructor() {
    this.categories=[
      {id:1,name:'Laptops'},
      {id:2,name:'Mobiles'},
      {id:3,name:'Headphones'},
    ];
  }

  // ngAfterViewInit(): void {
  //   console.log(this.focusButton);
  // }

  // focusInput(){
  //   this.orderInput.nativeElement.focus();
  // }

  calculateTotalPrice(totalPrice:number){
    this.totalOrderPrice = totalPrice;
  }

}

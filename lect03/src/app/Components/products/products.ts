import { Component, EventEmitter, Input, input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
// import { HighlightCard } from '../../directives/highlight-card';
import { SquarePipe } from '../../Pipes/square-pipe';
@Component({
  selector: 'app-products', 
  // imports: [CommonModule,FormsModule,HighlightCard,SquarePipe],
  // imports: [CommonModule,FormsModule,HighlightCard],
  imports: [CommonModule,FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnChanges {
  products: Iproduct[];
  filteredProducts:Iproduct[];
  totalOrderPrice: number = 0;
 @Input() recievedCatId:number=0;

 // 1- Define Event 
 @Output() onTotalPriceChanged: EventEmitter<number>
 constructor() {
    this.products = [
      {
        id: 100,
        name: 'Dell Laptop',
        price: 30000,
        quantity: 0,
        imgUrl: 'assets/Images/product.webp',
        catId: 1,
      },
      {
        id: 101,
        name: 'HP Laptop',
        price: 25000,
        quantity: 1,
        imgUrl: 'assets/Images/product.webp',
        catId: 1,
      },
      {
        id: 102,
        name: 'iPhone 13',
        price: 20000,
        quantity: 20,
        imgUrl: 'assets/Images/product.webp',
        catId: 2,
      },
      {
        id: 103,
        name: 'Samsung Galaxy S21',
        price: 18000,
        quantity: 25,
        imgUrl: 'assets/Images/product.webp',
        catId: 2,
      },
      {
        id: 104,
        name: 'Sony Headphones',
        price: 5000,
        quantity: 30,
        imgUrl: 'assets/Images/product.webp',
        catId: 3,
      },
      {
        id: 105,
        name: 'Bose Headphones',
        price: 6000,
        quantity: 20,
        imgUrl: 'assets/Images/product.webp',
        catId: 3,
      },
    ];
    this.filteredProducts=this.products;    
    this.onTotalPriceChanged=new EventEmitter<number>();
  }
  ngOnChanges(){
    this.FilterProducts();
  }
  buy(count: string, price: number) {
    this.totalOrderPrice += Number(count) * price;
    //2- Emit Event with data (Fire Event)
    this.onTotalPriceChanged.emit(this.totalOrderPrice);
  }
  FilterProducts(){
    if(this.recievedCatId==0){
      this.filteredProducts=this.products;
    }else{
      this.filteredProducts=this.products.filter(p=>p.catId==this.recievedCatId);
    }
  }
}


import { Component } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { Icategory } from '../../Models/icategory';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-products', 
  imports: [CommonModule,FormsModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Iproduct[];
  categories:Icategory[];
  selectedCatId:number=0;
  totalOrderPrice: number = 0;
  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Dell Laptop',
        price: 30000,
        quantity: 0,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 1,
      },
      {
        id: 101,
        name: 'HP Laptop',
        price: 25000,
        quantity: 1,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 1,
      },
      {
        id: 102,
        name: 'iPhone 13',
        price: 20000,
        quantity: 20,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 2,
      },
      {
        id: 103,
        name: 'Samsung Galaxy S21',
        price: 18000,
        quantity: 25,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 2,
      },
      {
        id: 104,
        name: 'Sony Headphones',
        price: 5000,
        quantity: 30,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 3,
      },
      {
        id: 105,
        name: 'Bose Headphones',
        price: 6000,
        quantity: 20,
        imgUrl: 'https://picsum.photos/seed/picsum/200/300',
        catId: 3,
      },
    ];
    this.categories=[
      {id:1,name:'Laptops'},
      {id:2,name:'Mobiles'},
      {id:3,name:'Headphones'},
    ]
  }
  buy(count: string, price: number) {
    this.totalOrderPrice += Number(count) * price;
  }
  changeCat(){
    this.selectedCatId=2;
  }
  trackItem(index:number,item:Iproduct){
    return item.id;
    //Not Prefered return by index because may make 
    // changes that change indexes like silce 
  }
}

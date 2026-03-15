import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class StaticProducts {
  products: Iproduct[];

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
  }
  getAllProducts(): Iproduct[] {
    return this.products;
  }
  getProductById(id: number): Iproduct | null {
    let product = this.products.find((p) => p.id === id);
    return product || null;
  }
  getProductsByCategoryId(catId: number): Iproduct[] {
    if (catId == 0) {
      return this.products;
    } else {
      return this.products.filter((p) => p.catId === catId);
    }
  }
}

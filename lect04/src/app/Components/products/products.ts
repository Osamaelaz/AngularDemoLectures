import { Component, EventEmitter, Input, input, OnChanges, Output, output, SimpleChanges } from '@angular/core';
import { Iproduct } from '../../Models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StaticProducts } from '../../Services/static-products';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-products', 
  imports: [CommonModule, FormsModule, RouterLink],
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

 constructor(private _staticProducts:StaticProducts,private router:Router) {
    this.products = this._staticProducts.getAllProducts();

    this.filteredProducts=this.products;    
    this.onTotalPriceChanged=new EventEmitter<number>();
  }
  // ngOnChanges(){
  //   // this.FilterProducts();
  //  this.filteredProducts = this._staticProducts.getProductsByCategoryId(this.recievedCatId);
  // }

  ngOnChanges(){
  console.log(this.recievedCatId, typeof this.recievedCatId);

  this.filteredProducts =
    this._staticProducts.getProductsByCategoryId(this.recievedCatId);
}

  buy(count: string, price: number) {
    this.totalOrderPrice += Number(count) * price;
    //2- Emit Event with data (Fire Event)
    this.onTotalPriceChanged.emit(this.totalOrderPrice);
  }
  navigateToDeatails(productId:number){
    this.router.navigateByUrl(`/Details/${productId}`);
    // this.router.navigate(['/Details', productId])
  }
}


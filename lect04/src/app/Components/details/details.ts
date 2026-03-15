import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StaticProducts } from '../../Services/static-products';
import { Iproduct } from '../../Models/iproduct';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  currentId: number = 0;
  // product!:Iproduct;
  product: Iproduct | null= {} as Iproduct;
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _staticProductService: StaticProducts,
  ) {}
  ngOnInit(): void {
    this.currentId = Number(this._activatedRoute.snapshot.paramMap.get('id'));
    this.product = this._staticProductService.getProductById(this.currentId);

    
  }
}

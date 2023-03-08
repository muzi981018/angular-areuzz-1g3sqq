import { Component,OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts!: Observable< {type: string, price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.carService.getShippingPrices();
  }
  constructor(
    private carService : CartService
  ){ }
}

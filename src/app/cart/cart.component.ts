import { Component, OnInit } from '@angular/core';
import {SkusService} from '../services/skus.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public skuService: SkusService) { }

  ngOnInit(): void {
  }


}

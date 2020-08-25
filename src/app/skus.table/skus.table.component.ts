import { Component, OnInit } from '@angular/core';
import {SkusService} from '../services/skus.service';
import {Sku} from '../model/sku.model';

@Component({
  selector: 'app-skus-table',
  templateUrl: './skus.table.component.html',
  styleUrls: ['./skus.table.component.css']
})
export class SkusTableComponent implements OnInit {

  isCart = false;

  constructor(private skuService: SkusService) { }

  ngOnInit(): void {
  }

  showMarketItems(): void {
    this.isCart = false;
  }

  showCartItems(): void {
    this.isCart = true;
  }


}

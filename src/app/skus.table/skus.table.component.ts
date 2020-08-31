import { Component, OnInit } from '@angular/core';
import {SkusService} from '../services/skus.service';
import {Sku} from '../model/sku.model';

@Component({
  selector: 'app-skus-table',
  templateUrl: './skus.table.component.html',
  styleUrls: ['./skus.table.component.css']
})
export class SkusTableComponent implements OnInit {

  constructor(public skuService: SkusService) { }

  ngOnInit(): void {
  }

}

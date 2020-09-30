import {Component, Input, OnInit} from '@angular/core';
import {Sku} from '../model/sku.model';
import {IMG_URLS} from '../model/sku.constants';

@Component({
  selector: 'app-sku-card',
  templateUrl: './sku-card.component.html',
  styleUrls: ['./sku-card.component.css']
})
export class SkuCardComponent implements OnInit {

  @Input() sku: Sku;

  constructor() { }

  ngOnInit(): void {
  }

  public randomImg(): string {
    let randomNumber = Math.floor(Math.random()*IMG_URLS.length);

    return IMG_URLS[randomNumber];
  }


}

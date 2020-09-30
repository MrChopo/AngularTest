import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {SkusService} from '../services/skus.service';

@Component({
  selector: 'app-skus-table',
  templateUrl: './skus.table.component.html',
  styleUrls: ['./skus.table.component.css']
})
export class SkusTableComponent {

  constructor(public skuService: SkusService) { }

  filterSku(value: string) {
    console.log(value);
  }

  sortByPrice() {

  }
}

import {Component, NgModule, OnInit} from '@angular/core';
import {Subscription, Observable, Subject, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SkuService, Sku, Parent} from './services/skuService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  parents: Parent[] = [];
  parentName = '';
  selectedResult: Sku[] = [];
  skus: Sku[] = [];
  lowSorted = true;
  isCart = false;
  filterargs: string;

  constructor(private skuService: SkuService) {}

  ngOnInit(): void {
    this.uploadAllSku();
    //this.uploadParent();
  }

  // Метод по загрузке категорий выдает ошибку, поэтому пришлось немного извратиться

  uploadAllSku(): void{
    this.skuService.getAllSku().subscribe(skus => {
      this.skus = skus;


      const all: Parent = class implements Parent {
        id: number = null;
        name = 'all';
      };
      this.parents.push(all);

      for (const sku of this.skus){
        if (this.parentName !== sku.parent.name){
          this.parents.push(sku.parent);
          this.parentName = sku.parent.name;
        }
      }
    });
  }

  uploadParent(): void{
    // this.skuService.getSkuParent().subscribe(parents => {
    //   this.parents = parents;
    // });
  }

  checked(sku: Sku): void {
    sku.checked = !sku.checked;
  }

  addSelectedToCard(): void {
    for (const sku of this.skus){
      if (sku.checked){
        sku.inCart = true;
        sku.checked = false;
      }
    }
    //this.skus = this.deleteFromArray(this.skus);
  }

  sortedArrayByName(): Sku[] {
    this.skus = this.skus.sort((a, b) => (a.name > b.name) ? 1 : -1);
    console.log(this.skus);
    return this.skus;
  }

  sortedArrayByPrise(): Sku[] {
    if (this.lowSorted){
      this.skus = this.skus.sort((a, b) => (a.price > b.price) ? 1 : -1);
      this.lowSorted = false;
    } else {
      this.skus = this.skus.sort((a, b) => (a.price < b.price) ? 1 : -1);
      this.lowSorted = true;
    }
    console.log(this.skus);
    return this.skus;
  }

  showCartItems(): void {
    this.isCart = true;
    console.log(this.skus);
  }

  deleteFromCart(): Sku[] {
    for (const sku of this.skus){
      if (sku.checked){
        sku.inCart = false;
        sku.checked = false;
      }
    }
    //this.skus = this.deleteFromArray(this.skus);

    return this.skus;
  }

  deleteFromArray(array: Sku[]): Sku[]{
    let i = 0;
    while (i < array.length) {
      if (array[i].checked) {
        array[i].checked = false;
        array.splice(i, 1);
      } else {
        i++;
      }
    }
    console.log(array);
    return array;
  }

  showMarketItems(): void {
    this.isCart = false;
  }

  public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(newVal);
  }

  onselect(value: string): void {
    if (value !== 'all'){
      this.filterargs = value;
      console.log(this.skus);
    }else {
      this.filterargs = null;
    }

  }


}

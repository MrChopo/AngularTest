import {Component, NgModule, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {SkuService, Sku, Parent} from './services/skuService';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  parents: Parent[] = [];
  parentName = '';
  skus: Sku[] = [];
  lowSorted = true;
  isCart = false;
  filterargs: string


  constructor(private skuService: SkuService) {}


  ngOnInit(): void {
    this.uploadAllSku();
    //this.uploadParent();
  }


  // Метод по загрузке категорий выдает ошибку, поэтому пришлось немного извратиться
  uploadAllSku(): void{
    this.skuService.getAllSku().subscribe(skusArray => {
      this.skus = skusArray;


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
  }

  sortedArrayByName(): Sku[] {
    this.skus = this.skus.sort((a, b) => (a.name > b.name) ? 1 : -1);
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
    return this.skus;
  }

  showCartItems(): void {
    this.isCart = true;
  }

  deleteFromCart(): Sku[] {
    for (const sku of this.skus){
      if (sku.checked){
        sku.inCart = false;
        sku.checked = false;
      }
    }
    return this.skus;
  }

  showMarketItems(): void {
    this.isCart = false;
  }

  public onChange(event): void {
    const newVal = event.target.value;
  }

  onselect(value: string): void {
    if (value !== 'all'){
      this.filterargs = value;
    }else {
      this.filterargs = null;
    }

  }

}

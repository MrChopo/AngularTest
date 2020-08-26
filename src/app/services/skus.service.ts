import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Parent, Sku} from '../model/sku.model';
import {SkusApiService} from './skus.api.service';


@Injectable({providedIn: 'root'})
export class SkusService {

  skus: Sku[] = [];
  parents: Parent[] = [];
  filterargs: string = null;

  constructor(private httpClient: HttpClient, private skuApiService: SkusApiService) {}


  uploadData(): void{
    this.skuApiService.getAllSku().subscribe(skusArray => {
      this.skus = skusArray});

    this.skuApiService.getSkuParent().subscribe(parentsArray => {
      this.parents = parentsArray
      this.parents.push(new class implements Parent {
        id: number = 11;
        name: string = "all";
      })});
  }

  checked(sku: Sku): void {
    sku.checked = !sku.checked;
  }

  onselect(value: string): void {
    if (value !== 'all'){
      this.filterargs = value;
    }else {
      this.filterargs = null;
    }
  }

  returnFilter(): string{
    return this.filterargs;
  }

  addSelectedToCard(): void {
    for (const sku of this.skus){
      if (sku.checked){
        sku.inCart = true;
        sku.checked = false;
      }
    }
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

  sortedArrayByName(): void{
    this.skus = this.skus.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  sortedArrayByPrise(): void{
    this.skus = this.skus.sort((a, b) => (a.price > b.price) ? 1 : -1);
  }

}

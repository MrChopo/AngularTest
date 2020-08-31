import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Parent, Sku} from '../model/sku.model';
import {SkusApiService} from './skus.api.service';
import {Router} from '@angular/router';


@Injectable({providedIn: 'root'})
export class SkusService {

  public skus: Sku[] = [];
  public skusCart: Sku[] = [];
  public parents: Parent[] = [];
  public filterargs: string = null;

  constructor(private httpClient: HttpClient, private skuApiService: SkusApiService, private router: Router) {}


  public uploadData(): void{
    this.skuApiService.getAllSku().subscribe(skusArray => {
      this.skus = skusArray});

    this.skuApiService.getSkuParent().subscribe(parentsArray => {
      this.parents = parentsArray
      this.parents.push(new class implements Parent {
        id: number = 11;
        name: string = "all";
      })});
  }

  public checked(sku: Sku): void {
    sku.checked = !sku.checked;
  }

  public onselect(value: string): void {
    if (value !== 'all'){
      this.filterargs = value;
    }else {
      this.filterargs = null;
    }
  }

  public returnFilter(): string{
    return this.filterargs;
  }

  public addSelectedToCard(): void {
    for (const sku of this.skus){
      if (sku.checked){
        sku.checked = false;
        this.skusCart.push(sku);
      }
    }
  }

  public deleteFromCart(): Sku[] {
    let i = 0;
    while (i < this.skusCart.length) {
      if (this.skusCart[i].checked) {
        this.skusCart[i].checked = false;
        this.skusCart.splice(i, 1);
      } else {
        i++;
      }
    }
    return this.skusCart;
  }

  public sortedArrayByName(): void{

    if (this.isCart()){
      this.skusCart = this.skusCart.sort((a, b) => (a.name > b.name) ? 1 : -1);
    } else {
      this.skus = this.skus.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }

  }

  public sortedArrayByPrise(): void{

    if (this.isCart()){
      this.skusCart = this.skusCart.sort((a, b) => (a.price > b.price) ? 1 : -1);
    } else {
      this.skus = this.skus.sort((a, b) => (a.price > b.price) ? 1 : -1);
    }

  }

  private isCart(): boolean {
    if (this.router.url === '/cart') {
      return true;
    } else {
      return false;
    }
  }

}

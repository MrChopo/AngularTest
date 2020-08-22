import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

export interface Parent {
  id?: number;
  name: string;
}

export interface Sku {
  id: number;
  lastChange: string;
  name: string;
  price: number;
  parent: Parent;
  checked?: boolean;
  inCart?: boolean;
}

@Injectable({providedIn: 'root'})
export class SkuService {

    constructor(private httpClient: HttpClient) {}


  getAllSku(): Observable<Sku[]> {
    return this.httpClient.get<Sku[]>('http://ssdev.superagent.ru/TestApp/Values/GetAll');
  }

  getSkuParent(): Observable<Parent[]> {
    return this.httpClient.get<Parent[]>('http://ssdev.superagent.ru/TestApp/Values/GetParents');
  }

}

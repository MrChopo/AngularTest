import {Observable} from 'rxjs';
import {Parent, Sku} from '../model/sku.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class SkusApiService {

  constructor(private httpClient: HttpClient) {}

  getAllSku(): Observable<Sku[]> {
    return this.httpClient.get<Sku[]>('http://ssdev.superagent.ru/TestApp/Values/GetAll');
  }

  getSkuParent(): Observable<Parent[]> {
    return this.httpClient.get<Parent[]>('http://ssdev.superagent.ru/TestApp/Values/GetParents');
  }
}

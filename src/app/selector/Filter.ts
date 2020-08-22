import { Pipe, PipeTransform } from '@angular/core';
import {Parent} from '../services/skuService';

@Pipe({
  name: 'myfilter',
  pure: false
})
export class MyFilterPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(s => s.parent.name === filter);;
  }
}

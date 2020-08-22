import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Parent} from '../services/skuService';

@Component({
  // tslint:disable-next-line:component-utils
  selector: 'dropdown',
  template: ` <div class="row" >
                       <div>
       <select  (change)="onSelect($event.target)" class="form-control" placeholder="--select--" >
         <option *ngFor="let value of values" (click)="selectItem(value.id)">{{value.name}}</option>
       </select>
</div>
</div>`
})

export class DropdownComponent {
  @Input()
  values: Array<Parent>;

  @Output()
  select: EventEmitter<any>;
  onSelect(val): void {
    this.select.emit(val);
  }


  constructor() {
    this.select = new EventEmitter();
    this.values = new Array<Parent>();
  }

  // tslint:disable-next-line:typedef
  selectItem(value) {
    this.select.emit(value);
  }
}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Parent} from '../model/sku.model';


@Component({
  // tslint:disable-next-line:component-utils
  selector: 'par-dropdown',
  template: `<select  (change)="onSelect($event.target)" class="form-control" placeholder="select" >
         <option *ngFor="let value of values" (click)="selectItem(value.id)">{{value.name}}</option>
       </select>`
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

  public selectItem(value) {
    this.select.emit(value);
  }
}

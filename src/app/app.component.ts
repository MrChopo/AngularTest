import {Component, ContentChild, NgModule, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {SkusService} from './services/skus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'Test market';

  constructor(private skuService: SkusService) {}


  ngOnInit(): void {
    this.skuService.uploadData();
  }


}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MyFilterPipe} from './filter/filter.pipe';
import {DropdownComponent} from './dropdown/dropdown.component';
import {MatTableModule} from '@angular/material/table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SkusTableComponent } from './skus.table/skus.table.component';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    MyFilterPipe,
    SkusTableComponent,
    NavbarComponent,
    CartComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatSliderModule,
        HttpClientModule,
        MatListModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatSidenavModule,
        MatSelectModule,
        DragDropModule,
        MatTableModule,
        NgbModule,
        AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {



}

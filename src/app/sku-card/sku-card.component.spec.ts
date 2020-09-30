import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuCardComponent } from './sku-card.component';

describe('SkuCardComponent', () => {
  let component: SkuCardComponent;
  let fixture: ComponentFixture<SkuCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

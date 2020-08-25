import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Skus.TableComponent } from './skus.table.component';

describe('Skus.TableComponent', () => {
  let component: Skus.TableComponent;
  let fixture: ComponentFixture<Skus.TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Skus.TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Skus.TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

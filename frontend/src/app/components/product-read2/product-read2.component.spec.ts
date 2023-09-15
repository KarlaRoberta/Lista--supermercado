import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRead2Component } from './product-read2.component';

describe('ProductRead2Component', () => {
  let component: ProductRead2Component;
  let fixture: ComponentFixture<ProductRead2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductRead2Component]
    });
    fixture = TestBed.createComponent(ProductRead2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDsComponent } from './product-ds.component';

describe('ProductDsComponent', () => {
  let component: ProductDsComponent;
  let fixture: ComponentFixture<ProductDsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDsComponent]
    });
    fixture = TestBed.createComponent(ProductDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

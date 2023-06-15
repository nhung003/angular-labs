import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductThemComponent } from './product-them.component';

describe('ProductThemComponent', () => {
  let component: ProductThemComponent;
  let fixture: ComponentFixture<ProductThemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductThemComponent]
    });
    fixture = TestBed.createComponent(ProductThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

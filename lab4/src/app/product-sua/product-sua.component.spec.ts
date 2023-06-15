import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSuaComponent } from './product-sua.component';

describe('ProductSuaComponent', () => {
  let component: ProductSuaComponent;
  let fixture: ComponentFixture<ProductSuaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSuaComponent]
    });
    fixture = TestBed.createComponent(ProductSuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

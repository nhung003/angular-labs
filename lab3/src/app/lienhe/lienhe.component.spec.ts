import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienheComponent } from './lienhe.component';

describe('LienheComponent', () => {
  let component: LienheComponent;
  let fixture: ComponentFixture<LienheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LienheComponent]
    });
    fixture = TestBed.createComponent(LienheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
